import React      from 'react';
import Helmet     from 'react-helmet';
import FlatButton from 'material-ui/lib/flat-button';
import ArrowBack  from 'material-ui/lib/svg-icons/navigation/arrow-back';
import Paper      from 'material-ui/lib/Paper';
import Card       from 'material-ui/lib/card/card';
import CardMedia  from 'material-ui/lib/card/card-media';
import articles   from '../data/articles';

export default React.createClass({
  getArticle(id) {
    for (var i = 0; i <= articles.length - 1; i++) {
      if (articles[i].img.src === id)
        return articles[i];
    }
  },

  render() {
    const { id } = this.props.params;
    const src = 'images/articles/' + id + '-600x300.jpg';
    const article = this.getArticle(id);
    const articleText = article.text.map((p, i) => (
      <div key={i} dangerouslySetInnerHTML={{__html:p}}/>
    ));

    return (
      <article>
        <Helmet title={article.title + " - MetromedUC"} />

        <FlatButton className="button-top-left"
          label="All Articles" 
          labelPosition="after"
          primary={true}
          icon={<ArrowBack />}
          linkButton={true}
          href="/articles"
        />

        <h3 className="article-header">{article.title}</h3>

        <Paper>
          <img width="100%" src={src}/>
        </Paper>

        <p style={{marginTop:20}}>{articleText}</p>
      </article>
    )
  }
});
