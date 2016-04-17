// src/app/components/about/Conditions.jsx
import React from 'react';

import Table from 
  'material-ui/lib/table/table';
import TableHeaderColumn from 
  'material-ui/lib/table/table-header-column';
import TableRow from 
  'material-ui/lib/table/table-row';
import TableHeader from 
  'material-ui/lib/table/table-header';
import TableRowColumn from 
  'material-ui/lib/table/table-row-column';
import TableBody from 
  'material-ui/lib/table/table-body';
import List from 
  'material-ui/lib/lists/list';
import ListItem from 
  'material-ui/lib/lists/list-item';
import Divider from 
  'material-ui/lib/divider';

import ListItemDivider from 
  '../ui/ListItemDivider';

const arr = [
  'Asthma', 'Abdominal Pain', 
  'Allergic Reactions', 'Bites/Stings', 
  'Broken Bones & Sprains', 'Burns', 
  'Eye Injuries', 'Lacerations', 
  'Rashes', 'Sore Throats', 
  'Sports Injuries', 'DOT Physicals', 
  'Travel Medicine', 'Chest Pain', 
  'Occupational Health', 'and many other...'
];

var arrPaired = [];

(function() {
  for (var i = 0; i <= arr.length - 1; i += 2) {
    var pairObj = [];
    pairObj.push(arr[i])
    pairObj.push(arr[i + 1])
    arrPaired.push(pairObj)
  }
})();

export default React.createClass({
  render() {
    var rows = arrPaired.map((item, i) => {
      return (
        <TableRow key={item[0]}>
          <TableRowColumn className="conditions-tableRow">
            {item[0]}
          </TableRowColumn>
          <TableRowColumn className="conditions-tableRow">
            {item[1]}
          </TableRowColumn>
        </TableRow>
      );
    })

    var items = arr.map((item, i) => {
      return (
        <div key={i}>
          <ListItem className="conditions-tableRow">
            {item}
          </ListItem>
          <Divider/>
        </div>
      );
    });

    return (
      <div>
        <Table className="conditions-lg-xs">
          <TableBody displayRowCheckbox={false} 
            stripedRows={false}
          >{rows}
          </TableBody>
        </Table>

        <List className="conditions-xs">
          {items}
        </List>
      </div>
    )
  }
});