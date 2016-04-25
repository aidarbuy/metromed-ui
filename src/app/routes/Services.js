import React       from 'react';
import Helmet      from 'react-helmet';
import Card        from 'material-ui/lib/card/card';
import CardMedia   from 'material-ui/lib/card/card-media';
import CardTitle   from 'material-ui/lib/card/card-title';
import CardText    from 'material-ui/lib/card/card-text';
import List        from 'material-ui/lib/lists/list';
import ListItem    from 'material-ui/lib/lists/list-item';
import * as Colors from 'material-ui/lib/styles/colors';
import Divider     from '../components/ui/ListItemDivider';
import services    from '../data/services';

export default () => (
  <section>
    <Helmet title="Services - Metromed UC"/>

    <h3>Services</h3>

    <div className="flex-container">
      {services.map((service, i) => (
        <div key={i} className="flex-item">
          <Card style={{textAlign:'center'}}>
            <CardTitle style={{fontSize:34, color:Colors.cyan700}}>
              <span>{service.title}</span>
            </CardTitle>
            <CardMedia style={{margin:0, padding:0, fontSize:25}}>
              <span style={{fontSize:77, color:Colors.grey700}}>${service.price}</span>
            </CardMedia>
            <CardText>
              <List>
                {service.list.map((li, i, arr) => (
                  <ListItem key={i}>
                    <span style={{fontSize:18, color:Colors.blueGrey700}}>{li}</span>
                    <Divider style={{marginLeft:20, marginRight:20, transform:'translateY(16px)'}} index={i} length={arr.length}/>
                  </ListItem>
                ))}
              </List>
            </CardText>
          </Card>
        </div>
      ))}
    </div>
  </section>
);