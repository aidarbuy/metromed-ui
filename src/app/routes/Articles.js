import React from 'react';
import ArticleCard from '../components/ArticleCard';
import articles from '../data/articles';

export default () => (
  <section>
    <h3>Articles</h3>

    <div className="flex-container">
      {articles.map((article, index) => (
        <div 
          key = {article.title}
          className="flex-item"
        >
          <ArticleCard
            title    = {article.title}
            subtitle = {article.date}
            img      = {article.img.src}
            teaser   = {article.teaser}
          />
        </div>
      ))}
    </div>
  </section>
);