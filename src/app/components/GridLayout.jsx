import React from 'react'
import ReactGridLayout from 'react-grid-layout'

class GridLayout extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {x: 0, y: 0, w: 1, h: 2},
      {x: 1, y: 0, w: 1, h: 2},
      {x: 2, y: 0, w: 1, h: 2}
    ];
    return (
      <ReactGridLayout 
        className="layout" 
        layout={layout}
        cols={12} 
        rowHeight={30}
        containerWidth={200}
      >
        <div key={1}>1</div>
        <div key={2}>2</div>
        <div key={3}>3</div>
      </ReactGridLayout>
    )
  }
}

export default GridLayout