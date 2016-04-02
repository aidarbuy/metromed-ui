import React from 'react'
import LayerSlider from '../components/LayerSlider'
import TopSidebar from '../components/TopSidebar'

export default class Home extends React.Component {
  render() {
    return (
    	<div>
        <LayerSlider />
        <TopSidebar />
    	</div>
    );
  }
}