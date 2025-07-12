// src/Paper.tsx
import styled from "styled-components";
var Paper = styled.div`
    max-width: ${(props) => {
  var _a;
  return (_a = props.size) != null ? _a : 80;
}}mm;
    width: 100%;
`;
var Text = styled.div`
    text-align: ${(props) => {
  var _a;
  return (_a = props.align) != null ? _a : "left";
}};
    font-weight: ${(props) => props.bold ? "bold" : "normal"};
    text-decoration: ${(props) => props.underlined ? "underline" : "unset"};
    font-family: monospace;
`;
var Line = styled.div`
    border: 0.5px dashed gray;
    width: 100%;
    height: 0px;
    margin-bottom: 5px;
`;
var Dot = styled.hr`
    border: 0.5px ${(props) => {
  var _a;
  return (_a = props.type) != null ? _a : "dashed";
}} gray;
    margin-top: ${(props) => props.vmar ? props.vmar[0] : 0}px;
    margin-bottom: ${(props) => props.vmar ? props.vmar[1] : 0}px;
`;
var RowText = styled.div`
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
var DataTable = styled.table`
    border-collapse: collapse;
    width: 100%;
`;
var TableRow = styled.tr`
    text-align: ${(props) => {
  var _a;
  return (_a = props.align) != null ? _a : "left";
}};
`;
var TableHead = styled.th`
    border: 1px dashed gray;
    border-left-width: 0px;
    border-right-width: 0px;
    font-family: monospace;
    padding: 0px 5px;
`;
var TableCell = styled.td`
    text-align: ${(props) => {
  var _a;
  return (_a = props.align) != null ? _a : "left";
}};
    font-family: monospace;
`;
export {
  DataTable,
  Dot,
  Line,
  Paper,
  RowText,
  TableCell,
  TableHead,
  TableRow,
  Text
};
//# sourceMappingURL=Paper.js.map