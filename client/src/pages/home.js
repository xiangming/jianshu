import React from 'react';
import { Banner } from '../components';
import { PostList, RecommendUsers } from '../containers';

export const HomePage = () => {
  return (
    <div className='page'>
      <main className='main'>
        <Banner />
        <PostList />
      </main>
      <aside className='side'>
        <RecommendUsers />
      </aside>
    </div>
  );
};
