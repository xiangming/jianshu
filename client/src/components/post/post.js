import React from 'react';
import './post.scss';

export const Post = (props) => {
  const { id, title, excerpt, user, views_count, likes_count, list_image_url } = props;
  return (
    <li className={`post${list_image_url ? ' has-image' : ''}`}>
      {list_image_url ? <img className='image' src={list_image_url} alt='' /> : null}
      <div className='content'>
        <a className='title' href={`/${id}`}>
          {title}
        </a>
        <div className='excerpt'>{excerpt}</div>
        <div className='meta'>
          {user.nickname ? <span className='meta-item'>{user.nickname}</span> : null}
          {views_count ? <span className='meta-item'>{`阅读 ${views_count}`}</span> : null}
          {likes_count ? <span className='meta-item'>{`喜欢 ${likes_count}`}</span> : null}
        </div>
      </div>
    </li>
  );
};
