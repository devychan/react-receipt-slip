"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCell = exports.TableHead = exports.TableRow = exports.DataTable = exports.RowText = exports.Dot = exports.Line = exports.Text = exports.Paper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Paper = styled_components_1.default.div `
    max-width: ${(props) => { var _a; return (_a = props.size) !== null && _a !== void 0 ? _a : 80; }}mm;
    width: 100%;
`;
exports.Text = styled_components_1.default.div `
    text-align: ${(props) => { var _a; return (_a = props.align) !== null && _a !== void 0 ? _a : 'left'; }};
    font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
    text-decoration: ${(props) => props.underlined ? 'underline' : 'unset'};
    font-family: monospace;
`;
exports.Line = styled_components_1.default.div `
    border: 0.5px dashed gray;
    width: 100%;
    height: 0px;
    margin-bottom: 5px;
`;
exports.Dot = styled_components_1.default.hr `
    border: 0.5px ${(props) => { var _a; return (_a = props.type) !== null && _a !== void 0 ? _a : 'dashed'; }} gray;
    margin-top: ${(props) => props.vmar ? props.vmar[0] : 0}px;
    margin-bottom: ${(props) => props.vmar ? props.vmar[1] : 0}px;
`;
exports.RowText = styled_components_1.default.div `
    display: flex;
    align-items: ${(props) => {
    if (props.valign === "bottom") {
        return 'flex-end';
    }
    else if (props.valign === "top") {
        return 'flex-start';
    }
    else {
        return 'center';
    }
}};
    justify-content: space-between;
    gap: ${(props) => { var _a; return (_a = props.gap) !== null && _a !== void 0 ? _a : 0; }}px;
    padding-top: ${(props) => { var _a; return (_a = props.pady) !== null && _a !== void 0 ? _a : 0; }}px;
    padding-right: ${(props) => { var _a; return (_a = props.padx) !== null && _a !== void 0 ? _a : 0; }}px;
    padding-bottom: ${(props) => { var _a; return (_a = props.pady) !== null && _a !== void 0 ? _a : 0; }}px;
    padding-left: ${(props) => { var _a; return (_a = props.padx) !== null && _a !== void 0 ? _a : 0; }}px;
`;
exports.DataTable = styled_components_1.default.table `
    border-collapse: collapse;
    width: 100%;
`;
exports.TableRow = styled_components_1.default.tr `
    text-align: ${(props) => { var _a; return (_a = props.align) !== null && _a !== void 0 ? _a : 'left'; }};
`;
exports.TableHead = styled_components_1.default.th `
    border: 1px dashed gray;
    border-left-width: 0px;
    border-right-width: 0px;
    font-family: monospace;
    padding: 0px 5px;
`;
exports.TableCell = styled_components_1.default.td `
    text-align: ${(props) => { var _a; return (_a = props.align) !== null && _a !== void 0 ? _a : 'left'; }};
    font-family: monospace;
`;
