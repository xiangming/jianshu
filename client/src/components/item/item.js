import React from 'react';
import './item.scss';

export const Item = (props) => {
  const { id, title, views_count } = props;

  return (
    <div className='item'>
      <a className='item-title' href={`/${id}`}>
        {title}
      </a>
      <div className='item-meta'>{`阅读 ${views_count}`}</div>
    </div>
  );
};
