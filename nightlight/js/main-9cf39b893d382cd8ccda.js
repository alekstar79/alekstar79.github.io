/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1674712173649\n      var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3NzL3N0eWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUE7QUFDVTtBQUNWLE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLDRKQUE2RSxjQUFjLGVBQWU7QUFDeEksTUFBTSxVQUFVO0FBQ2hCLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaWdodGxpZ2h0Ly4vc3JjL2Nzcy9zdHlsZS5jc3M/NzNiZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjc0NzEyMTczNjQ5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/css/style.css\n");

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Device\": () => (/* binding */ Device),\n/* harmony export */   \"Postprocessing\": () => (/* binding */ Postprocessing),\n/* harmony export */   \"Table\": () => (/* binding */ Table)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_addons_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/addons/utils/BufferGeometryUtils */ \"./node_modules/three/examples/jsm/utils/BufferGeometryUtils.js\");\n/* harmony import */ var three_addons_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/addons/postprocessing/EffectComposer */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_addons_postprocessing_UnrealBloomPass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/addons/postprocessing/UnrealBloomPass */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n/* harmony import */ var three_addons_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/addons/postprocessing/RenderPass */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_addons_postprocessing_ShaderPass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/addons/postprocessing/ShaderPass */ \"./node_modules/three/examples/jsm/postprocessing/ShaderPass.js\");\n// noinspection JSCheckFunctionSignatures\n\n\n\n\n\n\n\n\n\nclass LightEmitterCurve extends three__WEBPACK_IMPORTED_MODULE_0__.Curve {\n\tconstructor(radius, turns, height) {\n\t\tsuper()\n    this.radius = radius\n    this.height = height\n    this.turns = turns\n\t}\n\n\tgetPoint(t, optionalTarget = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3()) {\n\t\treturn optionalTarget.setFromCylindricalCoords( this.radius, -Math.PI * 2 * this.turns * t, this.height * t )\n\t}\n}\n\nclass LightEmitters extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D {\n  constructor(gu, count, maxR, height, turns, m) {\n    super()\n\n    let gsBall = []\n    let gsEmitter = []\n    let start = maxR / 4\n    let totalWidth = maxR * 0.9 - start\n    let step = totalWidth / (count - 1)\n\n    // let v3 = new THREE.Vector3()\n    // let axis = new THREE.Vector3(0, 1, 0)\n\n    for (let i = 0; i < count; i++) {\n      let shift = start + step * i\n      let gBall = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(0.05, 64, 32, 0, Math.PI * 2, 0, Math.PI * 0.5)\n\n      gBall.translate(0, 0, shift)\n      gsBall.push(gBall)\n\n      /* this code ////////////////////////////////////////////////////////////////\n      let gEmitter = new THREE.CylinderGeometry(0.03, 0.03, height, 16, 200)\n      gEmitter.translate(shift, height * 0.5, 0)\n\n      let pos = gEmitter.attributes.position\n\n      for (let i = 0; i < pos.count; i++){\n        v3.fromBufferAttribute(pos, i)\n\n        let ratio = v3.y / height\n        let angle = -ratio * Math.PI * 2 * turns\n\n        v3.applyAxisAngle(axis, angle)\n        pos.setXYZ(i, v3.x, v3.y, v3.z)\n      }\n\n      gEmitter.computeVertexNormals()\n\n      */// or this ////////////////////////////////////////////////////////////////\n      let lightEmitterCurve = new LightEmitterCurve(shift, turns, height)\n      let gEmitter = new three__WEBPACK_IMPORTED_MODULE_0__.TubeGeometry(lightEmitterCurve, 200, 0.02, 16)\n\n      gsEmitter.push(gEmitter)\n    }\n\n    let gBalls = (0,three_addons_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_1__.mergeBufferGeometries)(gsBall)\n    let balls = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(gBalls, m.clone())\n\n    balls.userData.nonGlowing = true\n\n    balls.castShadow = true\n\n    this.add(balls)\n\n    let gEmitters = (0,three_addons_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_1__.mergeBufferGeometries)(gsEmitter)\n    let mEmitters = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n      side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,\n      color: new three__WEBPACK_IMPORTED_MODULE_0__.Color(1, 0.25, 0),\n      onBeforeCompile: shader => {\n        shader.uniforms.globalBloom = gu.globalBloom\n        shader.vertexShader = `\n          varying vec3 vPos;\n          ${shader.vertexShader}\n        `.replace(\n          `#include <begin_vertex>`,\n          `#include <begin_vertex>\n            vPos = position;\n          `\n        )\n        shader.fragmentShader = `\n          #define ss(a, b, c) smoothstep(a, b, c)\n          uniform float globalBloom;\n          varying vec3 vPos;\n          ${shader.fragmentShader}\n        `.replace(\n          `#include <dithering_fragment>`,\n          `#include <dithering_fragment>\n            vec3 colNonGlow = vec3(1, 0.75, 0.75); // * pow((sin(vUv.x * 200. * PI2) * 0.5 + 0.5) * 0.6 + 0.4, 3.);\n            vec3 colGlow = gl_FragColor.rgb;\n            gl_FragColor.rgb = mix(colNonGlow, colGlow, globalBloom);\n          `\n        )\n      }\n    })\n\n    mEmitters.defines = {\"USE_UV\" : \"\"}\n    let emitters = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(gEmitters, mEmitters)\n\n    emitters.castShadow = true\n\n    this.add(emitters)\n  }\n}\n\nclass Belt extends three__WEBPACK_IMPORTED_MODULE_0__.Mesh {\n  constructor(gu, mainSize, rBig, rSmall, width, m) {\n    let m1 = m.clone()\n    m1.color.set('gray')\n\n    let hSize = mainSize\n    let path = new three__WEBPACK_IMPORTED_MODULE_0__.Shape()\n      .absarc(0, 0, rBig, Math.PI * 1.5, Math.PI)\n      .absarc(-hSize + rSmall, -hSize + rSmall, rSmall, Math.PI, Math.PI * 1.5)\n      .lineTo(0, -hSize)\n\n    // const hw = width * 0.5\n    const segs = 500\n\n    let pathPts = path.getSpacedPoints(segs).reverse()\n    let g = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(segs, 0.01, width, segs, 1, 1).translate(segs * 0.5, 0.005, 0)\n    let vPrev = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(), vCurr = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(), vNext = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2()\n    let vCP = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(),\n        vCN = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(),\n        v2 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(),\n        cntr = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2()\n\n    let pos = g.attributes.position\n\n    for (let i = 0; i < pos.count; i++) {\n      let idxCurr = Math.round(pos.getX(i))\n      let idxPrev = idxCurr === 0 ? segs - 1 : idxCurr - 1\n      let idxNext = idxCurr === segs ? 1 : idxCurr + 1\n\n      vPrev.copy(pathPts[idxPrev])\n      vCurr.copy(pathPts[idxCurr])\n      vNext.copy(pathPts[idxNext])\n      vCP.subVectors(vPrev, vCurr)\n      vCN.subVectors(vNext, vCurr)\n\n      let aCP = vCP.angle()\n      let aCN = vCN.angle()\n      let hA = Math.PI * 0.5 - (aCP - aCN) * 0.5\n      let aspect = Math.cos(hA)\n\n      v2.set(vCurr.x, vCurr.y).multiplyScalar(pos.getY(i) / aspect)\n      v2.rotateAround(cntr, hA).add(vCurr)\n      pos.setXY(i, v2.x, v2.y)\n    }\n\n    g.rotateX(-Math.PI * 0.5)\n    g.computeVertexNormals()\n\n    super(g, m1)\n\n    // this.receiveShadow = true\n    // this.castShadow = true\n\n    this.uniforms = {\n      time: { value: 0 },\n      angularSpeed: { value: 0 }\n    }\n\n    m1.onBeforeCompile = shader => {\n      shader.uniforms.globalBloom = gu.globalBloom\n      shader.uniforms.time = this.uniforms.time\n      shader.uniforms.beltLength = {value: rBig * Math.PI * 1.5 + rSmall * Math.PI * 0.5 + (hSize - rSmall) *2}\n      shader.uniforms.angularSpeed = this.uniforms.angularSpeed\n      shader.uniforms.rSmall = {value: rSmall}\n      shader.fragmentShader = `\n        #define ss(a, b, c) smoothstep(a, b, c)\n        uniform float globalBloom;\n        uniform float time;\n        uniform float beltLength;\n        uniform float angularSpeed;\n        uniform float rSmall;\n        ${shader.fragmentShader}\n      `.replace(\n        `#include <color_fragment>`,\n        `#include <color_fragment>\n          float linearSpeed = rSmall * angularSpeed;\n          float uvX = mod(vUv.x * beltLength + time * linearSpeed, beltLength / 4.);\n          float f = step(0.25, uvX) - step(0.75, uvX);\n          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.875), f);\n        `\n      ).replace(\n        `#include <dithering_fragment>`,\n        `#include <dithering_fragment>\n          gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0), globalBloom);\n        `\n      )\n    }\n\n    m1.defines = {\"USE_UV\" : \"\"}\n  }\n}\n\nclass Roller extends three__WEBPACK_IMPORTED_MODULE_0__.Mesh {\n  constructor(r, h, roundR, m) {\n    let m1 = m.clone()\n    let profile = new three__WEBPACK_IMPORTED_MODULE_0__.Path()\n      .moveTo(0, 0)\n      .lineTo(r - roundR, 0)\n      .absarc(r - roundR, roundR, roundR, Math.PI * 1.5, Math.PI * 2)\n      .absarc(r - roundR, h - roundR, roundR, 0, Math.PI * 0.5)\n\n      .lineTo(0, h)\n\n    let g = new three__WEBPACK_IMPORTED_MODULE_0__.LatheGeometry(profile.getPoints(50), 100)\n\n    super(g, m1)\n\n    // this.receiveShadow = true\n    // this.castShadow = true\n  }\n}\n\nclass Base extends three__WEBPACK_IMPORTED_MODULE_0__.Mesh {\n  constructor(w, h, R, roundR, m) {\n    let angleStep = Math.PI * 0.5\n    let wwr = w - R - roundR\n    let hwrr = h - roundR * 2\n    let shape = new three__WEBPACK_IMPORTED_MODULE_0__.Shape()\n      .absarc( wwr,  wwr, R, 0,             angleStep)\n      .absarc(-wwr,  wwr, R, angleStep,     angleStep * 2)\n      .absarc(-wwr, -wwr, R, angleStep * 2, angleStep * 3)\n      .absarc( wwr, -wwr, R, angleStep * 3, angleStep * 4)\n\n    let g = new three__WEBPACK_IMPORTED_MODULE_0__.ExtrudeGeometry(\n      shape,\n      {\n        depth: hwrr,\n        bevelEnabled: true,\n        bevelThickness: roundR,\n        bevelSize: roundR,\n        bevelSegments: 10,\n        curveSegments: 20\n      }\n    )\n\n    g.translate(0, 0, roundR)\n    g.rotateX(-Math.PI * 0.5)\n\n    super(g, m.clone())\n\n    // this.receiveShadow = true\n    // this.castShadow = true\n  }\n}\n\nclass Postprocessing {\n  constructor(scene, camera, renderer) {\n    const renderScene = new three_addons_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_2__.RenderPass(scene, camera)\n    const bloomPass = new three_addons_postprocessing_UnrealBloomPass__WEBPACK_IMPORTED_MODULE_3__.UnrealBloomPass(\n      new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(window.innerWidth, window.innerHeight),\n      1.25,\n      0.25,\n      0\n    )\n\n    let samples = 4\n    const target1 = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderTarget(\n      window.innerWidth,\n      window.innerHeight,\n      {\n        type: three__WEBPACK_IMPORTED_MODULE_0__.FloatType,\n        format: three__WEBPACK_IMPORTED_MODULE_0__.RGBAFormat,\n        encoding: three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding,\n        samples\n      }\n    )\n\n    this.bloomComposer = new three_addons_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_4__.EffectComposer(renderer, target1)\n    this.bloomComposer.renderToScreen = false\n    this.bloomComposer.addPass(renderScene)\n    this.bloomComposer.addPass(bloomPass)\n\n    const finalPass = new three_addons_postprocessing_ShaderPass__WEBPACK_IMPORTED_MODULE_5__.ShaderPass(\n      new three__WEBPACK_IMPORTED_MODULE_0__.ShaderMaterial({\n        uniforms: {\n          baseTexture: { value: null },\n          bloomTexture: { value: this.bloomComposer.renderTarget2.texture }\n        },\n        vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }`,\n        fragmentShader: `uniform sampler2D baseTexture; uniform sampler2D bloomTexture; varying vec2 vUv; void main() { gl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) ); }`,\n        defines: {}\n      }),\n      'baseTexture'\n    )\n\n    finalPass.needsSwap = true\n\n    const target2 = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderTarget(\n      window.innerWidth,\n      window.innerHeight,\n      {\n        type: three__WEBPACK_IMPORTED_MODULE_0__.FloatType,\n        format: three__WEBPACK_IMPORTED_MODULE_0__.RGBAFormat,\n        encoding: three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding,\n        samples\n      }\n    )\n\n    this.finalComposer = new three_addons_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_4__.EffectComposer(renderer, target2)\n    this.finalComposer.addPass(renderScene)\n    this.finalComposer.addPass(finalPass)\n  }\n}\n\nclass Device extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D {\n  constructor(gu) {\n    super()\n\n    let m = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({color: new three__WEBPACK_IMPORTED_MODULE_0__.Color().setScalar(0.75)})\n    let base = new Base(4, 1, 0.5, 0.05, m)\n\n    const rBig = 3.75\n    const rSmall = 0.5\n\n    let lightEmitters = new LightEmitters(gu, 15, rBig, rBig * 3, 1.25, m)\n    lightEmitters.position.set(0, 0.25, 0)\n\n    let rollerBig = new Roller(rBig, 0.25, 0.05, m)\n    rollerBig.material.color.multiplyScalar(0.75)\n    rollerBig.position.set(0, 1, 0)\n    rollerBig.add(lightEmitters)\n\n    base.add(rollerBig)\n\n    let rotationIndicator = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(\n      new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(0.05, 64, 16, 0, Math.PI * 2, 0, Math.PI * 0.5),\n      new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_0__.Color(0, 0.75, 1) })\n    )\n\n    rotationIndicator.position.set(0.35, 0.25, 0)\n\n    let rollerSmall = new Roller(rSmall, 0.25, 0.05, m)\n    rollerSmall.material.color.multiplyScalar(0.75)\n    rollerSmall.position.set(-3.25, 1, 3.25)\n    rollerSmall.add(rotationIndicator)\n\n    base.add(rollerSmall)\n\n    let belt = new Belt(gu, rBig, rBig, rSmall, 0.125, m)\n    belt.position.set(0, 1.125, 0)\n    base.add(belt)\n\n    this.add(base)\n\n    const gearRatio = rBig / rSmall\n    const angularSpeed = Math.PI\n\n    belt.uniforms.angularSpeed.value = angularSpeed\n\n    this.update = t => {\n      let time = t * angularSpeed\n      rollerSmall.rotation.y = time\n      rollerBig.rotation.y = time / gearRatio\n      belt.uniforms.time.value = t\n    }\n\n    [rollerSmall, rollerBig, base].forEach(o => {\n      o.userData.nonGlowing = true\n    })\n  }\n}\n\nclass Table extends three__WEBPACK_IMPORTED_MODULE_0__.Mesh {\n  constructor(gu, bgColor) {\n    let g = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(20, 20).rotateX(-Math.PI * 0.5)\n    let m = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({\n      color: new three__WEBPACK_IMPORTED_MODULE_0__.Color().setScalar(0.5).getHex(),\n      onBeforeCompile: shader => {\n        shader.uniforms.globalBloom = gu.globalBloom\n        shader.uniforms.bgColor = { value: new three__WEBPACK_IMPORTED_MODULE_0__.Color(bgColor) }\n        shader.fragmentShader = `\n          uniform float globalBloom;\n          uniform vec3 bgColor;\n          ${shader.fragmentShader}\n        `.replace(\n          `#include <dithering_fragment>`,\n          `#include <dithering_fragment>\n          \n          float uvDist = distance(vUv, vec2(0.5)) * 2.;\n          float f = smoothstep(0.5, 1., uvDist);\n          gl_FragColor.rgb = mix(gl_FragColor.rgb, bgColor, f);\n          \n          gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0), globalBloom);\n          `\n        )\n      }\n    })\n\n    m.defines = {\"USE_UV\" : \"\"}\n\n    super(g, m)\n\n    // this.receiveShadow = true\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUU4Qjs7QUFFZ0Q7QUFDSDtBQUNFO0FBQ1Y7QUFDQTs7QUFFbkUsZ0NBQWdDLHdDQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsMENBQWE7QUFDL0M7QUFDQTtBQUNBOztBQUVBLDRCQUE0QiwyQ0FBYztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBLHNCQUFzQixpREFBb0I7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNCQUFzQixlQUFlO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsK0NBQWtCOztBQUUzQztBQUNBOztBQUVBLGlCQUFpQiw2RkFBcUI7QUFDdEMsb0JBQW9CLHVDQUFVOztBQUU5Qjs7QUFFQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkZBQXFCO0FBQ3pDLHdCQUF3QixvREFBdUI7QUFDL0MsWUFBWSw2Q0FBZ0I7QUFDNUIsaUJBQWlCLHdDQUFXO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCx5QkFBeUI7QUFDekIsdUJBQXVCLHVDQUFVOztBQUVqQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHVDQUFVO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix3Q0FBVztBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiw4Q0FBaUI7QUFDakMsb0JBQW9CLDBDQUFhLGdCQUFnQiwwQ0FBYSxnQkFBZ0IsMENBQWE7QUFDM0Ysa0JBQWtCLDBDQUFhO0FBQy9CLGtCQUFrQiwwQ0FBYTtBQUMvQixpQkFBaUIsMENBQWE7QUFDOUIsbUJBQW1CLDBDQUFhOztBQUVoQzs7QUFFQSxvQkFBb0IsZUFBZTtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLFVBQVU7QUFDeEIsc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUEscUJBQXFCLHVDQUFVO0FBQy9CO0FBQ0E7QUFDQSxzQkFBc0IsdUNBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCLGdEQUFtQjs7QUFFbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHVDQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdDQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixrREFBcUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsNEJBQTRCLDhFQUFVO0FBQ3RDLDBCQUEwQix3RkFBZTtBQUN6QyxVQUFVLDBDQUFhO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLG9EQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxjQUFjLDRDQUFlO0FBQzdCLGdCQUFnQiw2Q0FBZ0I7QUFDaEMsa0JBQWtCLCtDQUFrQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLHNGQUFjO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsOEVBQVU7QUFDcEMsVUFBVSxpREFBb0I7QUFDOUI7QUFDQSx5QkFBeUIsYUFBYTtBQUN0QywwQkFBMEI7QUFDMUIsU0FBUztBQUNULHlDQUF5QyxjQUFjLFVBQVUsMkVBQTJFO0FBQzVJLHdEQUF3RCxnQ0FBZ0Msa0JBQWtCLGNBQWMsa0dBQWtHO0FBQzFOO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLG9EQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxjQUFjLDRDQUFlO0FBQzdCLGdCQUFnQiw2Q0FBZ0I7QUFDaEMsa0JBQWtCLCtDQUFrQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLHNGQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVPLHFCQUFxQiwyQ0FBYztBQUMxQztBQUNBOztBQUVBLGdCQUFnQixzREFBeUIsRUFBRSxXQUFXLHdDQUFXLG1CQUFtQjtBQUNwRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0NBQWdDLHVDQUFVO0FBQzFDLFVBQVUsaURBQW9CO0FBQzlCLFVBQVUsb0RBQXVCLEdBQUcsV0FBVyx3Q0FBVyxjQUFjO0FBQ3hFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRU8sb0JBQW9CLHVDQUFVO0FBQ3JDO0FBQ0EsZ0JBQWdCLGdEQUFtQjtBQUNuQyxnQkFBZ0Isc0RBQXlCO0FBQ3pDLGlCQUFpQix3Q0FBVztBQUM1QjtBQUNBO0FBQ0Esb0NBQW9DLFdBQVcsd0NBQVc7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsaUJBQWlCOztBQUVqQjs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaWdodGxpZ2h0Ly4vc3JjL2FwcC9pbmRleC5qcz9mYjA1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIG5vaW5zcGVjdGlvbiBKU0NoZWNrRnVuY3Rpb25TaWduYXR1cmVzXG5cbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuXG5pbXBvcnQgeyBtZXJnZUJ1ZmZlckdlb21ldHJpZXMgfSBmcm9tICd0aHJlZS9hZGRvbnMvdXRpbHMvQnVmZmVyR2VvbWV0cnlVdGlscydcbmltcG9ydCB7IEVmZmVjdENvbXBvc2VyIH0gZnJvbSAndGhyZWUvYWRkb25zL3Bvc3Rwcm9jZXNzaW5nL0VmZmVjdENvbXBvc2VyJ1xuaW1wb3J0IHsgVW5yZWFsQmxvb21QYXNzIH0gZnJvbSAndGhyZWUvYWRkb25zL3Bvc3Rwcm9jZXNzaW5nL1VucmVhbEJsb29tUGFzcydcbmltcG9ydCB7IFJlbmRlclBhc3MgfSBmcm9tICd0aHJlZS9hZGRvbnMvcG9zdHByb2Nlc3NpbmcvUmVuZGVyUGFzcydcbmltcG9ydCB7IFNoYWRlclBhc3MgfSBmcm9tICd0aHJlZS9hZGRvbnMvcG9zdHByb2Nlc3NpbmcvU2hhZGVyUGFzcydcblxuY2xhc3MgTGlnaHRFbWl0dGVyQ3VydmUgZXh0ZW5kcyBUSFJFRS5DdXJ2ZSB7XG5cdGNvbnN0cnVjdG9yKHJhZGl1cywgdHVybnMsIGhlaWdodCkge1xuXHRcdHN1cGVyKClcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1c1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgdGhpcy50dXJucyA9IHR1cm5zXG5cdH1cblxuXHRnZXRQb2ludCh0LCBvcHRpb25hbFRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCkpIHtcblx0XHRyZXR1cm4gb3B0aW9uYWxUYXJnZXQuc2V0RnJvbUN5bGluZHJpY2FsQ29vcmRzKCB0aGlzLnJhZGl1cywgLU1hdGguUEkgKiAyICogdGhpcy50dXJucyAqIHQsIHRoaXMuaGVpZ2h0ICogdCApXG5cdH1cbn1cblxuY2xhc3MgTGlnaHRFbWl0dGVycyBleHRlbmRzIFRIUkVFLk9iamVjdDNEIHtcbiAgY29uc3RydWN0b3IoZ3UsIGNvdW50LCBtYXhSLCBoZWlnaHQsIHR1cm5zLCBtKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgbGV0IGdzQmFsbCA9IFtdXG4gICAgbGV0IGdzRW1pdHRlciA9IFtdXG4gICAgbGV0IHN0YXJ0ID0gbWF4UiAvIDRcbiAgICBsZXQgdG90YWxXaWR0aCA9IG1heFIgKiAwLjkgLSBzdGFydFxuICAgIGxldCBzdGVwID0gdG90YWxXaWR0aCAvIChjb3VudCAtIDEpXG5cbiAgICAvLyBsZXQgdjMgPSBuZXcgVEhSRUUuVmVjdG9yMygpXG4gICAgLy8gbGV0IGF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBsZXQgc2hpZnQgPSBzdGFydCArIHN0ZXAgKiBpXG4gICAgICBsZXQgZ0JhbGwgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMC4wNSwgNjQsIDMyLCAwLCBNYXRoLlBJICogMiwgMCwgTWF0aC5QSSAqIDAuNSlcblxuICAgICAgZ0JhbGwudHJhbnNsYXRlKDAsIDAsIHNoaWZ0KVxuICAgICAgZ3NCYWxsLnB1c2goZ0JhbGwpXG5cbiAgICAgIC8qIHRoaXMgY29kZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICBsZXQgZ0VtaXR0ZXIgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjAzLCAwLjAzLCBoZWlnaHQsIDE2LCAyMDApXG4gICAgICBnRW1pdHRlci50cmFuc2xhdGUoc2hpZnQsIGhlaWdodCAqIDAuNSwgMClcblxuICAgICAgbGV0IHBvcyA9IGdFbWl0dGVyLmF0dHJpYnV0ZXMucG9zaXRpb25cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3MuY291bnQ7IGkrKyl7XG4gICAgICAgIHYzLmZyb21CdWZmZXJBdHRyaWJ1dGUocG9zLCBpKVxuXG4gICAgICAgIGxldCByYXRpbyA9IHYzLnkgLyBoZWlnaHRcbiAgICAgICAgbGV0IGFuZ2xlID0gLXJhdGlvICogTWF0aC5QSSAqIDIgKiB0dXJuc1xuXG4gICAgICAgIHYzLmFwcGx5QXhpc0FuZ2xlKGF4aXMsIGFuZ2xlKVxuICAgICAgICBwb3Muc2V0WFlaKGksIHYzLngsIHYzLnksIHYzLnopXG4gICAgICB9XG5cbiAgICAgIGdFbWl0dGVyLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKClcblxuICAgICAgKi8vLyBvciB0aGlzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIGxldCBsaWdodEVtaXR0ZXJDdXJ2ZSA9IG5ldyBMaWdodEVtaXR0ZXJDdXJ2ZShzaGlmdCwgdHVybnMsIGhlaWdodClcbiAgICAgIGxldCBnRW1pdHRlciA9IG5ldyBUSFJFRS5UdWJlR2VvbWV0cnkobGlnaHRFbWl0dGVyQ3VydmUsIDIwMCwgMC4wMiwgMTYpXG5cbiAgICAgIGdzRW1pdHRlci5wdXNoKGdFbWl0dGVyKVxuICAgIH1cblxuICAgIGxldCBnQmFsbHMgPSBtZXJnZUJ1ZmZlckdlb21ldHJpZXMoZ3NCYWxsKVxuICAgIGxldCBiYWxscyA9IG5ldyBUSFJFRS5NZXNoKGdCYWxscywgbS5jbG9uZSgpKVxuXG4gICAgYmFsbHMudXNlckRhdGEubm9uR2xvd2luZyA9IHRydWVcblxuICAgIGJhbGxzLmNhc3RTaGFkb3cgPSB0cnVlXG5cbiAgICB0aGlzLmFkZChiYWxscylcblxuICAgIGxldCBnRW1pdHRlcnMgPSBtZXJnZUJ1ZmZlckdlb21ldHJpZXMoZ3NFbWl0dGVyKVxuICAgIGxldCBtRW1pdHRlcnMgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3IoMSwgMC4yNSwgMCksXG4gICAgICBvbkJlZm9yZUNvbXBpbGU6IHNoYWRlciA9PiB7XG4gICAgICAgIHNoYWRlci51bmlmb3Jtcy5nbG9iYWxCbG9vbSA9IGd1Lmdsb2JhbEJsb29tXG4gICAgICAgIHNoYWRlci52ZXJ0ZXhTaGFkZXIgPSBgXG4gICAgICAgICAgdmFyeWluZyB2ZWMzIHZQb3M7XG4gICAgICAgICAgJHtzaGFkZXIudmVydGV4U2hhZGVyfVxuICAgICAgICBgLnJlcGxhY2UoXG4gICAgICAgICAgYCNpbmNsdWRlIDxiZWdpbl92ZXJ0ZXg+YCxcbiAgICAgICAgICBgI2luY2x1ZGUgPGJlZ2luX3ZlcnRleD5cbiAgICAgICAgICAgIHZQb3MgPSBwb3NpdGlvbjtcbiAgICAgICAgICBgXG4gICAgICAgIClcbiAgICAgICAgc2hhZGVyLmZyYWdtZW50U2hhZGVyID0gYFxuICAgICAgICAgICNkZWZpbmUgc3MoYSwgYiwgYykgc21vb3Roc3RlcChhLCBiLCBjKVxuICAgICAgICAgIHVuaWZvcm0gZmxvYXQgZ2xvYmFsQmxvb207XG4gICAgICAgICAgdmFyeWluZyB2ZWMzIHZQb3M7XG4gICAgICAgICAgJHtzaGFkZXIuZnJhZ21lbnRTaGFkZXJ9XG4gICAgICAgIGAucmVwbGFjZShcbiAgICAgICAgICBgI2luY2x1ZGUgPGRpdGhlcmluZ19mcmFnbWVudD5gLFxuICAgICAgICAgIGAjaW5jbHVkZSA8ZGl0aGVyaW5nX2ZyYWdtZW50PlxuICAgICAgICAgICAgdmVjMyBjb2xOb25HbG93ID0gdmVjMygxLCAwLjc1LCAwLjc1KTsgLy8gKiBwb3coKHNpbih2VXYueCAqIDIwMC4gKiBQSTIpICogMC41ICsgMC41KSAqIDAuNiArIDAuNCwgMy4pO1xuICAgICAgICAgICAgdmVjMyBjb2xHbG93ID0gZ2xfRnJhZ0NvbG9yLnJnYjtcbiAgICAgICAgICAgIGdsX0ZyYWdDb2xvci5yZ2IgPSBtaXgoY29sTm9uR2xvdywgY29sR2xvdywgZ2xvYmFsQmxvb20pO1xuICAgICAgICAgIGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBtRW1pdHRlcnMuZGVmaW5lcyA9IHtcIlVTRV9VVlwiIDogXCJcIn1cbiAgICBsZXQgZW1pdHRlcnMgPSBuZXcgVEhSRUUuTWVzaChnRW1pdHRlcnMsIG1FbWl0dGVycylcblxuICAgIGVtaXR0ZXJzLmNhc3RTaGFkb3cgPSB0cnVlXG5cbiAgICB0aGlzLmFkZChlbWl0dGVycylcbiAgfVxufVxuXG5jbGFzcyBCZWx0IGV4dGVuZHMgVEhSRUUuTWVzaCB7XG4gIGNvbnN0cnVjdG9yKGd1LCBtYWluU2l6ZSwgckJpZywgclNtYWxsLCB3aWR0aCwgbSkge1xuICAgIGxldCBtMSA9IG0uY2xvbmUoKVxuICAgIG0xLmNvbG9yLnNldCgnZ3JheScpXG5cbiAgICBsZXQgaFNpemUgPSBtYWluU2l6ZVxuICAgIGxldCBwYXRoID0gbmV3IFRIUkVFLlNoYXBlKClcbiAgICAgIC5hYnNhcmMoMCwgMCwgckJpZywgTWF0aC5QSSAqIDEuNSwgTWF0aC5QSSlcbiAgICAgIC5hYnNhcmMoLWhTaXplICsgclNtYWxsLCAtaFNpemUgKyByU21hbGwsIHJTbWFsbCwgTWF0aC5QSSwgTWF0aC5QSSAqIDEuNSlcbiAgICAgIC5saW5lVG8oMCwgLWhTaXplKVxuXG4gICAgLy8gY29uc3QgaHcgPSB3aWR0aCAqIDAuNVxuICAgIGNvbnN0IHNlZ3MgPSA1MDBcblxuICAgIGxldCBwYXRoUHRzID0gcGF0aC5nZXRTcGFjZWRQb2ludHMoc2VncykucmV2ZXJzZSgpXG4gICAgbGV0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoc2VncywgMC4wMSwgd2lkdGgsIHNlZ3MsIDEsIDEpLnRyYW5zbGF0ZShzZWdzICogMC41LCAwLjAwNSwgMClcbiAgICBsZXQgdlByZXYgPSBuZXcgVEhSRUUuVmVjdG9yMigpLCB2Q3VyciA9IG5ldyBUSFJFRS5WZWN0b3IyKCksIHZOZXh0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKVxuICAgIGxldCB2Q1AgPSBuZXcgVEhSRUUuVmVjdG9yMigpLFxuICAgICAgICB2Q04gPSBuZXcgVEhSRUUuVmVjdG9yMigpLFxuICAgICAgICB2MiA9IG5ldyBUSFJFRS5WZWN0b3IyKCksXG4gICAgICAgIGNudHIgPSBuZXcgVEhSRUUuVmVjdG9yMigpXG5cbiAgICBsZXQgcG9zID0gZy5hdHRyaWJ1dGVzLnBvc2l0aW9uXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcy5jb3VudDsgaSsrKSB7XG4gICAgICBsZXQgaWR4Q3VyciA9IE1hdGgucm91bmQocG9zLmdldFgoaSkpXG4gICAgICBsZXQgaWR4UHJldiA9IGlkeEN1cnIgPT09IDAgPyBzZWdzIC0gMSA6IGlkeEN1cnIgLSAxXG4gICAgICBsZXQgaWR4TmV4dCA9IGlkeEN1cnIgPT09IHNlZ3MgPyAxIDogaWR4Q3VyciArIDFcblxuICAgICAgdlByZXYuY29weShwYXRoUHRzW2lkeFByZXZdKVxuICAgICAgdkN1cnIuY29weShwYXRoUHRzW2lkeEN1cnJdKVxuICAgICAgdk5leHQuY29weShwYXRoUHRzW2lkeE5leHRdKVxuICAgICAgdkNQLnN1YlZlY3RvcnModlByZXYsIHZDdXJyKVxuICAgICAgdkNOLnN1YlZlY3RvcnModk5leHQsIHZDdXJyKVxuXG4gICAgICBsZXQgYUNQID0gdkNQLmFuZ2xlKClcbiAgICAgIGxldCBhQ04gPSB2Q04uYW5nbGUoKVxuICAgICAgbGV0IGhBID0gTWF0aC5QSSAqIDAuNSAtIChhQ1AgLSBhQ04pICogMC41XG4gICAgICBsZXQgYXNwZWN0ID0gTWF0aC5jb3MoaEEpXG5cbiAgICAgIHYyLnNldCh2Q3Vyci54LCB2Q3Vyci55KS5tdWx0aXBseVNjYWxhcihwb3MuZ2V0WShpKSAvIGFzcGVjdClcbiAgICAgIHYyLnJvdGF0ZUFyb3VuZChjbnRyLCBoQSkuYWRkKHZDdXJyKVxuICAgICAgcG9zLnNldFhZKGksIHYyLngsIHYyLnkpXG4gICAgfVxuXG4gICAgZy5yb3RhdGVYKC1NYXRoLlBJICogMC41KVxuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKVxuXG4gICAgc3VwZXIoZywgbTEpXG5cbiAgICAvLyB0aGlzLnJlY2VpdmVTaGFkb3cgPSB0cnVlXG4gICAgLy8gdGhpcy5jYXN0U2hhZG93ID0gdHJ1ZVxuXG4gICAgdGhpcy51bmlmb3JtcyA9IHtcbiAgICAgIHRpbWU6IHsgdmFsdWU6IDAgfSxcbiAgICAgIGFuZ3VsYXJTcGVlZDogeyB2YWx1ZTogMCB9XG4gICAgfVxuXG4gICAgbTEub25CZWZvcmVDb21waWxlID0gc2hhZGVyID0+IHtcbiAgICAgIHNoYWRlci51bmlmb3Jtcy5nbG9iYWxCbG9vbSA9IGd1Lmdsb2JhbEJsb29tXG4gICAgICBzaGFkZXIudW5pZm9ybXMudGltZSA9IHRoaXMudW5pZm9ybXMudGltZVxuICAgICAgc2hhZGVyLnVuaWZvcm1zLmJlbHRMZW5ndGggPSB7dmFsdWU6IHJCaWcgKiBNYXRoLlBJICogMS41ICsgclNtYWxsICogTWF0aC5QSSAqIDAuNSArIChoU2l6ZSAtIHJTbWFsbCkgKjJ9XG4gICAgICBzaGFkZXIudW5pZm9ybXMuYW5ndWxhclNwZWVkID0gdGhpcy51bmlmb3Jtcy5hbmd1bGFyU3BlZWRcbiAgICAgIHNoYWRlci51bmlmb3Jtcy5yU21hbGwgPSB7dmFsdWU6IHJTbWFsbH1cbiAgICAgIHNoYWRlci5mcmFnbWVudFNoYWRlciA9IGBcbiAgICAgICAgI2RlZmluZSBzcyhhLCBiLCBjKSBzbW9vdGhzdGVwKGEsIGIsIGMpXG4gICAgICAgIHVuaWZvcm0gZmxvYXQgZ2xvYmFsQmxvb207XG4gICAgICAgIHVuaWZvcm0gZmxvYXQgdGltZTtcbiAgICAgICAgdW5pZm9ybSBmbG9hdCBiZWx0TGVuZ3RoO1xuICAgICAgICB1bmlmb3JtIGZsb2F0IGFuZ3VsYXJTcGVlZDtcbiAgICAgICAgdW5pZm9ybSBmbG9hdCByU21hbGw7XG4gICAgICAgICR7c2hhZGVyLmZyYWdtZW50U2hhZGVyfVxuICAgICAgYC5yZXBsYWNlKFxuICAgICAgICBgI2luY2x1ZGUgPGNvbG9yX2ZyYWdtZW50PmAsXG4gICAgICAgIGAjaW5jbHVkZSA8Y29sb3JfZnJhZ21lbnQ+XG4gICAgICAgICAgZmxvYXQgbGluZWFyU3BlZWQgPSByU21hbGwgKiBhbmd1bGFyU3BlZWQ7XG4gICAgICAgICAgZmxvYXQgdXZYID0gbW9kKHZVdi54ICogYmVsdExlbmd0aCArIHRpbWUgKiBsaW5lYXJTcGVlZCwgYmVsdExlbmd0aCAvIDQuKTtcbiAgICAgICAgICBmbG9hdCBmID0gc3RlcCgwLjI1LCB1dlgpIC0gc3RlcCgwLjc1LCB1dlgpO1xuICAgICAgICAgIGRpZmZ1c2VDb2xvci5yZ2IgPSBtaXgoZGlmZnVzZUNvbG9yLnJnYiwgdmVjMygwLjg3NSksIGYpO1xuICAgICAgICBgXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgIGAjaW5jbHVkZSA8ZGl0aGVyaW5nX2ZyYWdtZW50PmAsXG4gICAgICAgIGAjaW5jbHVkZSA8ZGl0aGVyaW5nX2ZyYWdtZW50PlxuICAgICAgICAgIGdsX0ZyYWdDb2xvci5yZ2IgPSBtaXgoZ2xfRnJhZ0NvbG9yLnJnYiwgdmVjMygwKSwgZ2xvYmFsQmxvb20pO1xuICAgICAgICBgXG4gICAgICApXG4gICAgfVxuXG4gICAgbTEuZGVmaW5lcyA9IHtcIlVTRV9VVlwiIDogXCJcIn1cbiAgfVxufVxuXG5jbGFzcyBSb2xsZXIgZXh0ZW5kcyBUSFJFRS5NZXNoIHtcbiAgY29uc3RydWN0b3IociwgaCwgcm91bmRSLCBtKSB7XG4gICAgbGV0IG0xID0gbS5jbG9uZSgpXG4gICAgbGV0IHByb2ZpbGUgPSBuZXcgVEhSRUUuUGF0aCgpXG4gICAgICAubW92ZVRvKDAsIDApXG4gICAgICAubGluZVRvKHIgLSByb3VuZFIsIDApXG4gICAgICAuYWJzYXJjKHIgLSByb3VuZFIsIHJvdW5kUiwgcm91bmRSLCBNYXRoLlBJICogMS41LCBNYXRoLlBJICogMilcbiAgICAgIC5hYnNhcmMociAtIHJvdW5kUiwgaCAtIHJvdW5kUiwgcm91bmRSLCAwLCBNYXRoLlBJICogMC41KVxuXG4gICAgICAubGluZVRvKDAsIGgpXG5cbiAgICBsZXQgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHByb2ZpbGUuZ2V0UG9pbnRzKDUwKSwgMTAwKVxuXG4gICAgc3VwZXIoZywgbTEpXG5cbiAgICAvLyB0aGlzLnJlY2VpdmVTaGFkb3cgPSB0cnVlXG4gICAgLy8gdGhpcy5jYXN0U2hhZG93ID0gdHJ1ZVxuICB9XG59XG5cbmNsYXNzIEJhc2UgZXh0ZW5kcyBUSFJFRS5NZXNoIHtcbiAgY29uc3RydWN0b3IodywgaCwgUiwgcm91bmRSLCBtKSB7XG4gICAgbGV0IGFuZ2xlU3RlcCA9IE1hdGguUEkgKiAwLjVcbiAgICBsZXQgd3dyID0gdyAtIFIgLSByb3VuZFJcbiAgICBsZXQgaHdyciA9IGggLSByb3VuZFIgKiAyXG4gICAgbGV0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKClcbiAgICAgIC5hYnNhcmMoIHd3ciwgIHd3ciwgUiwgMCwgICAgICAgICAgICAgYW5nbGVTdGVwKVxuICAgICAgLmFic2FyYygtd3dyLCAgd3dyLCBSLCBhbmdsZVN0ZXAsICAgICBhbmdsZVN0ZXAgKiAyKVxuICAgICAgLmFic2FyYygtd3dyLCAtd3dyLCBSLCBhbmdsZVN0ZXAgKiAyLCBhbmdsZVN0ZXAgKiAzKVxuICAgICAgLmFic2FyYyggd3dyLCAtd3dyLCBSLCBhbmdsZVN0ZXAgKiAzLCBhbmdsZVN0ZXAgKiA0KVxuXG4gICAgbGV0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KFxuICAgICAgc2hhcGUsXG4gICAgICB7XG4gICAgICAgIGRlcHRoOiBod3JyLFxuICAgICAgICBiZXZlbEVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGJldmVsVGhpY2tuZXNzOiByb3VuZFIsXG4gICAgICAgIGJldmVsU2l6ZTogcm91bmRSLFxuICAgICAgICBiZXZlbFNlZ21lbnRzOiAxMCxcbiAgICAgICAgY3VydmVTZWdtZW50czogMjBcbiAgICAgIH1cbiAgICApXG5cbiAgICBnLnRyYW5zbGF0ZSgwLCAwLCByb3VuZFIpXG4gICAgZy5yb3RhdGVYKC1NYXRoLlBJICogMC41KVxuXG4gICAgc3VwZXIoZywgbS5jbG9uZSgpKVxuXG4gICAgLy8gdGhpcy5yZWNlaXZlU2hhZG93ID0gdHJ1ZVxuICAgIC8vIHRoaXMuY2FzdFNoYWRvdyA9IHRydWVcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUG9zdHByb2Nlc3Npbmcge1xuICBjb25zdHJ1Y3RvcihzY2VuZSwgY2FtZXJhLCByZW5kZXJlcikge1xuICAgIGNvbnN0IHJlbmRlclNjZW5lID0gbmV3IFJlbmRlclBhc3Moc2NlbmUsIGNhbWVyYSlcbiAgICBjb25zdCBibG9vbVBhc3MgPSBuZXcgVW5yZWFsQmxvb21QYXNzKFxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCksXG4gICAgICAxLjI1LFxuICAgICAgMC4yNSxcbiAgICAgIDBcbiAgICApXG5cbiAgICBsZXQgc2FtcGxlcyA9IDRcbiAgICBjb25zdCB0YXJnZXQxID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KFxuICAgICAgd2luZG93LmlubmVyV2lkdGgsXG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFRIUkVFLkZsb2F0VHlwZSxcbiAgICAgICAgZm9ybWF0OiBUSFJFRS5SR0JBRm9ybWF0LFxuICAgICAgICBlbmNvZGluZzogVEhSRUUuc1JHQkVuY29kaW5nLFxuICAgICAgICBzYW1wbGVzXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5ibG9vbUNvbXBvc2VyID0gbmV3IEVmZmVjdENvbXBvc2VyKHJlbmRlcmVyLCB0YXJnZXQxKVxuICAgIHRoaXMuYmxvb21Db21wb3Nlci5yZW5kZXJUb1NjcmVlbiA9IGZhbHNlXG4gICAgdGhpcy5ibG9vbUNvbXBvc2VyLmFkZFBhc3MocmVuZGVyU2NlbmUpXG4gICAgdGhpcy5ibG9vbUNvbXBvc2VyLmFkZFBhc3MoYmxvb21QYXNzKVxuXG4gICAgY29uc3QgZmluYWxQYXNzID0gbmV3IFNoYWRlclBhc3MoXG4gICAgICBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgIGJhc2VUZXh0dXJlOiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICAgICAgYmxvb21UZXh0dXJlOiB7IHZhbHVlOiB0aGlzLmJsb29tQ29tcG9zZXIucmVuZGVyVGFyZ2V0Mi50ZXh0dXJlIH1cbiAgICAgICAgfSxcbiAgICAgICAgdmVydGV4U2hhZGVyOiBgdmFyeWluZyB2ZWMyIHZVdjsgdm9pZCBtYWluKCkgeyB2VXYgPSB1djsgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApOyB9YCxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGB1bmlmb3JtIHNhbXBsZXIyRCBiYXNlVGV4dHVyZTsgdW5pZm9ybSBzYW1wbGVyMkQgYmxvb21UZXh0dXJlOyB2YXJ5aW5nIHZlYzIgdlV2OyB2b2lkIG1haW4oKSB7IGdsX0ZyYWdDb2xvciA9ICggdGV4dHVyZTJEKCBiYXNlVGV4dHVyZSwgdlV2ICkgKyB2ZWM0KCAxLjAgKSAqIHRleHR1cmUyRCggYmxvb21UZXh0dXJlLCB2VXYgKSApOyB9YCxcbiAgICAgICAgZGVmaW5lczoge31cbiAgICAgIH0pLFxuICAgICAgJ2Jhc2VUZXh0dXJlJ1xuICAgIClcblxuICAgIGZpbmFsUGFzcy5uZWVkc1N3YXAgPSB0cnVlXG5cbiAgICBjb25zdCB0YXJnZXQyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KFxuICAgICAgd2luZG93LmlubmVyV2lkdGgsXG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFRIUkVFLkZsb2F0VHlwZSxcbiAgICAgICAgZm9ybWF0OiBUSFJFRS5SR0JBRm9ybWF0LFxuICAgICAgICBlbmNvZGluZzogVEhSRUUuc1JHQkVuY29kaW5nLFxuICAgICAgICBzYW1wbGVzXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5maW5hbENvbXBvc2VyID0gbmV3IEVmZmVjdENvbXBvc2VyKHJlbmRlcmVyLCB0YXJnZXQyKVxuICAgIHRoaXMuZmluYWxDb21wb3Nlci5hZGRQYXNzKHJlbmRlclNjZW5lKVxuICAgIHRoaXMuZmluYWxDb21wb3Nlci5hZGRQYXNzKGZpbmFsUGFzcylcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV2aWNlIGV4dGVuZHMgVEhSRUUuT2JqZWN0M0Qge1xuICBjb25zdHJ1Y3RvcihndSkge1xuICAgIHN1cGVyKClcblxuICAgIGxldCBtID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiBuZXcgVEhSRUUuQ29sb3IoKS5zZXRTY2FsYXIoMC43NSl9KVxuICAgIGxldCBiYXNlID0gbmV3IEJhc2UoNCwgMSwgMC41LCAwLjA1LCBtKVxuXG4gICAgY29uc3QgckJpZyA9IDMuNzVcbiAgICBjb25zdCByU21hbGwgPSAwLjVcblxuICAgIGxldCBsaWdodEVtaXR0ZXJzID0gbmV3IExpZ2h0RW1pdHRlcnMoZ3UsIDE1LCByQmlnLCByQmlnICogMywgMS4yNSwgbSlcbiAgICBsaWdodEVtaXR0ZXJzLnBvc2l0aW9uLnNldCgwLCAwLjI1LCAwKVxuXG4gICAgbGV0IHJvbGxlckJpZyA9IG5ldyBSb2xsZXIockJpZywgMC4yNSwgMC4wNSwgbSlcbiAgICByb2xsZXJCaWcubWF0ZXJpYWwuY29sb3IubXVsdGlwbHlTY2FsYXIoMC43NSlcbiAgICByb2xsZXJCaWcucG9zaXRpb24uc2V0KDAsIDEsIDApXG4gICAgcm9sbGVyQmlnLmFkZChsaWdodEVtaXR0ZXJzKVxuXG4gICAgYmFzZS5hZGQocm9sbGVyQmlnKVxuXG4gICAgbGV0IHJvdGF0aW9uSW5kaWNhdG9yID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMC4wNSwgNjQsIDE2LCAwLCBNYXRoLlBJICogMiwgMCwgTWF0aC5QSSAqIDAuNSksXG4gICAgICBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKDAsIDAuNzUsIDEpIH0pXG4gICAgKVxuXG4gICAgcm90YXRpb25JbmRpY2F0b3IucG9zaXRpb24uc2V0KDAuMzUsIDAuMjUsIDApXG5cbiAgICBsZXQgcm9sbGVyU21hbGwgPSBuZXcgUm9sbGVyKHJTbWFsbCwgMC4yNSwgMC4wNSwgbSlcbiAgICByb2xsZXJTbWFsbC5tYXRlcmlhbC5jb2xvci5tdWx0aXBseVNjYWxhcigwLjc1KVxuICAgIHJvbGxlclNtYWxsLnBvc2l0aW9uLnNldCgtMy4yNSwgMSwgMy4yNSlcbiAgICByb2xsZXJTbWFsbC5hZGQocm90YXRpb25JbmRpY2F0b3IpXG5cbiAgICBiYXNlLmFkZChyb2xsZXJTbWFsbClcblxuICAgIGxldCBiZWx0ID0gbmV3IEJlbHQoZ3UsIHJCaWcsIHJCaWcsIHJTbWFsbCwgMC4xMjUsIG0pXG4gICAgYmVsdC5wb3NpdGlvbi5zZXQoMCwgMS4xMjUsIDApXG4gICAgYmFzZS5hZGQoYmVsdClcblxuICAgIHRoaXMuYWRkKGJhc2UpXG5cbiAgICBjb25zdCBnZWFyUmF0aW8gPSByQmlnIC8gclNtYWxsXG4gICAgY29uc3QgYW5ndWxhclNwZWVkID0gTWF0aC5QSVxuXG4gICAgYmVsdC51bmlmb3Jtcy5hbmd1bGFyU3BlZWQudmFsdWUgPSBhbmd1bGFyU3BlZWRcblxuICAgIHRoaXMudXBkYXRlID0gdCA9PiB7XG4gICAgICBsZXQgdGltZSA9IHQgKiBhbmd1bGFyU3BlZWRcbiAgICAgIHJvbGxlclNtYWxsLnJvdGF0aW9uLnkgPSB0aW1lXG4gICAgICByb2xsZXJCaWcucm90YXRpb24ueSA9IHRpbWUgLyBnZWFyUmF0aW9cbiAgICAgIGJlbHQudW5pZm9ybXMudGltZS52YWx1ZSA9IHRcbiAgICB9XG5cbiAgICBbcm9sbGVyU21hbGwsIHJvbGxlckJpZywgYmFzZV0uZm9yRWFjaChvID0+IHtcbiAgICAgIG8udXNlckRhdGEubm9uR2xvd2luZyA9IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZSBleHRlbmRzIFRIUkVFLk1lc2gge1xuICBjb25zdHJ1Y3RvcihndSwgYmdDb2xvcikge1xuICAgIGxldCBnID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMjAsIDIwKS5yb3RhdGVYKC1NYXRoLlBJICogMC41KVxuICAgIGxldCBtID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcigpLnNldFNjYWxhcigwLjUpLmdldEhleCgpLFxuICAgICAgb25CZWZvcmVDb21waWxlOiBzaGFkZXIgPT4ge1xuICAgICAgICBzaGFkZXIudW5pZm9ybXMuZ2xvYmFsQmxvb20gPSBndS5nbG9iYWxCbG9vbVxuICAgICAgICBzaGFkZXIudW5pZm9ybXMuYmdDb2xvciA9IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcihiZ0NvbG9yKSB9XG4gICAgICAgIHNoYWRlci5mcmFnbWVudFNoYWRlciA9IGBcbiAgICAgICAgICB1bmlmb3JtIGZsb2F0IGdsb2JhbEJsb29tO1xuICAgICAgICAgIHVuaWZvcm0gdmVjMyBiZ0NvbG9yO1xuICAgICAgICAgICR7c2hhZGVyLmZyYWdtZW50U2hhZGVyfVxuICAgICAgICBgLnJlcGxhY2UoXG4gICAgICAgICAgYCNpbmNsdWRlIDxkaXRoZXJpbmdfZnJhZ21lbnQ+YCxcbiAgICAgICAgICBgI2luY2x1ZGUgPGRpdGhlcmluZ19mcmFnbWVudD5cbiAgICAgICAgICBcbiAgICAgICAgICBmbG9hdCB1dkRpc3QgPSBkaXN0YW5jZSh2VXYsIHZlYzIoMC41KSkgKiAyLjtcbiAgICAgICAgICBmbG9hdCBmID0gc21vb3Roc3RlcCgwLjUsIDEuLCB1dkRpc3QpO1xuICAgICAgICAgIGdsX0ZyYWdDb2xvci5yZ2IgPSBtaXgoZ2xfRnJhZ0NvbG9yLnJnYiwgYmdDb2xvciwgZik7XG4gICAgICAgICAgXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yLnJnYiA9IG1peChnbF9GcmFnQ29sb3IucmdiLCB2ZWMzKDApLCBnbG9iYWxCbG9vbSk7XG4gICAgICAgICAgYFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgIG0uZGVmaW5lcyA9IHtcIlVTRV9VVlwiIDogXCJcIn1cblxuICAgIHN1cGVyKGcsIG0pXG5cbiAgICAvLyB0aGlzLnJlY2VpdmVTaGFkb3cgPSB0cnVlXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/index.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app/index.js\");\n/* harmony import */ var three_addons_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/addons/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n\n\n\n\nconst bgColors = {\n  on: new three__WEBPACK_IMPORTED_MODULE_2__.Color(1, 0.25, 0).multiplyScalar(0.1).getHex(),\n  off: 0x000000\n}\n\nconst scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene()\nscene.background = new three__WEBPACK_IMPORTED_MODULE_2__.Color(bgColors.off)\n\nconst camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000)\ncamera.position.set(-5, 5, 10).setLength(18)\n\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({ antialias: false })\nrenderer.shadowMap.enabled = true\nrenderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_2__.PCFSoftShadowMap\nrenderer.setSize(innerWidth, innerHeight)\n\ndocument.body.appendChild(renderer.domElement)\nwindow.addEventListener('resize', () => {\n  camera.aspect = innerWidth / innerHeight\n  camera.updateProjectionMatrix()\n\n  renderer.setSize(innerWidth, innerHeight)\n\n  postprocessing.bloomComposer.setSize(innerWidth, innerHeight)\n  postprocessing.finalComposer.setSize(innerWidth, innerHeight)\n})\n\nconst controls = new three_addons_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__.OrbitControls(camera, renderer.domElement)\ncontrols.enableDamping = true\ncontrols.target.set(0, 4, 0)\n\nconst light = new three__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight(0xffffff, 0.2)\nlight.castShadow = true\nlight.shadow.camera.top = 10\nlight.shadow.camera.bottom = -10\nlight.shadow.camera.left = -10\nlight.shadow.camera.right = 10\nlight.shadow.mapSize.width = 2048\nlight.shadow.mapSize.height = 2048\nlight.shadow.camera.near = 0\nlight.shadow.camera.far = 20\nlight.position.set(10, 20, 10).setLength(10)\n\nscene.add(light, new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(0xffffff, 0.3))\n\nconst gu = {\n  globalBloom: { value: 0 }\n}\n\n/*\nconst helper = new THREE.GridHelper()\nhelper.userData.nonGlowing = true\nscene.add(helper)\n*/\n\nconst device = new _app__WEBPACK_IMPORTED_MODULE_1__.Device(gu)\nscene.add(device)\n\nconst table = new _app__WEBPACK_IMPORTED_MODULE_1__.Table(gu, bgColors.on)\nscene.add(table)\n\nscene.traverse(child => {\n  if (child.userData.nonGlowing) {\n    child.material.onBeforeCompile = shader => {\n      shader.uniforms.globalBloom = gu.globalBloom\n      shader.fragmentShader = `\n        uniform float globalBloom;\n        ${shader.fragmentShader}\n      `.replace(\n        `#include <dithering_fragment>`,\n        `#include <dithering_fragment>\n          gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0), globalBloom);\n        `\n      )\n    }\n  }\n})\n\nconst postprocessing = new _app__WEBPACK_IMPORTED_MODULE_1__.Postprocessing(scene, camera, renderer)\nconst clock = new three__WEBPACK_IMPORTED_MODULE_2__.Clock()\n\nrenderer.setAnimationLoop(() => {\n  let t = clock.getElapsedTime()\n\n  controls.update()\n  device.update(t)\n\n  gu.globalBloom.value = 1\n  scene.background.set(bgColors.off)\n  postprocessing.bloomComposer.render()\n  gu.globalBloom.value = 0\n  scene.background.set(bgColors.on)\n  postprocessing.finalComposer.render()\n})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3Qjs7QUFFNkI7QUFDYztBQUNyQzs7QUFFOUI7QUFDQSxVQUFVLHdDQUFXO0FBQ3JCO0FBQ0E7O0FBRUEsa0JBQWtCLHdDQUFXO0FBQzdCLHVCQUF1Qix3Q0FBVzs7QUFFbEMsbUJBQW1CLG9EQUF1QjtBQUMxQzs7QUFFQSxxQkFBcUIsZ0RBQW1CLEdBQUcsa0JBQWtCO0FBQzdEO0FBQ0EsMEJBQTBCLG1EQUFzQjtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxxQkFBcUIsOEVBQWE7QUFDbEM7QUFDQTs7QUFFQSxrQkFBa0IsbURBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiwrQ0FBa0I7O0FBRXZDO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHdDQUFNO0FBQ3pCOztBQUVBLGtCQUFrQix1Q0FBSztBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsMkJBQTJCLGdEQUFjO0FBQ3pDLGtCQUFrQix3Q0FBVzs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaWdodGxpZ2h0Ly4vc3JjL21haW4uanM/NTZkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcydcblxuaW1wb3J0IHsgUG9zdHByb2Nlc3NpbmcsIERldmljZSwgVGFibGUgfSBmcm9tICcuL2FwcCdcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9hZGRvbnMvY29udHJvbHMvT3JiaXRDb250cm9scydcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuXG5jb25zdCBiZ0NvbG9ycyA9IHtcbiAgb246IG5ldyBUSFJFRS5Db2xvcigxLCAwLjI1LCAwKS5tdWx0aXBseVNjYWxhcigwLjEpLmdldEhleCgpLFxuICBvZmY6IDB4MDAwMDAwXG59XG5cbmNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKClcbnNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoYmdDb2xvcnMub2ZmKVxuXG5jb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIGlubmVyV2lkdGggLyBpbm5lckhlaWdodCwgMSwgMTAwMClcbmNhbWVyYS5wb3NpdGlvbi5zZXQoLTUsIDUsIDEwKS5zZXRMZW5ndGgoMTgpXG5cbmNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbnRpYWxpYXM6IGZhbHNlIH0pXG5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWVcbnJlbmRlcmVyLnNoYWRvd01hcC50eXBlID0gVEhSRUUuUENGU29mdFNoYWRvd01hcFxucmVuZGVyZXIuc2V0U2l6ZShpbm5lcldpZHRoLCBpbm5lckhlaWdodClcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgY2FtZXJhLmFzcGVjdCA9IGlubmVyV2lkdGggLyBpbm5lckhlaWdodFxuICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpXG5cbiAgcmVuZGVyZXIuc2V0U2l6ZShpbm5lcldpZHRoLCBpbm5lckhlaWdodClcblxuICBwb3N0cHJvY2Vzc2luZy5ibG9vbUNvbXBvc2VyLnNldFNpemUoaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQpXG4gIHBvc3Rwcm9jZXNzaW5nLmZpbmFsQ29tcG9zZXIuc2V0U2l6ZShpbm5lcldpZHRoLCBpbm5lckhlaWdodClcbn0pXG5cbmNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KVxuY29udHJvbHMuZW5hYmxlRGFtcGluZyA9IHRydWVcbmNvbnRyb2xzLnRhcmdldC5zZXQoMCwgNCwgMClcblxuY29uc3QgbGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgMC4yKVxubGlnaHQuY2FzdFNoYWRvdyA9IHRydWVcbmxpZ2h0LnNoYWRvdy5jYW1lcmEudG9wID0gMTBcbmxpZ2h0LnNoYWRvdy5jYW1lcmEuYm90dG9tID0gLTEwXG5saWdodC5zaGFkb3cuY2FtZXJhLmxlZnQgPSAtMTBcbmxpZ2h0LnNoYWRvdy5jYW1lcmEucmlnaHQgPSAxMFxubGlnaHQuc2hhZG93Lm1hcFNpemUud2lkdGggPSAyMDQ4XG5saWdodC5zaGFkb3cubWFwU2l6ZS5oZWlnaHQgPSAyMDQ4XG5saWdodC5zaGFkb3cuY2FtZXJhLm5lYXIgPSAwXG5saWdodC5zaGFkb3cuY2FtZXJhLmZhciA9IDIwXG5saWdodC5wb3NpdGlvbi5zZXQoMTAsIDIwLCAxMCkuc2V0TGVuZ3RoKDEwKVxuXG5zY2VuZS5hZGQobGlnaHQsIG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDAuMykpXG5cbmNvbnN0IGd1ID0ge1xuICBnbG9iYWxCbG9vbTogeyB2YWx1ZTogMCB9XG59XG5cbi8qXG5jb25zdCBoZWxwZXIgPSBuZXcgVEhSRUUuR3JpZEhlbHBlcigpXG5oZWxwZXIudXNlckRhdGEubm9uR2xvd2luZyA9IHRydWVcbnNjZW5lLmFkZChoZWxwZXIpXG4qL1xuXG5jb25zdCBkZXZpY2UgPSBuZXcgRGV2aWNlKGd1KVxuc2NlbmUuYWRkKGRldmljZSlcblxuY29uc3QgdGFibGUgPSBuZXcgVGFibGUoZ3UsIGJnQ29sb3JzLm9uKVxuc2NlbmUuYWRkKHRhYmxlKVxuXG5zY2VuZS50cmF2ZXJzZShjaGlsZCA9PiB7XG4gIGlmIChjaGlsZC51c2VyRGF0YS5ub25HbG93aW5nKSB7XG4gICAgY2hpbGQubWF0ZXJpYWwub25CZWZvcmVDb21waWxlID0gc2hhZGVyID0+IHtcbiAgICAgIHNoYWRlci51bmlmb3Jtcy5nbG9iYWxCbG9vbSA9IGd1Lmdsb2JhbEJsb29tXG4gICAgICBzaGFkZXIuZnJhZ21lbnRTaGFkZXIgPSBgXG4gICAgICAgIHVuaWZvcm0gZmxvYXQgZ2xvYmFsQmxvb207XG4gICAgICAgICR7c2hhZGVyLmZyYWdtZW50U2hhZGVyfVxuICAgICAgYC5yZXBsYWNlKFxuICAgICAgICBgI2luY2x1ZGUgPGRpdGhlcmluZ19mcmFnbWVudD5gLFxuICAgICAgICBgI2luY2x1ZGUgPGRpdGhlcmluZ19mcmFnbWVudD5cbiAgICAgICAgICBnbF9GcmFnQ29sb3IucmdiID0gbWl4KGdsX0ZyYWdDb2xvci5yZ2IsIHZlYzMoMCksIGdsb2JhbEJsb29tKTtcbiAgICAgICAgYFxuICAgICAgKVxuICAgIH1cbiAgfVxufSlcblxuY29uc3QgcG9zdHByb2Nlc3NpbmcgPSBuZXcgUG9zdHByb2Nlc3Npbmcoc2NlbmUsIGNhbWVyYSwgcmVuZGVyZXIpXG5jb25zdCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpXG5cbnJlbmRlcmVyLnNldEFuaW1hdGlvbkxvb3AoKCkgPT4ge1xuICBsZXQgdCA9IGNsb2NrLmdldEVsYXBzZWRUaW1lKClcblxuICBjb250cm9scy51cGRhdGUoKVxuICBkZXZpY2UudXBkYXRlKHQpXG5cbiAgZ3UuZ2xvYmFsQmxvb20udmFsdWUgPSAxXG4gIHNjZW5lLmJhY2tncm91bmQuc2V0KGJnQ29sb3JzLm9mZilcbiAgcG9zdHByb2Nlc3NpbmcuYmxvb21Db21wb3Nlci5yZW5kZXIoKVxuICBndS5nbG9iYWxCbG9vbS52YWx1ZSA9IDBcbiAgc2NlbmUuYmFja2dyb3VuZC5zZXQoYmdDb2xvcnMub24pXG4gIHBvc3Rwcm9jZXNzaW5nLmZpbmFsQ29tcG9zZXIucmVuZGVyKClcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("9cf39b893d382cd8ccda")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "nightlight:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, oldTag, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatenightlight"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknightlight"] = self["webpackChunknightlight"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_mini-css-extract-plugin_dist_hmr_hotModuleReplacement_js-node_modules_th-9de139"], () => (__webpack_require__("./src/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;