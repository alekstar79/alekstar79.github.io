var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/clone.ts
function deepClone(value, map = /* @__PURE__ */ new WeakMap()) {
  if (typeof value !== "object" || value === null) {
    return value;
  }
  if (map.has(value)) {
    return map.get(value);
  }
  if (value instanceof Date) {
    return new Date(value);
  }
  if (value instanceof RegExp) {
    return new RegExp(value);
  }
  if (value instanceof Map) {
    const result2 = /* @__PURE__ */ new Map();
    map.set(value, result2);
    value.forEach((v, k) => {
      result2.set(deepClone(k, map), deepClone(v, map));
    });
    return result2;
  }
  if (value instanceof Set) {
    const result2 = /* @__PURE__ */ new Set();
    map.set(value, result2);
    value.forEach((v) => {
      result2.add(deepClone(v, map));
    });
    return result2;
  }
  if (Array.isArray(value)) {
    const result2 = [];
    map.set(value, result2);
    value.forEach((item, i) => {
      result2[i] = deepClone(item, map);
    });
    return result2;
  }
  const result = {};
  map.set(value, result);
  Object.entries(value).forEach(([key, val]) => {
    result[key] = deepClone(val, map);
  });
  return result;
}
globalThis.structuredClone ?? (globalThis.structuredClone = deepClone);

// src/reactivity.ts
var MUTATING_ARRAY_METHODS = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
var NON_REACTIVE_TYPES = /* @__PURE__ */ new Set([Date, RegExp, Map, Set, WeakMap, WeakSet, Function]);
var DEFAULT_CONFIG = {
  enableDebug: false,
  cyclePrevention: true,
  batchUpdates: true,
  deepReactiveMaxDepth: 10,
  trackingDepth: 100
};
var config = { ...DEFAULT_CONFIG };
var targetMap = /* @__PURE__ */ new WeakMap();
var reactiveMap = /* @__PURE__ */ new WeakMap();
var effectStack = [];
var activeEffect = null;
var activeEffectScope = null;
var shouldTrack = true;
var updateQueue = /* @__PURE__ */ new Set();
var scheduledEffects = /* @__PURE__ */ new Set();
var batchStack = 0;
var isBatching = false;
var isObject = (value) => value !== null && typeof value === "object";
var isReactiveEligible = (target) => {
  return isObject(target) && !NON_REACTIVE_TYPES.has(target?.constructor);
};
var deepEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (typeof a !== "object" || typeof b !== "object") return false;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
};
var traverse = (value, seen = /* @__PURE__ */ new Set()) => {
  if (!isObject(value) || value === null || seen.has(value)) return;
  seen.add(value);
  if (Array.isArray(value)) {
    value.forEach((item) => traverse(item, seen));
  } else {
    for (const key in value) {
      traverse(value[key], seen);
    }
  }
};
var getSourceValue = (source) => {
  if (typeof source === "function") return source();
  if (isRef(source)) return source.value;
  if (Array.isArray(source)) return source.map((s) => getSourceValue(s));
  return source;
};
var RefImpl = class {
  constructor(value) {
    __publicField(this, "_value");
    __publicField(this, "__isRef", true);
    this._value = value;
  }
  get value() {
    track(this, "value");
    return this._value;
  }
  set value(newValue) {
    if (!Object.is(this._value, newValue)) {
      this._value = newValue;
      trigger(this, "value");
    }
  }
};
var ComputedRefImpl = class {
  constructor(getterOrOptions) {
    __publicField(this, "_value");
    __publicField(this, "_dirty", true);
    __publicField(this, "_isSetting", false);
    __publicField(this, "_getter");
    __publicField(this, "_setter");
    __publicField(this, "_runner");
    __publicField(this, "__isRef", true);
    const options = typeof getterOrOptions === "function" ? { get: getterOrOptions } : getterOrOptions;
    this._getter = options.get;
    this._setter = options.set;
    this._runner = createComputedEffect(options.get, {
      lazy: true,
      scheduler: () => {
        if (!this._dirty) {
          this._dirty = true;
          if (!this._isSetting) {
            trigger(this, "value");
          }
        }
      }
    });
  }
  get value() {
    track(this, "value");
    if (this._dirty) {
      if (config.enableDebug) {
        console.log("[Computed] Recomputing value");
      }
      this._value = this._runner.run();
      this._dirty = false;
    }
    return this._value;
  }
  set value(newValue) {
    if (this._setter) {
      this._isSetting = true;
      try {
        this._setter(newValue);
        this._dirty = true;
        trigger(this, "value");
      } finally {
        this._isSetting = false;
      }
    } else if (config.enableDebug) {
      console.warn("[Computed] Attempt to set computed value without setter");
    }
  }
};
var EffectScopeImpl = class {
  constructor() {
    __publicField(this, "_active", true);
    __publicField(this, "effects", /* @__PURE__ */ new Set());
  }
  get active() {
    return this._active;
  }
  run(fn) {
    if (!this._active) {
      console.warn("[EffectScope] Running effect in inactive scope");
      return void 0;
    }
    const parentScope = activeEffectScope;
    activeEffectScope = this;
    try {
      return fn();
    } finally {
      activeEffectScope = parentScope;
    }
  }
  stop() {
    if (!this._active) return;
    this._active = false;
    this.effects.forEach((stop) => stop());
    this.effects.clear();
    if (config.enableDebug) {
      console.log("[EffectScope] Scope stopped");
    }
  }
};
function track(target, key) {
  if (!shouldTrack || !activeEffect || activeEffect.isActive === false) return;
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = /* @__PURE__ */ new Map();
    targetMap.set(target, depsMap);
  }
  let dep = depsMap.get(key);
  if (!dep) {
    dep = /* @__PURE__ */ new Set();
    depsMap.set(key, dep);
  }
  if (!dep.has(activeEffect)) {
    dep.add(activeEffect);
    if (!activeEffect.deps) {
      activeEffect.deps = [];
    }
    activeEffect.deps.push(dep);
    if (config.enableDebug) {
      console.log(`[Track] Effect registered for ${String(key)}`);
    }
  }
}
function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  const dep = depsMap.get(key);
  if (!dep) return;
  if (config.enableDebug) {
    console.log(`[Trigger] Found ${dep.size} effects for ${String(key)}`);
  }
  const effectsToRun = /* @__PURE__ */ new Set();
  dep.forEach((effect2) => {
    if (effect2 !== activeEffect && effect2.isActive !== false) {
      effectsToRun.add(effect2);
    }
  });
  if (config.enableDebug) {
    console.log(`[Trigger] Running ${effectsToRun.size} effects for ${String(key)}`);
  }
  effectsToRun.forEach((effect2) => {
    if (config.batchUpdates && isBatching) {
      if (!scheduledEffects.has(effect2)) {
        updateQueue.add(effect2);
        scheduledEffects.add(effect2);
      }
    } else {
      if (effect2.scheduler) {
        effect2.scheduler(() => effect2());
      } else {
        effect2();
      }
    }
  });
}
function cleanupEffect(effectFn) {
  const deps = effectFn.deps;
  if (deps) {
    deps.forEach((dep) => {
      dep.delete(effectFn);
    });
    deps.length = 0;
  }
  if (config.enableDebug) {
    console.log("[Cleanup] Effect dependencies cleaned");
  }
}
function flushBatch() {
  isBatching = false;
  batchStack = 0;
  const effects = Array.from(updateQueue);
  updateQueue.clear();
  scheduledEffects.clear();
  if (config.enableDebug) {
    console.log(`[Batch] Flushing ${effects.length} effects`);
  }
  effects.forEach((effect2) => {
    try {
      effect2();
    } catch (error) {
      console.error("Error during batch update:", error);
    }
  });
}
function handleArrayMethodTriggers(target, method, args) {
  switch (method) {
    case "push":
    case "unshift":
      const startIndex = method === "push" ? target.length - args.length : 0;
      for (let i = startIndex; i < startIndex + args.length; i++) {
        trigger(target, i.toString());
      }
      break;
    case "pop":
    case "shift":
      if (target.length >= 0) {
        const removedIndex = method === "pop" ? target.length : 0;
        trigger(target, removedIndex.toString());
      }
      break;
    case "splice":
      const start = args[0];
      const deleteCount = args[1];
      for (let i = start; i < start + (deleteCount || 0); i++) {
        trigger(target, i.toString());
      }
      for (let i = start; i < start + (args.length - 2); i++) {
        trigger(target, i.toString());
      }
      break;
    case "sort":
    case "reverse":
      for (let i = 0; i < target.length; i++) {
        trigger(target, i.toString());
      }
      break;
  }
}
function createArrayMethodHandler(target, method) {
  return function(...args) {
    const oldLength = target.length;
    pauseTracking();
    const result = Array.prototype[method].apply(target, args);
    resetTracking();
    if (target.length !== oldLength) {
      trigger(target, "length");
    }
    trigger(target, "keys");
    handleArrayMethodTriggers(target, method, args);
    return result;
  };
}
var arrayHandlers = {
  get(target, key, receiver) {
    if (key === "__isReactive") return true;
    if (typeof key !== "symbol") {
      track(target, key);
    }
    if (typeof key === "string" && MUTATING_ARRAY_METHODS.includes(key)) {
      return createArrayMethodHandler(target, key);
    }
    const value = Reflect.get(target, key, receiver);
    return isReactiveEligible(value) ? reactive(value) : value;
  },
  set(target, key, value, receiver) {
    const numericKey = typeof key === "string" ? parseInt(key) : NaN;
    const isIndex = !isNaN(numericKey) && numericKey >= 0;
    const oldValue = target[key];
    if (Object.is(oldValue, value)) return true;
    const result = Reflect.set(target, key, value, receiver);
    if (result) {
      trigger(target, key);
      if (isIndex) trigger(target, "keys");
    }
    return result;
  },
  has(target, key) {
    track(target, key);
    return Reflect.has(target, key);
  },
  ownKeys(target) {
    track(target, "keys");
    return Reflect.ownKeys(target);
  },
  deleteProperty(target, key) {
    const hadKey = Reflect.has(target, key);
    const result = Reflect.deleteProperty(target, key);
    if (hadKey && result) {
      trigger(target, key);
      trigger(target, "keys");
    }
    return result;
  }
};
var objectHandlers = {
  get(target, key, receiver) {
    if (key === "__isReactive") return true;
    const res = Reflect.get(target, key, receiver);
    track(target, key);
    return isReactiveEligible(res) ? reactive(res) : res;
  },
  set(target, key, value, receiver) {
    const oldValue = target[key];
    if (Object.is(oldValue, value)) return true;
    const result = Reflect.set(target, key, value, receiver);
    if (result) trigger(target, key);
    return result;
  },
  has(target, key) {
    track(target, key);
    return Reflect.has(target, key);
  },
  ownKeys(target) {
    track(target, "keys");
    return Reflect.ownKeys(target);
  },
  deleteProperty(target, key) {
    const hadKey = Reflect.has(target, key);
    const result = Reflect.deleteProperty(target, key);
    if (hadKey && result) {
      trigger(target, key);
    }
    return result;
  }
};
function ref(initialValue) {
  return new RefImpl(initialValue);
}
function reactive(target, depth = 0) {
  if (depth > (config.deepReactiveMaxDepth || 10)) return target;
  if (!isReactiveEligible(target)) return target;
  const existing = reactiveMap.get(target);
  if (existing) return existing;
  let proxy;
  if (Array.isArray(target)) {
    const array = [...target];
    proxy = new Proxy(array, arrayHandlers);
  } else {
    proxy = new Proxy(target, objectHandlers);
  }
  reactiveMap.set(target, proxy);
  return proxy;
}
function computed(getterOrOptions) {
  return new ComputedRefImpl(getterOrOptions);
}
function createComputedEffect(fn, options) {
  let result;
  let isStopped = false;
  const effectFn = (() => {
    if (isStopped) return result;
    try {
      effectStack.push(effectFn);
      activeEffect = effectFn;
      result = fn();
      return result;
    } finally {
      effectStack.pop();
      activeEffect = effectStack.length > 0 ? effectStack[effectStack.length - 1] : null;
    }
  });
  effectFn.isActive = true;
  effectFn.deps = [];
  effectFn.scheduler = options?.scheduler;
  const run = () => effectFn();
  const stop = () => {
    if (effectFn.isActive) {
      cleanupEffect(effectFn);
      effectFn.isActive = false;
      isStopped = true;
    }
  };
  if (!options?.lazy) {
    run();
  }
  return { run, stop };
}
function effect(update, options) {
  const effectFn = (() => {
    if (effectFn.cleanup) {
      effectFn.cleanup();
      effectFn.cleanup = void 0;
    }
    try {
      effectStack.push(effectFn);
      activeEffect = effectFn;
      const result = update();
      if (typeof result === "function") {
        effectFn.cleanup = result;
      }
    } finally {
      effectStack.pop();
      activeEffect = effectStack.length > 0 ? effectStack[effectStack.length - 1] : null;
    }
  });
  effectFn.isActive = true;
  effectFn.cleanup = void 0;
  effectFn.deps = [];
  effectFn.scheduler = options?.scheduler;
  const stop = () => {
    if (effectFn.isActive) {
      cleanupEffect(effectFn);
      effectFn.isActive = false;
      if (effectFn.cleanup) {
        effectFn.cleanup();
      }
      updateQueue.delete(effectFn);
      scheduledEffects.delete(effectFn);
      if (config.enableDebug) {
        console.log("[Effect] Effect stopped");
      }
    }
  };
  if (activeEffectScope && activeEffectScope.active) {
    activeEffectScope.effects.add(stop);
  }
  if (options?.scope && options.scope.active) {
    options.scope.effects.add(stop);
  }
  if (!options?.lazy) {
    effectFn();
  }
  return stop;
}
function createEffectScope() {
  return new EffectScopeImpl();
}
function watch(source, callback, options) {
  const opts = {
    immediate: false,
    deep: false,
    flush: "post",
    ...options
  };
  let oldValue;
  let isFirstRun = true;
  let pendingCleanup = null;
  const stop = effect(() => {
    const newValue = getSourceValue(source);
    if (opts.deep && isObject(newValue)) {
      traverse(newValue);
    }
    if (isFirstRun) {
      if (opts.immediate) {
        callback(newValue, void 0, (fn) => {
          pendingCleanup = fn;
        });
      }
      oldValue = opts.deep ? deepClone(newValue) : newValue;
      isFirstRun = false;
    } else {
      const hasChanged = Array.isArray(newValue) && Array.isArray(oldValue) ? newValue.some(
        (val, idx) => opts.deep ? !deepEqual(val, oldValue[idx]) : !Object.is(val, oldValue[idx])
      ) : opts.deep ? !deepEqual(oldValue, newValue) : !Object.is(oldValue, newValue);
      if (hasChanged) {
        if (pendingCleanup) {
          pendingCleanup();
          pendingCleanup = null;
        }
        const oldValueForCallback = oldValue;
        callback(newValue, oldValueForCallback, (fn) => {
          pendingCleanup = fn;
        });
        oldValue = opts.deep ? deepClone(newValue) : newValue;
      }
    }
  });
  return () => {
    stop();
    if (pendingCleanup) {
      pendingCleanup();
    }
  };
}
function batch(fn) {
  batchStack++;
  const wasBatching = isBatching;
  isBatching = true;
  try {
    const result = fn();
    batchStack--;
    if (batchStack === 0 && !wasBatching) {
      flushBatch();
    }
    return result;
  } catch (error) {
    batchStack = 0;
    isBatching = false;
    updateQueue.clear();
    scheduledEffects.clear();
    throw error;
  }
}
function isRef(value) {
  return isObject(value) && value.__isRef === true;
}
function pauseTracking() {
  shouldTrack = false;
}
function resetTracking() {
  shouldTrack = true;
}

// examples/main.ts
var demoState = reactive({
  activeSection: "ref",
  effectRunCount: 0
});
function addLog(logElementId, message, type = "info") {
  const logElement = document.getElementById(logElementId);
  if (!logElement) return;
  const timestamp = (/* @__PURE__ */ new Date()).toLocaleTimeString();
  const typeIcon = {
    info: "\u{1F4DD}",
    effect: "\u26A1",
    computed: "\u{1F9EE}",
    watch: "\u{1F440}",
    batch: "\u{1F4E6}",
    error: "\u274C"
  }[type];
  const logEntry = document.createElement("div");
  logEntry.className = `log-entry log-${type}`;
  logEntry.innerHTML = `
    <span class="log-time">[${timestamp}]</span>
    <span class="log-icon">${typeIcon}</span>
    <span class="log-message">${message}</span>
  `;
  logElement.appendChild(logEntry);
  logElement.scrollTop = logElement.scrollHeight;
  const entries = logElement.querySelectorAll(".log-entry");
  if (entries.length > 50) {
    entries[0].remove();
  }
}
function setupNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const sectionId = link.getAttribute("data-section");
      navLinks.forEach((l) => l.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));
      link.classList.add("active");
      document.getElementById(sectionId).classList.add("active");
      demoState.activeSection = sectionId;
      addLog("globalLog", `Switched to ${sectionId} section`, "info");
    });
  });
}
function setupRefDemo() {
  const count = ref(0);
  const effectRuns = ref(0);
  const currentValue = ref(0);
  addLog("counterLog", "\u{1F527} Ref & Effect demo initialized", "info");
  addLog("effectLog", "\u{1F527} Effect tracking started", "info");
  effect(() => {
    document.getElementById("counterValue").textContent = count.value.toString();
    document.getElementById("counterValue").classList.add("pulse");
    setTimeout(() => document.getElementById("counterValue").classList.remove("pulse"), 500);
    addLog("counterLog", `Effect: Counter display updated to ${count.value}`, "effect");
  });
  effect(() => {
    effectRuns.value++;
    currentValue.value = count.value;
    document.getElementById("effectRuns").textContent = effectRuns.value.toString();
    document.getElementById("currentValue").textContent = currentValue.value.toString();
    addLog("effectLog", `Effect run #${effectRuns.value}: count = ${count.value}`, "effect");
  });
  const slider = document.getElementById("slider");
  watch(() => count.value, (newVal, oldVal) => {
    slider.value = newVal.toString();
    addLog("effectLog", `Watch: Count changed from ${oldVal} to ${newVal}, updating slider`, "watch");
  });
  slider.addEventListener("input", (e) => {
    const newValue = parseInt(e.target.value);
    addLog("effectLog", `Slider input: changing count from ${count.value} to ${newValue}`, "info");
    count.value = newValue;
  });
  document.getElementById("increment").addEventListener("click", () => {
    const oldValue = count.value;
    count.value++;
    addLog("counterLog", `Button: Incremented count from ${oldValue} to ${count.value}`, "info");
  });
  document.getElementById("decrement").addEventListener("click", () => {
    const oldValue = count.value;
    count.value--;
    addLog("counterLog", `Button: Decremented count from ${oldValue} to ${count.value}`, "info");
  });
  document.getElementById("resetCounter").addEventListener("click", () => {
    const oldValue = count.value;
    count.value = 0;
    addLog("counterLog", `Button: Reset count from ${oldValue} to 0`, "info");
  });
  addLog("counterLog", `Created ref with initial value: ${count.value}`, "info");
  addLog("effectLog", `Active effects: Counter display, Value tracking`, "info");
}
function setupReactiveDemo() {
  const userNameInput = document.getElementById("userName");
  const userAgeInput = document.getElementById("userAge");
  const userEmailInput = document.getElementById("userEmail");
  const user = reactive({
    name: userNameInput.value || "John Doe",
    age: parseInt(userAgeInput.value) || 25,
    email: userEmailInput.value || "john@example.com"
  });
  const todos = reactive([]);
  let nextTodoId = 1;
  addLog("userLog", "\u{1F527} Reactive Objects demo initialized", "info");
  addLog("userLog", `Initialized from current form values: ${user.name}, ${user.age}, ${user.email}`, "info");
  effect(() => {
    document.getElementById("userDisplayName").textContent = user.name;
    document.getElementById("userDisplayAge").textContent = `Age: ${user.age}`;
    document.getElementById("userDisplayEmail").textContent = user.email;
    document.getElementById("userInitial").textContent = user.name.charAt(0).toUpperCase();
    addLog("userLog", `Effect: User display updated - ${user.name}, ${user.age}, ${user.email}`, "effect");
  });
  watch(() => user, (newUser, oldUser) => {
    addLog("userLog", `Watch: User object changed`, "watch");
    addLog("userLog", `  Old: ${oldUser.name}, ${oldUser.age}, ${oldUser.email}`, "watch");
    addLog("userLog", `  New: ${newUser.name}, ${newUser.age}, ${newUser.email}`, "watch");
  }, { deep: true });
  const updateUserField = (field, value, inputName) => {
    const oldValue = user[field];
    user[field] = value;
    addLog("userLog", `Input: ${inputName} changed from "${oldValue}" to "${value}"`, "info");
  };
  userNameInput.addEventListener("input", (e) => {
    updateUserField("name", e.target.value, "Name");
  });
  userNameInput.addEventListener("change", (e) => {
    updateUserField("name", e.target.value, "Name (change)");
  });
  userAgeInput.addEventListener("input", (e) => {
    updateUserField("age", parseInt(e.target.value) || 0, "Age");
  });
  userAgeInput.addEventListener("change", (e) => {
    updateUserField("age", parseInt(e.target.value) || 0, "Age (change)");
  });
  userEmailInput.addEventListener("input", (e) => {
    updateUserField("email", e.target.value, "Email");
  });
  userEmailInput.addEventListener("change", (e) => {
    updateUserField("email", e.target.value, "Email (change)");
  });
  const todoTotal = computed(() => {
    const total = todos.length;
    addLog("userLog", `Computed: Todo total recalculated: ${total}`, "computed");
    return total;
  });
  const todoCompleted = computed(() => {
    const completed = todos.filter((todo) => todo.completed).length;
    addLog("userLog", `Computed: Todo completed recalculated: ${completed}`, "computed");
    return completed;
  });
  effect(() => {
    document.getElementById("todoTotal").textContent = todoTotal.value.toString();
    document.getElementById("todoCompleted").textContent = todoCompleted.value.toString();
  });
  effect(() => {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
    addLog("userLog", `Effect: Rendering ${todos.length} todos`, "effect");
    todos.forEach((todo) => {
      const todoItem = document.createElement("div");
      todoItem.className = "todo-item";
      todoItem.innerHTML = `
        <div class="todo-checkbox ${todo.completed ? "checked" : ""}" 
             data-id="${todo.id}"></div>
        <div class="todo-text ${todo.completed ? "completed" : ""}">${todo.text}</div>
      `;
      todoList.appendChild(todoItem);
    });
    todoList.querySelectorAll(".todo-checkbox").forEach((checkbox) => {
      checkbox.addEventListener("click", (e) => {
        const id = parseInt(e.target.getAttribute("data-id"));
        const todo = todos.find((t) => t.id === id);
        if (todo) {
          const action = todo.completed ? "unchecked" : "checked";
          todo.completed = !todo.completed;
          addLog("userLog", `Todo: ${action} "${todo.text}"`, "info");
        }
      });
    });
  });
  document.getElementById("addTodo").addEventListener("click", () => {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    if (text) {
      todos.push({
        id: nextTodoId++,
        text,
        completed: false
      });
      addLog("userLog", `Todo: Added "${text}" (ID: ${nextTodoId - 1})`, "info");
      input.value = "";
    }
  });
  document.getElementById("todoInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      document.getElementById("addTodo").click();
    }
  });
  addLog("userLog", `Created reactive user object: ${user.name}, ${user.age}, ${user.email}`, "info");
}
function setupComputedDemo() {
  const cart = reactive({
    items: [],
    discount: 0
  });
  let itemId = 1;
  addLog("cartLog", "\u{1F527} Computed Values demo initialized", "info");
  const itemCount = computed(() => {
    const count = cart.items.length;
    addLog("cartLog", `Computed: Item count recalculated: ${count}`, "computed");
    return count;
  });
  const subtotal = computed(() => {
    const total2 = cart.items.reduce((sum, item) => sum + item.price, 0);
    addLog("cartLog", `Computed: Subtotal recalculated: $${total2.toFixed(2)}`, "computed");
    return total2;
  });
  const total = computed(() => {
    const finalTotal = subtotal.value * (1 - cart.discount / 100);
    addLog("cartLog", `Computed: Total recalculated: $${finalTotal.toFixed(2)} (with ${cart.discount}% discount)`, "computed");
    return finalTotal;
  });
  effect(() => {
    document.getElementById("cartCount").textContent = itemCount.value.toString();
    document.getElementById("cartSubtotal").textContent = `$${subtotal.value.toFixed(2)}`;
    document.getElementById("cartDiscount").textContent = `${cart.discount}%`;
    document.getElementById("cartTotal").textContent = `$${total.value.toFixed(2)}`;
    addLog("cartLog", `Effect: Cart display updated - ${itemCount.value} items, $${subtotal.value.toFixed(2)} subtotal, $${total.value.toFixed(2)} total`, "effect");
  });
  document.getElementById("addItem").addEventListener("click", () => {
    const items = ["Laptop", "Phone", "Tablet", "Headphones", "Monitor"];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    const price = Math.random() * 500 + 50;
    cart.items.push({
      id: itemId++,
      name: randomItem,
      price
    });
    addLog("cartLog", `Action: Added "${randomItem}" for $${price.toFixed(2)}`, "info");
    addLog("cartLog", `  Cart now has ${cart.items.length} items`, "info");
  });
  document.getElementById("removeItem").addEventListener("click", () => {
    if (cart.items.length > 0) {
      const removed = cart.items.pop();
      addLog("cartLog", `Action: Removed "${removed.name}" ($${removed.price.toFixed(2)})`, "info");
      addLog("cartLog", `  Cart now has ${cart.items.length} items`, "info");
    } else {
      addLog("cartLog", `Action: Cannot remove - cart is empty`, "error");
    }
  });
  document.getElementById("applyDiscount").addEventListener("click", () => {
    const oldDiscount = cart.discount;
    cart.discount = cart.discount === 10 ? 0 : 10;
    addLog("cartLog", `Action: Discount changed from ${oldDiscount}% to ${cart.discount}%`, "info");
  });
  const usdAmountInput = document.getElementById("usdAmount");
  const exchangeRate = ref(0.85);
  const usdAmount = ref(parseFloat(usdAmountInput.value) || 100);
  const eurAmount = computed(() => {
    const result = usdAmount.value * exchangeRate.value;
    addLog("cartLog", `Computed: Currency conversion: $${usdAmount.value} * ${exchangeRate.value} = \u20AC${result.toFixed(2)}`, "computed");
    return result;
  });
  effect(() => {
    usdAmountInput.value = usdAmount.value.toString();
    document.getElementById("eurAmount").value = eurAmount.value.toFixed(2);
    document.getElementById("exchangeRate").textContent = exchangeRate.value.toFixed(2);
  });
  const updateUsdAmount = (e) => {
    const oldValue = usdAmount.value;
    usdAmount.value = parseFloat(e.target.value) || 0;
    addLog("cartLog", `Input: USD amount changed from ${oldValue} to ${usdAmount.value}`, "info");
  };
  usdAmountInput.addEventListener("input", updateUsdAmount);
  usdAmountInput.addEventListener("change", updateUsdAmount);
  document.getElementById("increaseRate").addEventListener("click", () => {
    const oldRate = exchangeRate.value;
    exchangeRate.value += 0.01;
    addLog("cartLog", `Action: Exchange rate increased from ${oldRate.toFixed(2)} to ${exchangeRate.value.toFixed(2)}`, "info");
  });
  document.getElementById("decreaseRate").addEventListener("click", () => {
    const oldRate = exchangeRate.value;
    exchangeRate.value = Math.max(0.01, exchangeRate.value - 0.01);
    addLog("cartLog", `Action: Exchange rate decreased from ${oldRate.toFixed(2)} to ${exchangeRate.value.toFixed(2)}`, "info");
  });
  addLog("cartLog", `Initialized cart with computed values: itemCount, subtotal, total`, "info");
}
function setupWatchDemo() {
  addLog("searchLog", "\u{1F527} Watch & Validation demo initialized", "info");
  addLog("validationLog", "\u{1F527} Form Validation demo initialized", "info");
  const searchInput = document.getElementById("searchInput");
  const searchQuery = ref(searchInput.value || "");
  let debounceTimer;
  let searchCallCount = 0;
  document.getElementById("searchResult").textContent = searchQuery.value;
  if (searchQuery.value) {
    addLog("searchLog", `Initial search query: "${searchQuery.value}"`, "info");
  }
  watch(searchQuery, (newQuery, oldQuery, cleanup) => {
    searchCallCount++;
    addLog("searchLog", `Watch #${searchCallCount}: Search query changed from "${oldQuery}" to "${newQuery}"`, "watch");
    cleanup(() => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
        addLog("searchLog", `Cleanup: Previous search timeout cleared`, "info");
      }
    });
    debounceTimer = setTimeout(() => {
      document.getElementById("searchResult").textContent = newQuery;
      addLog("searchLog", `Debounced search executed: "${newQuery}"`, "info");
    }, 500);
  });
  const updateSearchQuery = (e) => {
    const value = e.target.value;
    addLog("searchLog", `Input: Search query updating to "${value}"`, "info");
    searchQuery.value = value;
  };
  searchInput.addEventListener("input", updateSearchQuery);
  searchInput.addEventListener("change", updateSearchQuery);
  const valUsernameInput = document.getElementById("valUsername");
  const valEmailInput = document.getElementById("valEmail");
  const valPasswordInput = document.getElementById("valPassword");
  const form = reactive({
    username: valUsernameInput.value || "",
    email: valEmailInput.value || "",
    password: valPasswordInput.value || ""
  });
  const errors = reactive({
    username: "",
    email: "",
    password: ""
  });
  addLog("validationLog", `Form initialized with values: username="${form.username}", email="${form.email}", password=${"*".repeat(form.password.length)}`, "info");
  const isFormValid = computed(() => {
    const valid = !errors.username && !errors.email && !errors.password && form.username.length >= 3 && form.email.includes("@") && form.password.length >= 8;
    addLog("validationLog", `Computed: Form validity recalculated: ${valid ? "VALID" : "INVALID"}`, "computed");
    return valid;
  });
  let validationCount = 0;
  const validateField = (field, value) => {
    validationCount++;
    addLog("validationLog", `Watch #${validationCount}: ${field} validation - "${field === "password" ? "*".repeat(value.length) : value}"`, "watch");
    let error = "";
    switch (field) {
      case "username":
        if (value.length < 3) {
          error = "Username must be at least 3 characters";
          addLog("validationLog", `  Validation: Username too short`, "error");
        } else {
          addLog("validationLog", `  Validation: Username OK`, "info");
        }
        break;
      case "email":
        if (!value.includes("@")) {
          error = "Please enter a valid email";
          addLog("validationLog", `  Validation: Invalid email format`, "error");
        } else {
          addLog("validationLog", `  Validation: Email OK`, "info");
        }
        break;
      case "password":
        if (value.length < 8) {
          error = "Password must be at least 8 characters";
          addLog("validationLog", `  Validation: Password too short`, "error");
        } else {
          addLog("validationLog", `  Validation: Password OK`, "info");
        }
        break;
    }
    errors[field] = error;
  };
  validateField("username", form.username);
  validateField("email", form.email);
  validateField("password", form.password);
  watch(() => form.username, (username) => validateField("username", username));
  watch(() => form.email, (email) => validateField("email", email));
  watch(() => form.password, (password) => validateField("password", password));
  effect(() => {
    document.getElementById("valUsernameError").textContent = errors.username;
    document.getElementById("valEmailError").textContent = errors.email;
    document.getElementById("valPasswordError").textContent = errors.password;
    const statusElement = document.getElementById("formStatus");
    if (isFormValid.value) {
      statusElement.textContent = "\u2713 Form is valid!";
      statusElement.className = "form-status valid";
    } else {
      statusElement.textContent = "\u2717 Form is invalid";
      statusElement.className = "form-status invalid";
    }
    addLog("validationLog", `Effect: Form status updated - ${isFormValid.value ? "VALID" : "INVALID"}`, "effect");
  });
  const updateFormField = (field, value) => {
    form[field] = value;
    addLog("validationLog", `Input: ${field} set to "${field === "password" ? "*".repeat(value.length) : value}"`, "info");
  };
  valUsernameInput.addEventListener("input", (e) => {
    updateFormField("username", e.target.value);
  });
  valUsernameInput.addEventListener("change", (e) => {
    updateFormField("username", e.target.value);
  });
  valEmailInput.addEventListener("input", (e) => {
    updateFormField("email", e.target.value);
  });
  valEmailInput.addEventListener("change", (e) => {
    updateFormField("email", e.target.value);
  });
  valPasswordInput.addEventListener("input", (e) => {
    updateFormField("password", e.target.value);
  });
  valPasswordInput.addEventListener("change", (e) => {
    updateFormField("password", e.target.value);
  });
  document.getElementById("validateForm").addEventListener("click", () => {
    addLog("validationLog", `Action: Manual validation triggered - Form is ${isFormValid.value ? "VALID" : "INVALID"}`, "info");
  });
  addLog("validationLog", `Initialized form validation with 3 watchers and computed validity`, "info");
}
function setupAdvancedDemo() {
  const data = reactive({ a: 0, b: 0, c: 0 });
  let updateCount = 0;
  addLog("scopeLog", "\u{1F527} Advanced Patterns demo initialized", "info");
  effect(() => {
    updateCount++;
    document.getElementById("batchA").textContent = data.a.toString();
    document.getElementById("batchB").textContent = data.b.toString();
    document.getElementById("batchC").textContent = data.c.toString();
    document.getElementById("batchCount").textContent = updateCount.toString();
    addLog("scopeLog", `Effect #${updateCount}: Batch values updated - A=${data.a}, B=${data.b}, C=${data.c}`, "effect");
  });
  document.getElementById("updateSeparate").addEventListener("click", () => {
    addLog("scopeLog", `Action: Updating values separately (3 effect runs expected)`, "info");
    data.a++;
    addLog("scopeLog", `  Set data.a = ${data.a}`, "info");
    data.b++;
    addLog("scopeLog", `  Set data.b = ${data.b}`, "info");
    data.c++;
    addLog("scopeLog", `  Set data.c = ${data.c}`, "info");
  });
  document.getElementById("updateBatch").addEventListener("click", () => {
    addLog("scopeLog", `Action: Starting batch update (1 effect run expected)`, "batch");
    batch(() => {
      data.a += 10;
      addLog("scopeLog", `  Batch: Set data.a = ${data.a}`, "batch");
      data.b += 10;
      addLog("scopeLog", `  Batch: Set data.b = ${data.b}`, "batch");
      data.c += 10;
      addLog("scopeLog", `  Batch: Set data.c = ${data.c}`, "batch");
    });
    addLog("scopeLog", `Action: Batch update completed`, "batch");
  });
  let effectScope = null;
  const scopeValue = ref(0);
  let scopeEffectRunCount = 0;
  function updateScopeStatus() {
    const statusElement = document.getElementById("scopeStatus");
    statusElement.textContent = effectScope?.active ? "Active" : "Inactive";
    statusElement.className = `scope-status ${effectScope?.active ? "active" : "inactive"}`;
  }
  document.getElementById("startScope").addEventListener("click", () => {
    if (effectScope) {
      effectScope.stop();
    }
    effectScope = createEffectScope();
    scopeEffectRunCount = 0;
    addLog("scopeLog", `Action: Creating new effect scope`, "info");
    effectScope.run(() => {
      effect(() => {
        scopeEffectRunCount++;
        addLog("scopeLog", `Scope Effect #${scopeEffectRunCount}: scopeValue = ${scopeValue.value}`, "effect");
      });
    });
    updateScopeStatus();
    addLog("scopeLog", `Action: Effect scope started with 1 effect`, "info");
  });
  document.getElementById("stopScope").addEventListener("click", () => {
    if (effectScope) {
      addLog("scopeLog", `Action: Stopping effect scope`, "info");
      effectScope.stop();
      effectScope = null;
      updateScopeStatus();
      addLog("scopeLog", `Action: Effect scope stopped - effects should no longer run`, "info");
    }
  });
  setInterval(() => {
    if (effectScope?.active) {
      const oldValue = scopeValue.value;
      scopeValue.value++;
      addLog("scopeLog", `Interval: scopeValue changed from ${oldValue} to ${scopeValue.value}`, "info");
    }
  }, 3e3);
  addLog("scopeLog", `Initialized batch updates and effect scope demos`, "info");
}
document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("globalLog")) {
    const globalLog = document.createElement("div");
    globalLog.id = "globalLog";
    globalLog.className = "log global-log";
    globalLog.style.cssText = `
      position: fixed
      bottom: 20px
      right: 20px
      width: 400px
      height: 200px
      background: rgba(0, 0, 0, 0.9)
      border: 1px solid var(--border)
      z-index: 1000
      font-size: 12px
    `;
    document.body.appendChild(globalLog);
  }
  addLog("globalLog", "\u{1F680} Reactivity System Demo Started!", "info");
  setupNavigation();
  setupRefDemo();
  setupReactiveDemo();
  setupComputedDemo();
  setupWatchDemo();
  setupAdvancedDemo();
  addLog("globalLog", "\u2705 All demos initialized successfully!", "info");
  console.log("\u{1F389} Reactivity System Demo Loaded!");
});
