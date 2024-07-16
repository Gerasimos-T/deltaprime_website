/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerPreview"],{

/***/ "(app-pages-browser)/./node_modules/react-player/lib/Preview.js":
/*!**************************************************!*\
  !*** ./node_modules/react-player/lib/Preview.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Preview_exports = {};\n__export(Preview_exports, {\n  default: () => Preview\n});\nmodule.exports = __toCommonJS(Preview_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\"));\nconst ICON_SIZE = \"64px\";\nconst cache = {};\nclass Preview extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"mounted\", false);\n    __publicField(this, \"state\", {\n      image: null\n    });\n    __publicField(this, \"handleKeyPress\", (e) => {\n      if (e.key === \"Enter\" || e.key === \" \") {\n        this.props.onClick();\n      }\n    });\n  }\n  componentDidMount() {\n    this.mounted = true;\n    this.fetchImage(this.props);\n  }\n  componentDidUpdate(prevProps) {\n    const { url, light } = this.props;\n    if (prevProps.url !== url || prevProps.light !== light) {\n      this.fetchImage(this.props);\n    }\n  }\n  componentWillUnmount() {\n    this.mounted = false;\n  }\n  fetchImage({ url, light, oEmbedUrl }) {\n    if (import_react.default.isValidElement(light)) {\n      return;\n    }\n    if (typeof light === \"string\") {\n      this.setState({ image: light });\n      return;\n    }\n    if (cache[url]) {\n      this.setState({ image: cache[url] });\n      return;\n    }\n    this.setState({ image: null });\n    return window.fetch(oEmbedUrl.replace(\"{url}\", url)).then((response) => response.json()).then((data) => {\n      if (data.thumbnail_url && this.mounted) {\n        const image = data.thumbnail_url.replace(\"height=100\", \"height=480\").replace(\"-d_295x166\", \"-d_640\");\n        this.setState({ image });\n        cache[url] = image;\n      }\n    });\n  }\n  render() {\n    const { light, onClick, playIcon, previewTabIndex, previewAriaLabel } = this.props;\n    const { image } = this.state;\n    const isElement = import_react.default.isValidElement(light);\n    const flexCenter = {\n      display: \"flex\",\n      alignItems: \"center\",\n      justifyContent: \"center\"\n    };\n    const styles = {\n      preview: {\n        width: \"100%\",\n        height: \"100%\",\n        backgroundImage: image && !isElement ? `url(${image})` : void 0,\n        backgroundSize: \"cover\",\n        backgroundPosition: \"center\",\n        cursor: \"pointer\",\n        ...flexCenter\n      },\n      shadow: {\n        background: \"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)\",\n        borderRadius: ICON_SIZE,\n        width: ICON_SIZE,\n        height: ICON_SIZE,\n        position: isElement ? \"absolute\" : void 0,\n        ...flexCenter\n      },\n      playIcon: {\n        borderStyle: \"solid\",\n        borderWidth: \"16px 0 16px 26px\",\n        borderColor: \"transparent transparent transparent white\",\n        marginLeft: \"7px\"\n      }\n    };\n    const defaultPlayIcon = /* @__PURE__ */ import_react.default.createElement(\"div\", { style: styles.shadow, className: \"react-player__shadow\" }, /* @__PURE__ */ import_react.default.createElement(\"div\", { style: styles.playIcon, className: \"react-player__play-icon\" }));\n    return /* @__PURE__ */ import_react.default.createElement(\n      \"div\",\n      {\n        style: styles.preview,\n        className: \"react-player__preview\",\n        onClick,\n        tabIndex: previewTabIndex,\n        onKeyPress: this.handleKeyPress,\n        ...previewAriaLabel ? { \"aria-label\": previewAriaLabel } : {}\n      },\n      isElement ? light : null,\n      playIcon || defaultPlayIcon\n    );\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL1ByZXZpZXcuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLDZEQUE2RDtBQUMzSTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxtR0FBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsOEJBQThCO0FBQ3ZHO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyxtRkFBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdUJBQXVCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGNBQWM7QUFDcEM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakMsNENBQTRDLElBQUk7QUFDaEQ7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVksOERBQThEO0FBQzFFLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxNQUFNO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGLHlEQUF5RCw4REFBOEQsOERBQThEO0FBQzdRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUNBQWlDO0FBQ2pFLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL1ByZXZpZXcuanM/NGIyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9fZ2V0UHJvdG9PZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9FU00gPSAobW9kLCBpc05vZGVNb2RlLCB0YXJnZXQpID0+ICh0YXJnZXQgPSBtb2QgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2QpKSA6IHt9LCBfX2NvcHlQcm9wcyhcbiAgLy8gSWYgdGhlIGltcG9ydGVyIGlzIGluIG5vZGUgY29tcGF0aWJpbGl0eSBtb2RlIG9yIHRoaXMgaXMgbm90IGFuIEVTTVxuICAvLyBmaWxlIHRoYXQgaGFzIGJlZW4gY29udmVydGVkIHRvIGEgQ29tbW9uSlMgZmlsZSB1c2luZyBhIEJhYmVsLVxuICAvLyBjb21wYXRpYmxlIHRyYW5zZm9ybSAoaS5lLiBcIl9fZXNNb2R1bGVcIiBoYXMgbm90IGJlZW4gc2V0KSwgdGhlbiBzZXRcbiAgLy8gXCJkZWZhdWx0XCIgdG8gdGhlIENvbW1vbkpTIFwibW9kdWxlLmV4cG9ydHNcIiBmb3Igbm9kZSBjb21wYXRpYmlsaXR5LlxuICBpc05vZGVNb2RlIHx8ICFtb2QgfHwgIW1vZC5fX2VzTW9kdWxlID8gX19kZWZQcm9wKHRhcmdldCwgXCJkZWZhdWx0XCIsIHsgdmFsdWU6IG1vZCwgZW51bWVyYWJsZTogdHJ1ZSB9KSA6IHRhcmdldCxcbiAgbW9kXG4pKTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xudmFyIF9fcHVibGljRmllbGQgPSAob2JqLCBrZXksIHZhbHVlKSA9PiB7XG4gIF9fZGVmTm9ybWFsUHJvcChvYmosIHR5cGVvZiBrZXkgIT09IFwic3ltYm9sXCIgPyBrZXkgKyBcIlwiIDoga2V5LCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG52YXIgUHJldmlld19leHBvcnRzID0ge307XG5fX2V4cG9ydChQcmV2aWV3X2V4cG9ydHMsIHtcbiAgZGVmYXVsdDogKCkgPT4gUHJldmlld1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhQcmV2aWV3X2V4cG9ydHMpO1xudmFyIGltcG9ydF9yZWFjdCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IElDT05fU0laRSA9IFwiNjRweFwiO1xuY29uc3QgY2FjaGUgPSB7fTtcbmNsYXNzIFByZXZpZXcgZXh0ZW5kcyBpbXBvcnRfcmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwibW91bnRlZFwiLCBmYWxzZSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInN0YXRlXCIsIHtcbiAgICAgIGltYWdlOiBudWxsXG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImhhbmRsZUtleVByZXNzXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgICB0aGlzLmZldGNoSW1hZ2UodGhpcy5wcm9wcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHsgdXJsLCBsaWdodCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAocHJldlByb3BzLnVybCAhPT0gdXJsIHx8IHByZXZQcm9wcy5saWdodCAhPT0gbGlnaHQpIHtcbiAgICAgIHRoaXMuZmV0Y2hJbWFnZSh0aGlzLnByb3BzKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG4gIH1cbiAgZmV0Y2hJbWFnZSh7IHVybCwgbGlnaHQsIG9FbWJlZFVybCB9KSB7XG4gICAgaWYgKGltcG9ydF9yZWFjdC5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KGxpZ2h0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGxpZ2h0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IGxpZ2h0IH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2FjaGVbdXJsXSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlOiBjYWNoZVt1cmxdIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IG51bGwgfSk7XG4gICAgcmV0dXJuIHdpbmRvdy5mZXRjaChvRW1iZWRVcmwucmVwbGFjZShcInt1cmx9XCIsIHVybCkpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLnRodW1ibmFpbF91cmwgJiYgdGhpcy5tb3VudGVkKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZGF0YS50aHVtYm5haWxfdXJsLnJlcGxhY2UoXCJoZWlnaHQ9MTAwXCIsIFwiaGVpZ2h0PTQ4MFwiKS5yZXBsYWNlKFwiLWRfMjk1eDE2NlwiLCBcIi1kXzY0MFwiKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlIH0pO1xuICAgICAgICBjYWNoZVt1cmxdID0gaW1hZ2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGlnaHQsIG9uQ2xpY2ssIHBsYXlJY29uLCBwcmV2aWV3VGFiSW5kZXgsIHByZXZpZXdBcmlhTGFiZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpbWFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBpc0VsZW1lbnQgPSBpbXBvcnRfcmVhY3QuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChsaWdodCk7XG4gICAgY29uc3QgZmxleENlbnRlciA9IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXG4gICAgfTtcbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICBwcmV2aWV3OiB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBpbWFnZSAmJiAhaXNFbGVtZW50ID8gYHVybCgke2ltYWdlfSlgIDogdm9pZCAwLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgIC4uLmZsZXhDZW50ZXJcbiAgICAgIH0sXG4gICAgICBzaGFkb3c6IHtcbiAgICAgICAgYmFja2dyb3VuZDogXCJyYWRpYWwtZ3JhZGllbnQocmdiKDAsIDAsIDAsIDAuMyksIHJnYmEoMCwgMCwgMCwgMCkgNjAlKVwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IElDT05fU0laRSxcbiAgICAgICAgd2lkdGg6IElDT05fU0laRSxcbiAgICAgICAgaGVpZ2h0OiBJQ09OX1NJWkUsXG4gICAgICAgIHBvc2l0aW9uOiBpc0VsZW1lbnQgPyBcImFic29sdXRlXCIgOiB2b2lkIDAsXG4gICAgICAgIC4uLmZsZXhDZW50ZXJcbiAgICAgIH0sXG4gICAgICBwbGF5SWNvbjoge1xuICAgICAgICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuICAgICAgICBib3JkZXJXaWR0aDogXCIxNnB4IDAgMTZweCAyNnB4XCIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHdoaXRlXCIsXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiN3B4XCJcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGRlZmF1bHRQbGF5SWNvbiA9IC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5zaGFkb3csIGNsYXNzTmFtZTogXCJyZWFjdC1wbGF5ZXJfX3NoYWRvd1wiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5wbGF5SWNvbiwgY2xhc3NOYW1lOiBcInJlYWN0LXBsYXllcl9fcGxheS1pY29uXCIgfSkpO1xuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0eWxlOiBzdHlsZXMucHJldmlldyxcbiAgICAgICAgY2xhc3NOYW1lOiBcInJlYWN0LXBsYXllcl9fcHJldmlld1wiLFxuICAgICAgICBvbkNsaWNrLFxuICAgICAgICB0YWJJbmRleDogcHJldmlld1RhYkluZGV4LFxuICAgICAgICBvbktleVByZXNzOiB0aGlzLmhhbmRsZUtleVByZXNzLFxuICAgICAgICAuLi5wcmV2aWV3QXJpYUxhYmVsID8geyBcImFyaWEtbGFiZWxcIjogcHJldmlld0FyaWFMYWJlbCB9IDoge31cbiAgICAgIH0sXG4gICAgICBpc0VsZW1lbnQgPyBsaWdodCA6IG51bGwsXG4gICAgICBwbGF5SWNvbiB8fCBkZWZhdWx0UGxheUljb25cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-player/lib/Preview.js\n"));

/***/ })

}]);