import React from 'react';

import FlatButton from 
  'material-ui/lib/flat-button'
import LibraryBooks from 
  'material-ui/lib/svg-icons/av/library-books'

import articles from '../data/articles';

const styles = {
  header : {
    textTransform:'capitalize',
  },
  p : {
    textAlign:'left',
    margin:20,
    // background:'red',
  },
};

function getArticleText(id) {
  for (var i = articles.length - 1; i >= 0; i--) {
    if (articles[i].img.src === id)
      return articles[i].text;
  }
}

export default React.createClass({
  render() {
    const { id } = this.props.params;
    const src = 'images/articles/' + 
      id + '-600x300.jpg';

    return (
      <div>
        <FlatButton 
          label="All Articles" 
          labelPosition="after"
          primary={true}
          icon={<LibraryBooks />}
          style={styles.button}
          linkButton={true}
          href="/articles"
        />

        <h3 style={styles.header}>{id}</h3>

        <img width="100%" src={src}/>

        {getArticleText(id).map((p, i) => (
          <div key={i} style={styles.p} 
            dangerouslySetInnerHTML={{__html:p}}>
          </div>
        ))}
      </div>
    )
  }
});