/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerMux"],{

/***/ "(app-pages-browser)/./node_modules/react-player/lib/players/Mux.js":
/*!******************************************************!*\
  !*** ./node_modules/react-player/lib/players/Mux.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Mux_exports = {};\n__export(Mux_exports, {\n  default: () => Mux\n});\nmodule.exports = __toCommonJS(Mux_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\"));\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"(app-pages-browser)/./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://cdn.jsdelivr.net/npm/@mux/mux-player@VERSION/dist/mux-player.mjs\";\nclass Mux extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    // Proxy methods to prevent listener leaks\n    __publicField(this, \"onReady\", (...args) => this.props.onReady(...args));\n    __publicField(this, \"onPlay\", (...args) => this.props.onPlay(...args));\n    __publicField(this, \"onBuffer\", (...args) => this.props.onBuffer(...args));\n    __publicField(this, \"onBufferEnd\", (...args) => this.props.onBufferEnd(...args));\n    __publicField(this, \"onPause\", (...args) => this.props.onPause(...args));\n    __publicField(this, \"onEnded\", (...args) => this.props.onEnded(...args));\n    __publicField(this, \"onError\", (...args) => this.props.onError(...args));\n    __publicField(this, \"onPlayBackRateChange\", (event) => this.props.onPlaybackRateChange(event.target.playbackRate));\n    __publicField(this, \"onEnablePIP\", (...args) => this.props.onEnablePIP(...args));\n    __publicField(this, \"onSeek\", (e) => {\n      this.props.onSeek(e.target.currentTime);\n    });\n    __publicField(this, \"onDurationChange\", () => {\n      const duration = this.getDuration();\n      this.props.onDuration(duration);\n    });\n    __publicField(this, \"mute\", () => {\n      this.player.muted = true;\n    });\n    __publicField(this, \"unmute\", () => {\n      this.player.muted = false;\n    });\n    __publicField(this, \"ref\", (player) => {\n      this.player = player;\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n    this.addListeners(this.player);\n    const playbackId = this.getPlaybackId(this.props.url);\n    if (playbackId) {\n      this.player.playbackId = playbackId;\n    }\n  }\n  componentWillUnmount() {\n    this.player.playbackId = null;\n    this.removeListeners(this.player);\n  }\n  addListeners(player) {\n    const { playsinline } = this.props;\n    player.addEventListener(\"play\", this.onPlay);\n    player.addEventListener(\"waiting\", this.onBuffer);\n    player.addEventListener(\"playing\", this.onBufferEnd);\n    player.addEventListener(\"pause\", this.onPause);\n    player.addEventListener(\"seeked\", this.onSeek);\n    player.addEventListener(\"ended\", this.onEnded);\n    player.addEventListener(\"error\", this.onError);\n    player.addEventListener(\"ratechange\", this.onPlayBackRateChange);\n    player.addEventListener(\"enterpictureinpicture\", this.onEnablePIP);\n    player.addEventListener(\"leavepictureinpicture\", this.onDisablePIP);\n    player.addEventListener(\"webkitpresentationmodechanged\", this.onPresentationModeChange);\n    player.addEventListener(\"canplay\", this.onReady);\n    if (playsinline) {\n      player.setAttribute(\"playsinline\", \"\");\n    }\n  }\n  removeListeners(player) {\n    player.removeEventListener(\"canplay\", this.onReady);\n    player.removeEventListener(\"play\", this.onPlay);\n    player.removeEventListener(\"waiting\", this.onBuffer);\n    player.removeEventListener(\"playing\", this.onBufferEnd);\n    player.removeEventListener(\"pause\", this.onPause);\n    player.removeEventListener(\"seeked\", this.onSeek);\n    player.removeEventListener(\"ended\", this.onEnded);\n    player.removeEventListener(\"error\", this.onError);\n    player.removeEventListener(\"ratechange\", this.onPlayBackRateChange);\n    player.removeEventListener(\"enterpictureinpicture\", this.onEnablePIP);\n    player.removeEventListener(\"leavepictureinpicture\", this.onDisablePIP);\n    player.removeEventListener(\"canplay\", this.onReady);\n  }\n  async load(url) {\n    var _a;\n    const { onError, config } = this.props;\n    if (!((_a = globalThis.customElements) == null ? void 0 : _a.get(\"mux-player\"))) {\n      try {\n        const sdkUrl = SDK_URL.replace(\"VERSION\", config.version);\n        await import(\n          /* webpackIgnore: true */\n          `${sdkUrl}`\n        );\n        this.props.onLoaded();\n      } catch (error) {\n        onError(error);\n      }\n    }\n    const [, id] = url.match(import_patterns.MATCH_URL_MUX);\n    this.player.playbackId = id;\n  }\n  play() {\n    const promise = this.player.play();\n    if (promise) {\n      promise.catch(this.props.onError);\n    }\n  }\n  pause() {\n    this.player.pause();\n  }\n  stop() {\n    this.player.playbackId = null;\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.player.currentTime = seconds;\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.player.volume = fraction;\n  }\n  enablePIP() {\n    if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {\n      this.player.requestPictureInPicture();\n    }\n  }\n  disablePIP() {\n    if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {\n      document.exitPictureInPicture();\n    }\n  }\n  setPlaybackRate(rate) {\n    try {\n      this.player.playbackRate = rate;\n    } catch (error) {\n      this.props.onError(error);\n    }\n  }\n  getDuration() {\n    if (!this.player)\n      return null;\n    const { duration, seekable } = this.player;\n    if (duration === Infinity && seekable.length > 0) {\n      return seekable.end(seekable.length - 1);\n    }\n    return duration;\n  }\n  getCurrentTime() {\n    if (!this.player)\n      return null;\n    return this.player.currentTime;\n  }\n  getSecondsLoaded() {\n    if (!this.player)\n      return null;\n    const { buffered } = this.player;\n    if (buffered.length === 0) {\n      return 0;\n    }\n    const end = buffered.end(buffered.length - 1);\n    const duration = this.getDuration();\n    if (end > duration) {\n      return duration;\n    }\n    return end;\n  }\n  getPlaybackId(url) {\n    const [, id] = url.match(import_patterns.MATCH_URL_MUX);\n    return id;\n  }\n  render() {\n    const { url, playing, loop, controls, muted, config, width, height } = this.props;\n    const style = {\n      width: width === \"auto\" ? width : \"100%\",\n      height: height === \"auto\" ? height : \"100%\"\n    };\n    if (controls === false) {\n      style[\"--controls\"] = \"none\";\n    }\n    return /* @__PURE__ */ import_react.default.createElement(\n      \"mux-player\",\n      {\n        ref: this.ref,\n        \"playback-id\": this.getPlaybackId(url),\n        style,\n        preload: \"auto\",\n        autoPlay: playing || void 0,\n        muted: muted ? \"\" : void 0,\n        loop: loop ? \"\" : void 0,\n        ...config.attributes\n      }\n    );\n  }\n}\n__publicField(Mux, \"displayName\", \"Mux\");\n__publicField(Mux, \"canPlay\", import_patterns.canPlay.mux);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvTXV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSw2REFBNkQ7QUFDM0k7QUFDQTtBQUNBLDhCQUE4QixrQ0FBa0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0RkFBNEY7QUFDekg7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLDhCQUE4QjtBQUN2RztBQUNBO0FBQ0Esb0RBQW9ELGtCQUFrQixhQUFhO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMkJBQTJCLG1CQUFPLENBQUMsbUZBQU87QUFDMUMsc0JBQXNCLG1CQUFPLENBQUMsb0ZBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0JBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZEQUE2RDtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9saWIvcGxheWVycy9NdXguanM/MjlkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9fZ2V0UHJvdG9PZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9FU00gPSAobW9kLCBpc05vZGVNb2RlLCB0YXJnZXQpID0+ICh0YXJnZXQgPSBtb2QgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2QpKSA6IHt9LCBfX2NvcHlQcm9wcyhcbiAgLy8gSWYgdGhlIGltcG9ydGVyIGlzIGluIG5vZGUgY29tcGF0aWJpbGl0eSBtb2RlIG9yIHRoaXMgaXMgbm90IGFuIEVTTVxuICAvLyBmaWxlIHRoYXQgaGFzIGJlZW4gY29udmVydGVkIHRvIGEgQ29tbW9uSlMgZmlsZSB1c2luZyBhIEJhYmVsLVxuICAvLyBjb21wYXRpYmxlIHRyYW5zZm9ybSAoaS5lLiBcIl9fZXNNb2R1bGVcIiBoYXMgbm90IGJlZW4gc2V0KSwgdGhlbiBzZXRcbiAgLy8gXCJkZWZhdWx0XCIgdG8gdGhlIENvbW1vbkpTIFwibW9kdWxlLmV4cG9ydHNcIiBmb3Igbm9kZSBjb21wYXRpYmlsaXR5LlxuICBpc05vZGVNb2RlIHx8ICFtb2QgfHwgIW1vZC5fX2VzTW9kdWxlID8gX19kZWZQcm9wKHRhcmdldCwgXCJkZWZhdWx0XCIsIHsgdmFsdWU6IG1vZCwgZW51bWVyYWJsZTogdHJ1ZSB9KSA6IHRhcmdldCxcbiAgbW9kXG4pKTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xudmFyIF9fcHVibGljRmllbGQgPSAob2JqLCBrZXksIHZhbHVlKSA9PiB7XG4gIF9fZGVmTm9ybWFsUHJvcChvYmosIHR5cGVvZiBrZXkgIT09IFwic3ltYm9sXCIgPyBrZXkgKyBcIlwiIDoga2V5LCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG52YXIgTXV4X2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KE11eF9leHBvcnRzLCB7XG4gIGRlZmF1bHQ6ICgpID0+IE11eFxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhNdXhfZXhwb3J0cyk7XG52YXIgaW1wb3J0X3JlYWN0ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGltcG9ydF9wYXR0ZXJucyA9IHJlcXVpcmUoXCIuLi9wYXR0ZXJuc1wiKTtcbmNvbnN0IFNES19VUkwgPSBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQG11eC9tdXgtcGxheWVyQFZFUlNJT04vZGlzdC9tdXgtcGxheWVyLm1qc1wiO1xuY2xhc3MgTXV4IGV4dGVuZHMgaW1wb3J0X3JlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgLy8gUHJveHkgbWV0aG9kcyB0byBwcmV2ZW50IGxpc3RlbmVyIGxlYWtzXG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uUmVhZHlcIiwgKC4uLmFyZ3MpID0+IHRoaXMucHJvcHMub25SZWFkeSguLi5hcmdzKSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uUGxheVwiLCAoLi4uYXJncykgPT4gdGhpcy5wcm9wcy5vblBsYXkoLi4uYXJncykpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvbkJ1ZmZlclwiLCAoLi4uYXJncykgPT4gdGhpcy5wcm9wcy5vbkJ1ZmZlciguLi5hcmdzKSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uQnVmZmVyRW5kXCIsICguLi5hcmdzKSA9PiB0aGlzLnByb3BzLm9uQnVmZmVyRW5kKC4uLmFyZ3MpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25QYXVzZVwiLCAoLi4uYXJncykgPT4gdGhpcy5wcm9wcy5vblBhdXNlKC4uLmFyZ3MpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25FbmRlZFwiLCAoLi4uYXJncykgPT4gdGhpcy5wcm9wcy5vbkVuZGVkKC4uLmFyZ3MpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25FcnJvclwiLCAoLi4uYXJncykgPT4gdGhpcy5wcm9wcy5vbkVycm9yKC4uLmFyZ3MpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25QbGF5QmFja1JhdGVDaGFuZ2VcIiwgKGV2ZW50KSA9PiB0aGlzLnByb3BzLm9uUGxheWJhY2tSYXRlQ2hhbmdlKGV2ZW50LnRhcmdldC5wbGF5YmFja1JhdGUpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25FbmFibGVQSVBcIiwgKC4uLmFyZ3MpID0+IHRoaXMucHJvcHMub25FbmFibGVQSVAoLi4uYXJncykpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvblNlZWtcIiwgKGUpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25TZWVrKGUudGFyZ2V0LmN1cnJlbnRUaW1lKTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25EdXJhdGlvbkNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZ2V0RHVyYXRpb24oKTtcbiAgICAgIHRoaXMucHJvcHMub25EdXJhdGlvbihkdXJhdGlvbik7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm11dGVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5wbGF5ZXIubXV0ZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJ1bm11dGVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5wbGF5ZXIubXV0ZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwicmVmXCIsIChwbGF5ZXIpID0+IHtcbiAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25Nb3VudCAmJiB0aGlzLnByb3BzLm9uTW91bnQodGhpcyk7XG4gICAgdGhpcy5hZGRMaXN0ZW5lcnModGhpcy5wbGF5ZXIpO1xuICAgIGNvbnN0IHBsYXliYWNrSWQgPSB0aGlzLmdldFBsYXliYWNrSWQodGhpcy5wcm9wcy51cmwpO1xuICAgIGlmIChwbGF5YmFja0lkKSB7XG4gICAgICB0aGlzLnBsYXllci5wbGF5YmFja0lkID0gcGxheWJhY2tJZDtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wbGF5ZXIucGxheWJhY2tJZCA9IG51bGw7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnModGhpcy5wbGF5ZXIpO1xuICB9XG4gIGFkZExpc3RlbmVycyhwbGF5ZXIpIHtcbiAgICBjb25zdCB7IHBsYXlzaW5saW5lIH0gPSB0aGlzLnByb3BzO1xuICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKFwicGxheVwiLCB0aGlzLm9uUGxheSk7XG4gICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ3YWl0aW5nXCIsIHRoaXMub25CdWZmZXIpO1xuICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKFwicGxheWluZ1wiLCB0aGlzLm9uQnVmZmVyRW5kKTtcbiAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBhdXNlXCIsIHRoaXMub25QYXVzZSk7XG4gICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzZWVrZWRcIiwgdGhpcy5vblNlZWspO1xuICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgdGhpcy5vbkVuZGVkKTtcbiAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIHRoaXMub25FcnJvcik7XG4gICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJyYXRlY2hhbmdlXCIsIHRoaXMub25QbGF5QmFja1JhdGVDaGFuZ2UpO1xuICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKFwiZW50ZXJwaWN0dXJlaW5waWN0dXJlXCIsIHRoaXMub25FbmFibGVQSVApO1xuICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKFwibGVhdmVwaWN0dXJlaW5waWN0dXJlXCIsIHRoaXMub25EaXNhYmxlUElQKTtcbiAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcIndlYmtpdHByZXNlbnRhdGlvbm1vZGVjaGFuZ2VkXCIsIHRoaXMub25QcmVzZW50YXRpb25Nb2RlQ2hhbmdlKTtcbiAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIiwgdGhpcy5vblJlYWR5KTtcbiAgICBpZiAocGxheXNpbmxpbmUpIHtcbiAgICAgIHBsYXllci5zZXRBdHRyaWJ1dGUoXCJwbGF5c2lubGluZVwiLCBcIlwiKTtcbiAgICB9XG4gIH1cbiAgcmVtb3ZlTGlzdGVuZXJzKHBsYXllcikge1xuICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2FucGxheVwiLCB0aGlzLm9uUmVhZHkpO1xuICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKFwicGxheVwiLCB0aGlzLm9uUGxheSk7XG4gICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3YWl0aW5nXCIsIHRoaXMub25CdWZmZXIpO1xuICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKFwicGxheWluZ1wiLCB0aGlzLm9uQnVmZmVyRW5kKTtcbiAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBhdXNlXCIsIHRoaXMub25QYXVzZSk7XG4gICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzZWVrZWRcIiwgdGhpcy5vblNlZWspO1xuICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgdGhpcy5vbkVuZGVkKTtcbiAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIHRoaXMub25FcnJvcik7XG4gICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyYXRlY2hhbmdlXCIsIHRoaXMub25QbGF5QmFja1JhdGVDaGFuZ2UpO1xuICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZW50ZXJwaWN0dXJlaW5waWN0dXJlXCIsIHRoaXMub25FbmFibGVQSVApO1xuICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKFwibGVhdmVwaWN0dXJlaW5waWN0dXJlXCIsIHRoaXMub25EaXNhYmxlUElQKTtcbiAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIiwgdGhpcy5vblJlYWR5KTtcbiAgfVxuICBhc3luYyBsb2FkKHVybCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB7IG9uRXJyb3IsIGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoISgoX2EgPSBnbG9iYWxUaGlzLmN1c3RvbUVsZW1lbnRzKSA9PSBudWxsID8gdm9pZCAwIDogX2EuZ2V0KFwibXV4LXBsYXllclwiKSkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNka1VybCA9IFNES19VUkwucmVwbGFjZShcIlZFUlNJT05cIiwgY29uZmlnLnZlcnNpb24pO1xuICAgICAgICBhd2FpdCBpbXBvcnQoXG4gICAgICAgICAgLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqL1xuICAgICAgICAgIGAke3Nka1VybH1gXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucHJvcHMub25Mb2FkZWQoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbLCBpZF0gPSB1cmwubWF0Y2goaW1wb3J0X3BhdHRlcm5zLk1BVENIX1VSTF9NVVgpO1xuICAgIHRoaXMucGxheWVyLnBsYXliYWNrSWQgPSBpZDtcbiAgfVxuICBwbGF5KCkge1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnBsYXllci5wbGF5KCk7XG4gICAgaWYgKHByb21pc2UpIHtcbiAgICAgIHByb21pc2UuY2F0Y2godGhpcy5wcm9wcy5vbkVycm9yKTtcbiAgICB9XG4gIH1cbiAgcGF1c2UoKSB7XG4gICAgdGhpcy5wbGF5ZXIucGF1c2UoKTtcbiAgfVxuICBzdG9wKCkge1xuICAgIHRoaXMucGxheWVyLnBsYXliYWNrSWQgPSBudWxsO1xuICB9XG4gIHNlZWtUbyhzZWNvbmRzLCBrZWVwUGxheWluZyA9IHRydWUpIHtcbiAgICB0aGlzLnBsYXllci5jdXJyZW50VGltZSA9IHNlY29uZHM7XG4gICAgaWYgKCFrZWVwUGxheWluZykge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgIH1cbiAgfVxuICBzZXRWb2x1bWUoZnJhY3Rpb24pIHtcbiAgICB0aGlzLnBsYXllci52b2x1bWUgPSBmcmFjdGlvbjtcbiAgfVxuICBlbmFibGVQSVAoKSB7XG4gICAgaWYgKHRoaXMucGxheWVyLnJlcXVlc3RQaWN0dXJlSW5QaWN0dXJlICYmIGRvY3VtZW50LnBpY3R1cmVJblBpY3R1cmVFbGVtZW50ICE9PSB0aGlzLnBsYXllcikge1xuICAgICAgdGhpcy5wbGF5ZXIucmVxdWVzdFBpY3R1cmVJblBpY3R1cmUoKTtcbiAgICB9XG4gIH1cbiAgZGlzYWJsZVBJUCgpIHtcbiAgICBpZiAoZG9jdW1lbnQuZXhpdFBpY3R1cmVJblBpY3R1cmUgJiYgZG9jdW1lbnQucGljdHVyZUluUGljdHVyZUVsZW1lbnQgPT09IHRoaXMucGxheWVyKSB7XG4gICAgICBkb2N1bWVudC5leGl0UGljdHVyZUluUGljdHVyZSgpO1xuICAgIH1cbiAgfVxuICBzZXRQbGF5YmFja1JhdGUocmF0ZSkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnBsYXllci5wbGF5YmFja1JhdGUgPSByYXRlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuICBnZXREdXJhdGlvbigpIHtcbiAgICBpZiAoIXRoaXMucGxheWVyKVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgeyBkdXJhdGlvbiwgc2Vla2FibGUgfSA9IHRoaXMucGxheWVyO1xuICAgIGlmIChkdXJhdGlvbiA9PT0gSW5maW5pdHkgJiYgc2Vla2FibGUubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHNlZWthYmxlLmVuZChzZWVrYWJsZS5sZW5ndGggLSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGR1cmF0aW9uO1xuICB9XG4gIGdldEN1cnJlbnRUaW1lKCkge1xuICAgIGlmICghdGhpcy5wbGF5ZXIpXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIuY3VycmVudFRpbWU7XG4gIH1cbiAgZ2V0U2Vjb25kc0xvYWRlZCgpIHtcbiAgICBpZiAoIXRoaXMucGxheWVyKVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgeyBidWZmZXJlZCB9ID0gdGhpcy5wbGF5ZXI7XG4gICAgaWYgKGJ1ZmZlcmVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IGVuZCA9IGJ1ZmZlcmVkLmVuZChidWZmZXJlZC5sZW5ndGggLSAxKTtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZ2V0RHVyYXRpb24oKTtcbiAgICBpZiAoZW5kID4gZHVyYXRpb24pIHtcbiAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGVuZDtcbiAgfVxuICBnZXRQbGF5YmFja0lkKHVybCkge1xuICAgIGNvbnN0IFssIGlkXSA9IHVybC5tYXRjaChpbXBvcnRfcGF0dGVybnMuTUFUQ0hfVVJMX01VWCk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVybCwgcGxheWluZywgbG9vcCwgY29udHJvbHMsIG11dGVkLCBjb25maWcsIHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICB3aWR0aDogd2lkdGggPT09IFwiYXV0b1wiID8gd2lkdGggOiBcIjEwMCVcIixcbiAgICAgIGhlaWdodDogaGVpZ2h0ID09PSBcImF1dG9cIiA/IGhlaWdodCA6IFwiMTAwJVwiXG4gICAgfTtcbiAgICBpZiAoY29udHJvbHMgPT09IGZhbHNlKSB7XG4gICAgICBzdHlsZVtcIi0tY29udHJvbHNcIl0gPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJtdXgtcGxheWVyXCIsXG4gICAgICB7XG4gICAgICAgIHJlZjogdGhpcy5yZWYsXG4gICAgICAgIFwicGxheWJhY2staWRcIjogdGhpcy5nZXRQbGF5YmFja0lkKHVybCksXG4gICAgICAgIHN0eWxlLFxuICAgICAgICBwcmVsb2FkOiBcImF1dG9cIixcbiAgICAgICAgYXV0b1BsYXk6IHBsYXlpbmcgfHwgdm9pZCAwLFxuICAgICAgICBtdXRlZDogbXV0ZWQgPyBcIlwiIDogdm9pZCAwLFxuICAgICAgICBsb29wOiBsb29wID8gXCJcIiA6IHZvaWQgMCxcbiAgICAgICAgLi4uY29uZmlnLmF0dHJpYnV0ZXNcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG5fX3B1YmxpY0ZpZWxkKE11eCwgXCJkaXNwbGF5TmFtZVwiLCBcIk11eFwiKTtcbl9fcHVibGljRmllbGQoTXV4LCBcImNhblBsYXlcIiwgaW1wb3J0X3BhdHRlcm5zLmNhblBsYXkubXV4KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-player/lib/players/Mux.js\n"));

/***/ })

}]);