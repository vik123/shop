import React from 'react';
import {withRouter} from 'react-router-dom';
import './menuItems.styles.scss';

const MenuItems = ({title, imageUrl, size, history, linkUrl, match}) => (
        <div className={`${size} menu-item`}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}  />
          <div className='content'>
            <div className='title'>{title.toUpperCase()}</div>
            <span className='subtitle' onClick={() => history.push(`${match.url}${linkUrl}`)}>SHOP NOW</span>
          </div>
        </div>
);

export default withRouter(MenuItems);