import React from 'react';
import './user.scss';

export const User = (props) => {
  const { date, avatar_source, nickname, words_count, views_count, total_words_count, total_likes_count } = props;
  return (
    <div className='user'>
      <img src={avatar_source} alt='' className='user-avatar' />
      <div className='user-content'>
        <div className='user-name'>{nickname}</div>
        <div className='user-meta'>
          {date ? <span className='user-meta-item'>{date}</span> : null}
          {words_count ? <span className='user-meta-item'>{`字数 ${words_count}`}</span> : null}
          {views_count ? <span className='user-meta-item'>{`阅读 ${views_count}`}</span> : null}
          {total_words_count ? <span className='user-meta-item'>{`写了${total_words_count}字`}</span> : null}
          {total_likes_count ? <span className='user-meta-item'>{`${total_likes_count}喜欢`}</span> : null}
        </div>
      </div>
    </div>
  );
};
