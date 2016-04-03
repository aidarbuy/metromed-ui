import React      from 'react';
import GridList   from 'material-ui/lib/grid-list/grid-list';
import GridTile   from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';

import articlesData from '../components/articles'
import ArticleCard  from '../components/ArticleCard';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    // height: '100%',
    // overflowY: 'auto',
    // marginBottom: 24,
  },
};

const GridListExampleComplex = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={370}
      cols={2}
      padding={4}
      style={styles.gridList}
    >
      {articlesData.map((tile, index) => (
        <GridTile
          key={tile.img.src}
          actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={index < 1 ? 1 : 1}
          rows={index < 1 ? 1 : 1}
          style={{
            fontSize:18,
            backgroun:'red',
          }}
        >
          <ArticleCard  
            key={tile.img.src}
            title={tile.header}
            subtitle={tile.date}
            img={tile.img.src}
            teaser={tile.teaser}
          />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleComplex;