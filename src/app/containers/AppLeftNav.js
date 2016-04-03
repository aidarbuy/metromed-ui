import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import LeftNavCard from '../components/layout/LeftNavCard';
import AppLeftNavMenu from '../components/layout/AppLeftNavMenu';

class LeftNavUndocked extends React.Component {
  constructor(props, { store }) {
    super(props);
    this.state = {
      open: store.getState().leftNav.open,
      // open: true,
    };
  }
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() => 
      this.handleToggle()
    )
  }
  componentWillUnmount() {
    this.unsubscribe()  
  }
  handleToggle = () => {
    this.setState({open: !this.state.open});
  }
  handleClose = () => {
    this.setState({open: false});
  }
  render() {
    const { store } = this.context
    return (
      <div>
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <LeftNavCard/>
          <AppLeftNavMenu handleClose={this.handleClose} />
        </LeftNav>
      </div>
    );
  }
}

LeftNavUndocked.contextTypes = {
  store: React.PropTypes.object
}

export default LeftNavUndocked