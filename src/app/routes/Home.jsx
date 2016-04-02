import React from 'react'
import LayerSlider from '../components/LayerSlider'
import TopBar from '../components/TopBar'
import CallToAction from '../components/CallToAction'
import CustomServices from '../components/CustomServices'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        {/*
        <LayerSlider />
        <TopBar />
        <CallToAction />
        */}
        <CustomServices />
      </div>
    );
  }
}