// src/app/routes/Article.jsx
import React from 'react';
import Helmet from 'react-helmet';

import FlatButton from 
  'material-ui/lib/flat-button';
import ArrowBack from 
  'material-ui/lib/svg-icons/navigation/arrow-back';
import Paper from 
  'material-ui/lib/Paper';

import articles from '../data/articles';

const styles = {
  header : {
    textTransform:'capitalize',
  },
  p : {
    textAlign:'left',
    margin:20,
  },
  buttonContainer : {
    textAlign:'left',
  },
  button : {
    // border:'1px dashed green'
  }
};

const getArticle = (id) => {
  for (var i = 0; i <= articles.length - 1; i++) {
    if (articles[i].img.src === id)
      return articles[i];
  }
};

export default React.createClass({
  render() {
    const { id } = this.props.params;
    const src = 'images/articles/' + 
      id + '-600x300.jpg';
    const article = getArticle(id);
    const articleText = article.text.map((p, i) => (
      <div key={i} style={styles.p} 
        dangerouslySetInnerHTML={{__html:p}}>
      </div>
    ));

    return (
      <article>
        <Helmet title={
          article.title + " - MetromedUC"
        } />
        <div style={styles.buttonContainer}>
          <FlatButton 
            label="All Articles" 
            labelPosition="after"
            primary={true}
            icon={<ArrowBack />}
            style={styles.button}
            linkButton={true}
            href="/articles"
          />
        </div>

        <h3 style={styles.header}>{article.title}</h3>

        <Paper>
          <img width="100%" src={src}/>
        </Paper>

        {articleText}
      </article>
    )
  }
});
