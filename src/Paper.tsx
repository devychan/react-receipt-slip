import styled from 'styled-components'
import { DataTableProps, DotProps, LineProps, PaperProps, RowTextProps, SpaceProps, TableCellProps, TableHeadProps, TableRowProps, TextProps } from '../types'

export const Paper = styled.div<PaperProps>`
    max-width: ${(props) => props.size ?? 80}mm;
    width: 100%;
`
export const Text = styled.div<TextProps>`
    font-family: monospace;
    text-align: ${(props) => props.align ?? 'left'};
    font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
    text-decoration: ${(props) => props.underlined ? 'underline' : 'unset'};
    font-style: ${(props) => props.italic ? 'italic' : 'normal'};
`
export const Line = styled.div<LineProps>`
    border: 0.5px dashed gray;
    width: 100%;
    height: 0px;
    margin: ${(props) => {
        if (props.margin) {
            return `${props.margin[1]}px ${props.margin[0]}px`
        }
        return '0px 0px 2px 0px'
    }};
`
export const Dot = styled.hr<DotProps>`
    border: 0.5px ${(props) => props.type ?? 'dotted'} gray;
    margin-top: ${(props) => props.vmar ? props.vmar[0] : 0}px;
    margin-bottom: ${(props) => props.vmar ? props.vmar[1] : 0}px;
    
    margin: ${(props) => {
        if (props.margin) {
            return `${props.margin[1]}px ${props.margin[0]}px`
        }
        return '5px 5px'
    }};
`
export const RowText = styled.div<RowTextProps>`
    display: flex;
    align-items: ${(props) => {
        if (props.valign) {
            if (props.valign === "bottom") {
                return 'flex-end';
            } else if (props.valign === "top") {
                return 'flex-start';
            } else {
                return 'center'
            }
        }
        return 'left'
    }};
    justify-content: ${(props) => {
        if (props.justify) {
            if (props.justify === "start") {
                return 'flex-start'
            } else if (props.justify === "end") {
                return 'flex-end'
            } else if (props.justify === "center") {
                return 'center'
            } else {
                return 'space-between'
            }
        }
        return 'space-between'
    }};
    gap: ${(props) => {
        if (props.gap) {
            return `${props.gap}px`
        }
        if (props.space) {
            return `0px ${props.space}px`
        }
        return '0px 5px'
    }};
    padding-top: ${(props) => props.pady ?? 0}px;
    padding-right: ${(props) => props.padx ?? 0}px;
    padding-bottom: ${(props) => props.pady ?? 0}px;
    padding-left: ${(props) => props.padx ?? 0}px;
    margin: ${(props) => {
        if (props.padding) {
            return `${props.padding[1]}px ${props.padding[0]}px`
        }
        return '5px 5px'
    }};
`
export const DataTable = styled.table<DataTableProps>`
    ${(props) => {
        if (props.collapse) {
            return 'border-collapse: collapse;'
        } else {
            return 'border-collapse: unset;'
        }
    }}
    ${(props) => props.bordered && 'border: 0.5px dashed gray;'}
    width: 100%;
`
export const TableRow = styled.tr<TableRowProps>`
    text-align: ${(props) => props.align ?? 'left'};
`
export const TableHead = styled.th<TableHeadProps>`
    border: 1px dashed gray;
    border-left-width: 0px;
    border-right-width: 0px;
    font-family: monospace;
    padding: 0px 5px;
`
export const TableCell = styled.td<TableCellProps & TextProps>`
    font-family: monospace;
    text-align: ${(props) => props.align ?? 'left'};
    font-style: ${(props) => props.italic ? 'italic' : 'normal'};
    font-weight: ${(props) => props.bold ? '500' : 'normal'};
    text-decoration: ${(props) => props.underlined ? 'underline' : 'unset'};
`
export const Space = styled.div<SpaceProps>`
    margin: ${(props) => {
        if (props.size) {
            return `${props.size[1]}px ${props.size[0]}px;`
        } else {
            return `5px 5px;`
        }
    }}
`