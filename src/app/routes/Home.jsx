import React 
  from 'React';
import LayerSlider 
  from '../components/home/LayerSlider';
import TopBar 
  from '../components/home/TopBar';
import CallToAction 
  from '../components/home/CallToAction';
import CustomServices 
  from '../components/home/CustomServices';
import Articles 
  from '../containers/ArticlesGrid';
import Testimonials 
  from '../containers/Testimonials';

class Home extends React.Component {
  render() {
    return (
      <div>
        {/*
        */}
        <LayerSlider/>
        <TopBar/>
        <CallToAction/>
        <CustomServices/>
        <div className='flexcontainer'
          style={{
            marginTop:20,
          }}>
          <div className='flexitem'>
            <Articles/>
          </div>
          <div className='flexitem'>
            <Testimonials/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;