import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

const style = {
  table: {
    background: 'inherit',
  },
  row: {
  },
  left: {
    padding: 0,
    color: 'white',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    textAlign: 'right',
    width: '45%',
  },
  center: {
    padding: 0,
    fontSize: 'inherit',
    fontWeight: 'inherit',
    width: '5%',
    textAlign: 'center',
    color: '#ddd',
  },
  right: {
    padding: 0,
    color: 'white',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    width: '45%',
    textAlign: 'left',
  }
}

module.exports = () => (
  <Table style={style.table}>
    <TableBody displayRowCheckbox={false}>
      <TableRow style={style.row}>
        <TableHeaderColumn style={style.left}>Sunday</TableHeaderColumn>
        <TableHeaderColumn style={style.center}>:</TableHeaderColumn>
        <TableHeaderColumn style={style.right}>closed</TableHeaderColumn>
      </TableRow>
      <TableRow style={style.row}>
        <TableRowColumn style={style.left}>Monday &ndash; Friday</TableRowColumn>
        <TableRowColumn style={style.center}>:</TableRowColumn>
        <TableRowColumn style={style.right}>10 am to 8 pm</TableRowColumn>
      </TableRow>
      <TableRow style={{backgroundImage: 'linear-gradient(to right, black, rgba(0, 0, 0, 0)) 1 100%'}}>
        <TableHeaderColumn style={style.left}>Saturday</TableHeaderColumn>
        <TableHeaderColumn style={style.center}>:</TableHeaderColumn>
        <TableHeaderColumn style={style.right}>closed</TableHeaderColumn>
      </TableRow>
    </TableBody>
  </Table>
);