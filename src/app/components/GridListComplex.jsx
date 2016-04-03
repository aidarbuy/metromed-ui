import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import articlesData from '../components/articles'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const GridListExampleComplex = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={200}
      cols={2}
      padding={1}
      style={styles.gridList}
    >
      {articlesData.map((tile, index) => (
        <GridTile
          key={tile.img.src}
          title={tile.header}
          subtitle={tile.date}
          actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={index < 1 ? 2 : 1}
          rows={index < 1 ? 2 : 1}
          style={{
            fontSize:18,
          }}
        >
          <img 
            src={'images/articles/' + tile.img.src + '-600x300.jpg'} 
            style={{
              position:'relative',
              width:'100%',
              height:'auto',
              overflowY:'auto',
            }} 
          />
          <p 
            dangerouslySetInnerHTML={{__html:tile.teaser}} 
            style={{
              fontSize:18,
              lineHeight:1.4,
              position:'absolute', 
              top:100, 
              left:0,
              width:'100%',
              color:'white', 
            }}
          />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleComplex;