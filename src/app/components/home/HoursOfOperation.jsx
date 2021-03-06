import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import { white, cyan200 } from 'material-ui/lib/styles/colors'

const styles = {
  table: {
    background: 'inherit',
  },
  left: {
    padding: 0,
    color: white,
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
    color: cyan200,
  },
  right: {
    padding: 0,
    color: white,
    fontSize: 'inherit',
    fontWeight: 'inherit',
    width: '45%',
    textAlign: 'left',
  }
}

module.exports = () => (
  <Table style={styles.table}>
    <TableBody displayRowCheckbox={false}>
      <TableRow>
        <TableHeaderColumn style={styles.left}>Sunday</TableHeaderColumn>
        <TableHeaderColumn style={styles.center}>:</TableHeaderColumn>
        <TableHeaderColumn style={styles.right}>closed</TableHeaderColumn>
      </TableRow>
      <TableRow style={styles.row}>
        <TableRowColumn style={styles.left}>Monday &ndash; Friday</TableRowColumn>
        <TableRowColumn style={styles.center}>:</TableRowColumn>
        <TableRowColumn style={styles.right}>10 am to 8 pm</TableRowColumn>
      </TableRow>
      <TableRow style={{backgroundImage: 'linear-gradient(to right, black, rgba(0, 0, 0, 0)) 1 100%'}}>
        <TableHeaderColumn style={styles.left}>Saturday</TableHeaderColumn>
        <TableHeaderColumn style={styles.center}>:</TableHeaderColumn>
        <TableHeaderColumn style={styles.right}>closed</TableHeaderColumn>
      </TableRow>
    </TableBody>
  </Table>
);