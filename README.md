## React Receipt Slip

General use cases
- POS Receipt
- Bank Transaction Receipt

## Documentation
- [Documentation]()
- [Examples]()
- [About]()
- [MIT]()

## Installation

Run the following command

```bash
npm install react-receipt-slip
```


```js
import {
  DataTable,
  Dot,
  Line,
  Paper,
  RowText,
  TableCell,
  TableHead,
  TableRow,
  Text,
} from "react-receipt-slip";

const Receipt = () => {
    return <Paper>
        <Text align='center' bold>ABC Company</Text>
        <Text align='center'>Philippines, Manila. 1000</Text>
        <Text align='center'>TIN: 1111-1111-1111-1111-0000</Text>
        <Text align='center'>MIN: 11111111111111</Text>
        <Text align='center'>Contact: (02) 743284327878</Text>
        <Text align='center'>Date Published: 07/11/2024</Text>
        <DataTable>
            <TableRow>
                <TableCell><Text bold>CASH SALES</Text></TableCell>
                <TableCell><Text align='right'>Customer</Text></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Text bold>POS-0001</Text></TableCell>
                <TableCell><Text align='right'>Walk-in</Text></TableCell>
            </TableRow>
        </DataTable>
        <DataTable>
            <TableRow>
                <TableHead align='center'>ITEM</TableHead>
                <TableHead align='center'>QTY</TableHead>
                <TableHead align='right'>Price</TableHead>
                <TableHead align='right'>Amount</TableHead>
            </TableRow>
            <TableRow>
                <TableCell>Signature Black Forest</TableCell>
                <TableCell align='center'>1</TableCell>
                <TableCell align='right'>1,299</TableCell>
                <TableCell align='right'>1,299</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Classic Ube Cake</TableCell>
                <TableCell align='center'>1</TableCell>
                <TableCell align='right'>1,245</TableCell>
                <TableCell align='right'>1,245</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Mango Magnifico</TableCell>
                <TableCell align='center'>1</TableCell>
                <TableCell align='right'>1,213</TableCell>
                <TableCell align='right'>1,213</TableCell>
            </TableRow>
        </DataTable>
        <RowText>
            <Text bold>TOTAL</Text>
            <Text>3,757</Text>
        </RowText>
        <Dot />
        <DataTable>
            <TableRow>
                <TableCell><Text bold>CASH Received</Text></TableCell>
                <TableCell><Text align='right'>4,000</Text></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Text bold>CHANGE</Text></TableCell>
                <TableCell><Text align='right'>243</Text></TableCell>
            </TableRow>
        </DataTable>
        <Dot vmar={[5, 5]} />
        <DataTable>
            <TableRow>
                <TableCell><Text bold>VATABLE SALES (12%)</Text></TableCell>
                <TableCell><Text align='center'>:</Text></TableCell>
                <TableCell><Text align='right'>402.54</Text></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Text bold>NON-VAT SALES</Text></TableCell>
                <TableCell><Text align='center'>:</Text></TableCell>
                <TableCell><Text align='right'>-</Text></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Text bold>ZERO-RATED SALES</Text></TableCell>
                <TableCell><Text align='center'>:</Text></TableCell>
                <TableCell><Text align='right'>-</Text></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Text bold>VAT EXEMPT SALES</Text></TableCell>
                <TableCell><Text align='center'>:</Text></TableCell>
                <TableCell><Text align='right'>-</Text></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Text bold>VATABLE SALES</Text></TableCell>
                <TableCell><Text align='center'>:</Text></TableCell>
                <TableCell><Text align='right'>-</Text></TableCell>
            </TableRow>
        </DataTable>
        <Dot vmar={[10, 10]} />
        <Text bold>OR No.: 00000023</Text>
        <Text bold>Date Time: 2025-07-12 10:25 AM</Text>
        <Dot vmar={[10, 10]} />
        <RowText valign='bottom'>
            <Text>Customer: </Text>
            <Line />
        </RowText>
        <RowText valign='bottom'>
            <Text>Address: </Text>
            <Line />
        </RowText>
        <RowText valign='bottom'>
            <Text>TIN: </Text>
            <Line />
        </RowText>
        <RowText valign='bottom'>
            <Text>Signature: </Text>
            <Line />
        </RowText>
        <Dot vmar={[20, 0]} />
        <Text align='center'>**Thank you for your business!**</Text>
        <Dot vmar={[5, 5]} />
        <Text align='center'>Please keep this receipt for your records.</Text>
        <Dot vmar={[0, 0]} />
    </Paper>
}
export default Receipt
```


## Receipt UI Components

### `<Paper>`

A container representing the receipt paper.

**Props:**
- `size?: number` — Width in mm (default: `80`).

### `<Text>`

Styled text for receipt content.

**Props:**
- `align?: 'left' | 'center' | 'right'` — Text alignment (default: `'left'`).
- `bold?: boolean` — Bold text if `true`.
- `underlined?: boolean` — Underlined text if `true`.

### `<Line>`

A horizontal dashed line for separating sections.

_No props._

### `<Dot>`

A horizontal rule with customizable border style and vertical margins.

**Props:**
- `type?: Property.BorderStyle` — Border style (default: `'dashed'`).
- `vmar?: [number, number]` — Vertical margins `[top, bottom]` in px.

### `<RowText>`

A flex row for aligning multiple text elements.

**Props:**
- `pady?: number` — Vertical padding in px.
- `padx?: number` — Horizontal padding in px.
- `gap?: number` — Gap between children in px.
- `valign?: 'top' | 'bottom' | 'center'` — Vertical alignment (default: `'center'`).

### `<DataTable>`

A table for displaying tabular data.

**Props:**
- `bordered?: boolean` — (Not used in current styles.)

### `<TableRow>`

A table row with optional alignment.

**Props:**
- `align?: 'left' | 'center' | 'right'` — Text alignment (default: `'left'`).

### `<TableHead>`

A table header cell with dashed borders.

_No props._

### `<TableCell>`

A table cell with optional alignment.

**Props:**
- `align?: 'left' | 'center' | 'right'` — Text alignment (default: `'left'`).

## Usage Example

[Sandbox](https://codesandbox.io/p/sandbox/7wtlkl)