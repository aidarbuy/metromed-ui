import React from 
  'react'
import Table from 
  'material-ui/lib/table/table'
import TableHeaderColumn from 
  'material-ui/lib/table/table-header-column'
import TableRow from 
  'material-ui/lib/table/table-row'
import TableHeader from 
  'material-ui/lib/table/table-header'
import TableRowColumn from 
  'material-ui/lib/table/table-row-column'
import TableBody from 
  'material-ui/lib/table/table-body'

const arr = [
  'Asthma', 'Abdominal Pain', 
  'Allergic Reactions', 'Bites/Stings', 
  'Broken Bones & Sprains', 'Burns', 
  'Eye Injuries', 'Lacerations', 
  'Rashes', 'Sore Throats', 
  'Sports Injuries', 'DOT Physicals', 
  'Travel Medicine', 'Chest Pain', 
  'Occupational Health', 'and many other...'
]

var arrPaired = []
const pairArr = () => {
  for (var i = 0; i <= arr.length - 1; i += 2) {
    var pairObj = []
    pairObj.push(arr[i])
    pairObj.push(arr[i + 1])
    arrPaired.push(pairObj)
  }
}
pairArr()

module.exports = () => (
  <Table>
    <TableBody displayRowCheckbox={false}>
      {arrPaired.map((item, i) => (
        <TableRow key={i}>
          <TableRowColumn style={{fontSize:16}}>
            {item[0]}
          </TableRowColumn>
          <TableRowColumn style={{fontSize:16}}>
            {item[1]}
          </TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)