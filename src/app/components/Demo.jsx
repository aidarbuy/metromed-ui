var parentoptions = {
  flexDirection: ["row","row-reverse","column","column-reverse"],
  justifyContent: ["flex-start","flex-end","center","space-between","space-around"],
  alignItems: ["flex-start","flex-end","center","stretch","baseline"],
  flexWrap: ["nowrap","wrap","wrap-reverse"],
  alignContent: ["flex-start","flex-end","center","stretch","space-between","space-around"]
};

var childoptions = {
  alignSelf: ["auto","flex-start","flex-end","center","baseline","stretch"],
  flexGrow: _.range(0,6),
  order: _.range(-10,11)
};

var Demo = React.createClass({
  getInitialState: function(){
    return {
      parent: _.mapValues(parentoptions,_.first),
      children: _.range(1,5).map(function(n){
        return _.extend(_.mapValues(childoptions,_.first),{ ID: n, order: 0, flexGrow: 0 });
      }),
      selectedId: 0
    };
  }

  setValue: function(){...},

  render: function(){
    var s = this.state, child = s.selectedId, cbmaker = Function.prototype.bind.bind(this.setValue,this);
    return (
      <div className="wrapper" key={Date()}>
        <div className="explanation">...</div>
        <div className="forms">
          <Form title="container" options={parentoptions} values={s.parent} callback={cbmaker("parent")} />
          <Form title={"child #"+(child+1)} options={childoptions} values={s.children[child]} callback={cbmaker("children",child)} />
        </div>
        <div className="container" style={s.parent}>
          {s.children.map(function(c,n){
            return <Child key={c.ID} def={c} selected={n===child} callback={cbmaker("selectedId",n)} />;
          },this)}
        </div>
      </div>
    );
  }
});