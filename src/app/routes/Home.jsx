import React from 'react'
import LayerSlider from '../components/home/LayerSlider'
import TopBar from '../components/home/TopBar'
import CallToAction from '../components/home/CallToAction'
import CustomServices from '../components/home/CustomServices'
import Articles from '../containers/Articles'
import ArticlesGridList from '../containers/ArticlesGridList'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        {/*
        <LayerSlider />
        <TopBar />
        <CallToAction />
        <CustomServices />
        <Articles />
        */}
        <ArticlesGridList />
      </div>
    );
  }
}