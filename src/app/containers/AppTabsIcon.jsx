import React        from 'react';
import Tabs         from 'material-ui/lib/tabs/tabs';
import Tab          from 'material-ui/lib/tabs/tab';
import FontIcon     from 'material-ui/lib/font-icon';
import HomeIcon     from 'material-ui/lib/svg-icons/action/home';
import AboutIcon    from 'material-ui/lib/svg-icons/action/info';
import ServicesIcon from 'material-ui/lib/svg-icons/maps/local-hospital';
import DoctorsIcon  from 'material-ui/lib/svg-icons/social/people';
import PrimaryIcon  from 'material-ui/lib/svg-icons/action/description';
import MapIcon      from 'material-ui/lib/svg-icons/maps/place';
import VirtualIcon  from 'material-ui/lib/svg-icons/action/three-d-rotation';

export default React.createClass({
  contextTypes: {
    store:  React.PropTypes.object,
    router: React.PropTypes.object,
  },
  getInitialState() {
    const { store } = this.context;
    const index = store.getState().appTabs.index;
    return { index: index };
  },
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      var index = store.getState().appTabs.index;
      this.setState({ index });
      // trace(index);
      // console.log(this.state);
    }).bind(this);
  },
  componentWillUnmount() {
    this.unsubscribe();
  },
  handleChange(index) {
    this.setState({ index });
    const route = this.props.getRouteName(index);
    this.context.router.push(route);
    this.context.store.dispatch({type:"UPDATE_INDEX", index});
    this.context.store.dispatch({type:"UPDATE_ROUTE", route});
  },
  render() {
    return (
      <Tabs className="app-tabs-icon"
        initialSelectedIndex={this.state.index}
        value={this.state.index}
        onChange={this.handleChange}
      >
        <Tab value={0}
          icon={<HomeIcon 
            className="AppTabsIcon-icon" />}
        />
        <Tab value={1}
          icon={<AboutIcon 
            className="AppTabsIcon-icon" />}
        />
        <Tab value={2}
          icon={<ServicesIcon 
            className="AppTabsIcon-icon" />}
        />
        <Tab value={3}
          icon={<DoctorsIcon 
            className="AppTabsIcon-icon" />}
        />
        <Tab value={4}
          icon={<PrimaryIcon 
            className="AppTabsIcon-icon" />}
        />
        <Tab value={5}
          icon={<MapIcon 
            className="AppTabsIcon-icon" />}
        />
        <Tab value={6}
          icon={<VirtualIcon 
            className="AppTabsIcon-icon" />}
        />
      </Tabs>
    )
  }
});