/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/** Original image: https://dribbble.com/shots/3661410-walkman */

// import './scss/fonts.scss'

var b = document.body;
var h = document.querySelector("#h");
var unit = 1.75;
var audioElement = document.querySelector("#a");
var btnElement = document.querySelector(".button5");
var tapeElement = document.querySelector(".c");
var circleElement = document.querySelectorAll(".circle")[1];
var waveElement = document.querySelector(".waves");
var mouseDown = function mouseDown() {
  return b.addEventListener('mousemove', moveFunc);
};
var mouseUp = function mouseUp() {
  return b.removeEventListener('mousemove', moveFunc);
};
var moveFunc = function moveFunc(e) {
  var x = e.pageX / window.innerWidth - 0.5;
  var y = e.pageY / window.innerHeight - 0.5;
  h.style.transform = "\n    perspective(".concat(400 * unit, "vmin)\n    rotateX(").concat(y * 20 + 66, "deg)\n    rotateZ(").concat(-x * 420 + 40, "deg)\n    translateZ(").concat(-16 * unit, "vmin)\n  ");
};
var playRadio = function playRadio() {
  btnElement.removeEventListener('click', playRadio);
  audioElement.currentTime = 0;
  audioElement.play();
  setTimeout(function () {
    return waveElement.classList.add('is-wave-playing');
  }, 1100);
  toggleStyles();
};
var stopRadio = function stopRadio() {
  btnElement.addEventListener('click', playRadio);
  audioElement.pause();
  waveElement.classList.remove('is-wave-playing');
  toggleStyles();
};
var toggleStyles = function toggleStyles() {
  btnElement.classList.toggle('is-button-pressed');
  tapeElement.classList.toggle('is-c-close');
  circleElement.classList.toggle('cr');
};
h.addEventListener('mousedown', mouseDown);
b.addEventListener('mouseup', mouseUp);
btnElement.addEventListener('click', playRadio);
audioElement.addEventListener('ended', stopRadio);
/******/ })()
;