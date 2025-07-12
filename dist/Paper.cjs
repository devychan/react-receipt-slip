"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/Paper.tsx
var Paper_exports = {};
__export(Paper_exports, {
  DataTable: () => DataTable,
  Dot: () => Dot,
  Line: () => Line,
  Paper: () => Paper,
  RowText: () => RowText,
  TableCell: () => TableCell,
  TableHead: () => TableHead,
  TableRow: () => TableRow,
  Text: () => Text
});
module.exports = __toCommonJS(Paper_exports);
var import_styled_components = __toESM(require("styled-components"), 1);
var Paper = import_styled_components.default.div`
    max-width: ${(props) => {
  var _a;
  return (_a = props.size) != null ? _a : 80;
}}mm;
    width: 100%;
`;
var Text = import_styled_components.default.div`
    text-align: ${(props) => {
  var _a;
  return (_a = props.align) != null ? _a : "left";
}};
    font-weight: ${(props) => props.bold ? "bold" : "normal"};
    text-decoration: ${(props) => props.underlined ? "underline" : "unset"};
    font-family: monospace;
`;
var Line = import_styled_components.default.div`
    border: 0.5px dashed gray;
    width: 100%;
    height: 0px;
    margin-bottom: 5px;
`;
var Dot = import_styled_components.default.hr`
    border: 0.5px ${(props) => {
  var _a;
  return (_a = props.type) != null ? _a : "dashed";
}} gray;
    margin-top: ${(props) => props.vmar ? props.vmar[0] : 0}px;
    margin-bottom: ${(props) => props.vmar ? props.vmar[1] : 0}px;
`;
var RowText = import_styled_components.default.div`
    display: flex;
    align-items: ${(props) => {
  if (props.valign === "bottom") {
    return "flex-end";
  } else if (props.valign === "top") {
    return "flex-start";
  } else {
    return "center";
  }
}};
    justify-content: space-between;
    gap: ${(props) => {
  var _a;
  return (_a = props.gap) != null ? _a : 0;
}}px;
    padding-top: ${(props) => {
  var _a;
  return (_a = props.pady) != null ? _a : 0;
}}px;
    padding-right: ${(props) => {
  var _a;
  return (_a = props.padx) != null ? _a : 0;
}}px;
    padding-bottom: ${(props) => {
  var _a;
  return (_a = props.pady) != null ? _a : 0;
}}px;
    padding-left: ${(props) => {
  var _a;
  return (_a = props.padx) != null ? _a : 0;
}}px;
`;
var DataTable = import_styled_components.default.table`
    border-collapse: collapse;
    width: 100%;
`;
var TableRow = import_styled_components.default.tr`
    text-align: ${(props) => {
  var _a;
  return (_a = props.align) != null ? _a : "left";
}};
`;
var TableHead = import_styled_components.default.th`
    border: 1px dashed gray;
    border-left-width: 0px;
    border-right-width: 0px;
    font-family: monospace;
    padding: 0px 5px;
`;
var TableCell = import_styled_components.default.td`
    text-align: ${(props) => {
  var _a;
  return (_a = props.align) != null ? _a : "left";
}};
    font-family: monospace;
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DataTable,
  Dot,
  Line,
  Paper,
  RowText,
  TableCell,
  TableHead,
  TableRow,
  Text
});
//# sourceMappingURL=Paper.cjs.map