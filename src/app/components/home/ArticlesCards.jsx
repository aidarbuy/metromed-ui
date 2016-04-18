import React from 
  'react';
import StarBorder from 
  'material-ui/lib/svg-icons/toggle/star-border'
import Toolbar from 
  'material-ui/lib/toolbar/toolbar'
import ToolbarGroup from 
  'material-ui/lib/toolbar/toolbar-group'
import ToolbarSeparator from 
  'material-ui/lib/toolbar/toolbar-separator'
import ToolbarTitle from 
  'material-ui/lib/toolbar/toolbar-title'
import DropDownMenu from 
  'material-ui/lib/DropDownMenu'
import IconMenu from 
  'material-ui/lib/menus/icon-menu'
import IconButton from 
  'material-ui/lib/icon-button'
import FontIcon from 
  'material-ui/lib/font-icon'
import NavigationExpandMoreIcon from 
  'material-ui/lib/svg-icons/navigation/expand-more'
import MenuItem from 
  'material-ui/lib/menus/menu-item'
import RaisedButton from 
  'material-ui/lib/raised-button'
import Paper from 
  'material-ui/lib/paper'
import { grey50 } from
  'material-ui/lib/styles/colors'

import articlesData from 
  '../../data/articles'
import ArticleCard from 
  '../ArticleCard';

const articles = articlesData.slice(0, 4);

module.exports = () => (
  <Paper>
    <Toolbar>
      <ToolbarGroup 
        style={{
          marginLeft:'auto',
          marginRight:'auto',
        }}
      >
        <ToolbarTitle text="Articles" />
      </ToolbarGroup>
    </Toolbar>

    <div className="flex-container">
      {articles.map((article, index) => (
        <div 
          key = {article.title}
          className="article-item"
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

    <Toolbar style={{
      background:grey50
    }}>
      <ToolbarGroup 
        style={{
          marginLeft:'auto',
          marginRight:'auto',
        }}
      >
        <RaisedButton 
          label="View All Articles" 
          linkButton={true}
          href="/articles"
        />
      </ToolbarGroup>
    </Toolbar>     
  </Paper>
)