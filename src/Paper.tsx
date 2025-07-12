import React from 'react'
import styled from 'styled-components'
import { DotProps, PaperProps, RowTextProps, TableCellProps, TableRowProps, TextProps } from '.'

export const Paper = styled.div<PaperProps>`
    max-width: ${(props) => props.size ?? 80}mm;
    width: 100%;
`
export const Text = styled.div<TextProps>`
    text-align: ${(props) => props.align ?? 'left'};
    font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
    text-decoration: ${(props) => props.underlined ? 'underline' : 'unset'};
    font-family: monospace;
`
export const Line = styled.div`
    border: 0.5px dashed gray;
    width: 100%;
    height: 0px;
    margin-bottom: 5px;
`
export const Dot = styled.hr<DotProps>`
    border: 0.5px ${(props) => props.type ?? 'dashed'} gray;
    margin-top: ${(props) => props.vmar ? props.vmar[0] : 0}px;
    margin-bottom: ${(props) => props.vmar ? props.vmar[1] : 0}px;
`
export const RowText = styled.div<RowTextProps>`
    display: flex;
    align-items: ${(props) => {
        if (props.valign === "bottom") {
            return 'flex-end';
        } else if (props.valign === "top") {
            return 'flex-start';
        } else {
            return 'center'
        }
    }};
    justify-content: space-between;
    gap: ${(props) => props.gap ?? 0}px;
    padding-top: ${(props) => props.pady ?? 0}px;
    padding-right: ${(props) => props.padx ?? 0}px;
    padding-bottom: ${(props) => props.pady ?? 0}px;
    padding-left: ${(props) => props.padx ?? 0}px;
`
export const DataTable = styled.table`
    border-collapse: collapse;
    width: 100%;
`
export const TableRow = styled.tr<TableRowProps>`
    text-align: ${(props) => props.align ?? 'left'};
`
export const TableHead = styled.th`
    border: 1px dashed gray;
    border-left-width: 0px;
    border-right-width: 0px;
    font-family: monospace;
    padding: 0px 5px;
`
export const TableCell = styled.td<TableCellProps>`
    text-align: ${(props) => props.align ?? 'left'};
    font-family: monospace;
`