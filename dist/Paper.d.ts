import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as React from 'react';
import React__default from 'react';

interface PaperProps extends React.PropsWithChildren {
    /**
     * Size in mm
     * default 80mm
     */
    size?: number;
}

interface TextProps {
    align?: 'left' | 'center' | 'right';
    bold?: boolean;
    underlined?: boolean;
}

declare namespace Property {
    type BorderStyle = 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
}

interface DotProps {
    type?: Property.BorderStyle;
    vmar?: [number, number];
}

interface RowTextProps {
    pady?: number;
    padx?: number;
    gap?: number;
    valign?: 'top' | 'bottom' | 'center';
}

interface TableRowProps {
    align?: 'left' | 'center' | 'right';
}

interface TableCellProps {
    align?: 'left' | 'center' | 'right';
}

declare const Paper: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, PaperProps>> & string;
declare const Text: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TextProps>> & string;
declare const Line: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
declare const Dot: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, DotProps>> & string;
declare const RowText: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, RowTextProps>> & string;
declare const DataTable: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<React__default.DetailedHTMLProps<React__default.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, never>> & string;
declare const TableRow: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, TableRowProps>> & string;
declare const TableHead: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<React__default.DetailedHTMLProps<React__default.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, never>> & string;
declare const TableCell: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React__default.DetailedHTMLProps<React__default.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, TableCellProps>> & string;

export { DataTable, Dot, Line, Paper, RowText, TableCell, TableHead, TableRow, Text };
