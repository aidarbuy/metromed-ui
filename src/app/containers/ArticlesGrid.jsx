import React 
  from 'react';
import GridList 
  from 'material-ui/lib/grid-list/grid-list';
import GridTile 
  from 'material-ui/lib/grid-list/grid-tile';
import StarBorder 
  from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton 
  from 'material-ui/lib/icon-button';
import articlesData 
  from '../data/articles'
import ArticleCard 
  from '../components/ArticleCard';

const articles = articlesData.slice(0, 4);

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
  // Override the inline-styles of the root element.
  gridTile: {
    fontSize:18,
    paddingLeft:1,
    paddingRight:1,
    backgroun:'red',
  },
  title: {
    textAlign:'left',
  },
  subtitle: {
    textAlign:'left',
  },
};

export default React.createClass({
  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={200}
          cols={2}
          padding={4}
          style={styles.gridList}
        >

          {articles.map((article, index) => (

            <GridTile
              key={article.title}

              title={
                <h2 style={styles.title}>
                  {article.title}
                </h2>
              }
              titlePosition="top"
              titleBackground="
                linear-gradient(
                  to bottom, 
                  rgba(0,0,0,0.7)   0%,
                  rgba(0,0,0,0.3)  70%,
                  rgba(0,0,0,0.0) 100%
                )
              "

              subtitle={
                <h3 style={styles.subtitle}>
                  {article.date}
                </h3>
              }
              actionIcon={
                <IconButton>
                  <StarBorder color="white"/>
                </IconButton>
              }
              actionPosition="left"
              cols={index < 1 ? 1 : 1}
              rows={index < 1 ? 1 : 1}

              style={styles.gridTile}
            >

              <ArticleCard  
                key      = {article.title}
                title    = {article.title}
                subtitle = {article.date}
                img      = {article.img.src}
                teaser   = {article.teaser}
              />

              {/*
              <img src={
                'images/articles/' + 
                article.img.src + 
                '-600x300.jpg'
              }/>
              */}

            </GridTile>

          ))}
        </GridList>
      </div>
    )
  }
})