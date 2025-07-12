import * as React from 'react';
export interface PaperProps extends React.PropsWithChildren {
    /**
     * Size in mm
     * default 80mm
     */
    size?: number;
}
export const Paper: React.ComponentType<PaperProps>;

export interface TextProps {
    align?: 'left' | 'center' | 'right';
    bold?: boolean;
    underlined?: boolean;
}
export const Text: React.ComponentType<TextProps>;

export const Line: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;

export namespace Property {
    type BorderStyle = 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
}

export interface DotProps {
    type?: Property.BorderStyle;
    vmar?: [number, number];
}
export const Dot: React.ComponentType<DotProps>;

export interface RowTextProps {
    pady?: number;
    padx?: number;
    gap?: number;
    valign?: 'top' | 'bottom' | 'center';
}
export const RowText: React.ComponentType<RowTextProps>;

export interface DataTableProps {
    bordered?: boolean;
}
export const DataTable: React.ComponentType<DataTableProps>;

export interface TableRowProps {
    align?: 'left' | 'center' | 'right';
}
export const TableRow: React.ComponentType<TableRowProps>;

export const TableHead: React.ComponentType<React.ThHTMLAttributes<HTMLTableCellElement>>;

export interface TableCellProps {
    align?: 'left' | 'center' | 'right';
}
export const TableCell: React.ComponentType<TableCellProps>;