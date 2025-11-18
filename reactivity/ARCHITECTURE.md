# Reactive System Architecture with Watch Function

## Architecture Overview

This reactive system is inspired by Vue 3 and provides a complete solution for managing application state with advanced dependency tracking capabilities, performance optimization, and lifecycle management.

## Key Components

### 1. Dependency Tracking System

```
targetMap (WeakMap)
    ├── target object
    │   └── depsMap (Map)
    │       ├── key/property
    │       │   └── deps (Set<EffectFn>)
    │       └── key/property
    │           └── deps (Set<EffectFn>)
```

**Purpose**: Tracks which effects depend on which object properties.

**Mechanism**:
- When an effect reads a property (getter), `track()` is called, which adds the effect to the dependency Set
- When a property changes (setter), `trigger()` is called, which executes all dependent effects

### 2. Effect

```typescript
effect(() => {
  console.log(ref.value) // Automatically tracked
})
```

**Features**:
- Automatic dependency tracking
- Support for nested effects (effectStack)
- Circular dependency detection
- Cleanup function management
- Optional lazy execution

### 3. Ref (Reactive Cell)

```typescript
const count = ref(0)
count.value = 1 // Triggers update
```

**Features**:
- Simple way to make primitive values reactive
- Uses `Proxy` to intercept get/set operations
- Automatic access tracking and updates

### 4. Reactive (Deep Reactivity)

```typescript
const state = reactive({
  user: { name: 'Alice' }
})
state.user.name = 'Bob' // Triggers update
```

**Features**:
- Recursive transformation of objects into Proxy
- Proxy object caching (reactiveMap)
- Deep reactivity support with depth limiting
- Automatic transformation of nested objects

### 5. Computed (Computed Values)

```typescript
const sum = computed(() => a.value + b.value)
```

**Features**:
- Result memoization
- Lazy evaluation
- Automatic recomputation on dependency changes
- Optional setter for two-way binding

### 6. Watch (Change Tracking)

```typescript
watch(source, callback, options)
```

**Features**:
- Support for various sources (ref, reactive, functions)
- Options: immediate, deep, flush, memoize
- Cleanup functions for operation cancellation
- Async support with proper error handling
- Memoization for optimization

## Reactivity Lifecycle

```
1. Create reactive object (ref/reactive)
   └─> WeakMap for dependency tracking initialized

2. Run effect/watch
   └─> Set activeEffect
   └─> Execute callback
   └─> Track all read properties (track)

3. Change reactive value
   └─> Proxy setter triggered
   └─> trigger() called
   └─> All dependent effects executed

4. Stop watch/effect
   └─> Call stop function
   └─> Remove dependencies (cleanupEffect)
   └─> Call cleanup callback (if exists)

5. Cleanup on unmount
   └─> clearReactivityState() clears all state
```

## Optimizations

### 1. Memoization

System caches computed values to avoid repeated calculations:

```typescript
const memoMap = new Map<any, { value: any; timestamp: number }>()

// Cache valid for 16ms (1 frame)
if (memoMap.has(cacheKey) && timestamp < 16) {
  return cached.value
}
```

### 2. Batch Updates

Groups multiple updates into a single pass:

```typescript
batch(() => {
  x.value = 10 // Doesn't trigger immediately
  y.value = 20 // Doesn't trigger immediately
}) // All effects execute once
```

### 3. Cycle Detection

Prevents infinite dependency loops:

```typescript
const currentCyclePath = new Set<EffectFn>()

if (currentCyclePath.has(effectFn)) {
  return // Circular dependency detected
}
```

### 4. WeakMap for Memory Management

Uses WeakMap instead of regular Map for automatic memory cleanup:

```typescript
const targetMap = new WeakMap<object, Map<string | symbol, Set<EffectFn>>>()
// Memory is freed automatically when object is deleted
```

## Exception Handling

### Error Management

```typescript
try {
  // Execute effect
  activeEffect = effectFn
  return update()
} catch (error) {
  console.error('Error in effect:', error)
  throw error
} finally {
  activeEffect = null
}
```

### Cleanup on Errors

```typescript
if (pendingCleanup) {
  try {
    pendingCleanup()
  } catch (error) {
    console.error('Error in cleanup:', error)
  }
}
```

## Configuration Options

```typescript
interface ReactivityConfig {
  enableDebug?: boolean              // Debug output
  enableMemoization?: boolean        // Enable caching
  cyclePrevention?: boolean          // Cycle detection
  batchUpdates?: boolean             // Update batching
  deepReactiveMaxDepth?: number      // Max depth for reactive
  trackingDepth?: number             // Max tracking depth
}
```

## Data Flow Model

```
┌─────────────────────────────────────────────────────┐
│          Reactive System                            │
└─────────────────────────────────────────────────────┘
         ▲                                    │
         │                                    ▼
    ┌────────────┐                    ┌──────────────┐
    │ Dependency │                    │   Trigger    │
    │ Tracking   │◄───────────────────│   Update     │
    └────────────┘                    └──────────────┘
         │                                  ▲
         ▼                                  │
    ┌────────────┐                    ┌──────────────┐
    │  Effect    │───────────────────►│   Getter     │
    │            │                    │   value      │
    └────────────┘                    └──────────────┘
         │                                  ▲
         └──────────────────────────────────┘
                  Closed Loop
```

## Usage Examples for Different Scenarios

### Simple Reactivity (ref)
```typescript
const count = ref(0)
effect(() => console.log(count.value))
count.value = 1
```

### Complex Reactivity (reactive)
```typescript
const state = reactive({ user: { name: 'Alice' } })
effect(() => console.log(state.user.name))
state.user.name = 'Bob'
```

### Computed Values (computed)
```typescript
const a = ref(1), b = ref(2)
const sum = computed(() => a.value + b.value)
```

### Change Tracking (watch)
```typescript
watch(() => state.value, (newVal) => {
  console.log('Changed to:', newVal)
})
```

### Lifecycle Management
```typescript
const stopWatch = watch(...)
// ... usage
stopWatch() // Stop watching
```

## Performance Recommendations

1. **Use batch for multiple updates**
   ```typescript
   batch(() => {
     obj.a = 1
     obj.b = 2
     obj.c = 3
   })
   ```

2. **Limit depth of reactive objects**
   ```typescript
   setConfig({ deepReactiveMaxDepth: 5 })
   ```

3. **Use computed instead of repeated calculations**
   ```typescript
   const expensive = computed(() => heavyCalculation())
   ```

4. **Clean up watch on unmount**
   ```typescript
   const stop = watch(...)
   onUnmount(() => stop())
   ```

5. **Use getter functions for selective tracking**
   ```typescript
   watch(() => obj.specificProp, callback)
   ```

## TypeScript Integration

System is fully typed:

```typescript
const ref: Ref<number> = ref(0)
const reactive: Reactive<State> = reactive(state)
const computed: Ref<number> = computed(() => value)
const stop: WatchStopHandle = watch(source, callback)
```

## Debugging and Monitoring

```typescript
enableDebug(true)
const stats = getEffectStats()
console.log(stats) // { activeEffects: 2, queuedUpdates: 0 }
```

## Conclusion

This architecture provides a powerful and flexible reactivity system suitable for:
- Managing application state
- Complex computations with automatic caching
- Asynchronous operations with proper cleanup
- Performance optimization through batching
- Full typing through TypeScript
