import React from 'react'

var object;

var PageContainer = React.createClass({
  getInitialState() {
    return {
      page: "loading page ..." 
    };
  },
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        page: "./simple-example.html"
      });
    }, 1000)
  },
  render() {
    return (
      <div 
        id="page" 
        className="PageContainer" 
        dangerouslySetInnerHTML={{__html: this.state.page}}
      >
      </div>
    );
  }
});

export default PageContainer