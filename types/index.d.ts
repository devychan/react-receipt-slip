import * as React from 'react';
export interface PaperProps extends React.PropsWithChildren {
    /**
     * Typical size in mm
     * @default
     * 80
     */
    size?: number;
}
export const Paper: React.ComponentType<PaperProps>;

export interface TextProps {
    /**
     * @default
     * 'left'
     */
    align?: 'left' | 'center' | 'right';
    /**
     * @default
     * false
     */
    bold?: boolean;
    /**
     * @default
     * false
     */
    underlined?: boolean;
    /**
     * ### New v1.1.1
     * 
     * @default
     * false
     */
    italic?: boolean
}
export const Text: React.ComponentType<TextProps>;

export interface LineProps {
    /**
     * ### New v1.1.1
     * **Coordinates** [x, y]
     * 
     * @property
     * margin
     * 
     * @example
     * <Line margin={[5, 5]} />
     */
    margin?: [number, number];
}
export const Line: React.ComponentType<LineProps>;
export namespace Property {
    type BorderStyle = 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
}
export interface DotProps {
    /**
    * @deprecated
    * removed
    */
    type?: Property.BorderStyle;
    /**
     * @deprecated
     * use margin instead
     */
    vmar?: [number, number];
    /**
     * ### New v1.1.0
     * **Coordinates** [x, y]
     * 
     * @property
     * margin
     * 
     * @example
     * <Dot margin={[0, 0]} />
     */
    margin?: [number, number];
}
export const Dot: React.ComponentType<DotProps>;

export interface RowTextProps {
    /**
     * @deprecated
     * use pad instead
     */
    pady?: number;
    /**
     * @deprecated
     * use pad instead
     */
    padx?: number;
    /**
     * @deprecated
     * use space instead
     */
    gap?: number;
    /**
     * ### New v1.1.0
     * **Coordinates** [x, y]
     * 
     * @example
     * <RowText padding={[5, 5]}>
     *  <Text>Name</Text>
     *  <Text>Age</Text>
     * </RowText>
     */
    padding?: [number, number];
    /**
     * ### Version v1.0.9
     * 
     * Vertical alignment
     * 
     * @property
     * valign
     * 
     * @example
     * <RowText valign="center">
     *  <Text>Name</Text>
     *  <Text>Age</Text>
     * </RowText>
     */
    valign?: 'top' | 'bottom' | 'center';
    /**
     * ### New v1.1.0
     * 
     * @property
     * rowGrap
     * 
     * @example
     * <RowText space={10}>
     *  <Text>Name</Text>
     *  <Text>Age</Text>
     * </RowText>
     */
    space?: number
    /**
     * ### New v1.1.0
     * 
     * @property
     * justify
     * 
     * @example
     * <RowText justify="center">
     *  <Text>Name</Text>
     *  <Text>Age</Text>
     * </RowText>
     */
    justify?: "start" | "center" | "between" | "end"
}
export const RowText: React.ComponentType<RowTextProps>;

export interface DataTableProps {
    /**
     * ### Version v1.0.9
     * 
     * @property
     * bordered
     * 
     * @example
     * <DataTable bordered>
     *  ...
     * </DataTable>
     */
    bordered?: boolean;
    /**
     * ### New v1.1.0
     * 
     * @property
     * margin
     * 
     * @example
     * <DataTable collapse={false}>
     * ...
     * </DataTable>
     */
    collapse?: boolean
}
export const DataTable: React.ComponentType<DataTableProps>;

export interface TableRowProps {
    align?: 'left' | 'center' | 'right';
}
export const TableRow: React.ComponentType<TableRowProps>;
export interface TableHeadProps { }
export const TableHead: React.ComponentType<TableHeadProps>;

export interface TableCellProps {
    /**
    * Sets the horizontal alignment of text within the cell.
    * 
    * - `'left'`: Aligns text to the left (default for most table cells).
    * - `'center'`: Centers the text horizontally.
    * - `'right'`: Aligns text to the right, often used for numbers.
    * 
    * @example
    * <TableCell align="center">Name</TableCell>
    */
    align?: 'left' | 'center' | 'right';
}
export const TableCell: React.ComponentType<TableCellProps>;

export interface SpaceProps {
    /**
     * **Coordinates** [x, y]
     * @default [5, 5]
     * 
     * @example
     * [10, 10]
     */
    size?: [number, number]
}
export const Space: React.ComponentType<SpaceProps>;