import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPrefix } from '../constants';
import { User, SuspendedPanel } from '../components';
import { UserPosts, RecommendPosts } from '../containers';

export const DetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    // fetch content with id
    const fetchData = async () => {
      const res = await fetch(`${getPrefix()}/posts/${id}`);
      const fetchedData = await res.json();
      setData(fetchedData);
      return fetchedData;
    };
    fetchData();
  }, []);

  console.log('DetailPage data', data);

  return data ? (
    <div>
      <div className='page'>
        <main className='main'>
          <h1 className='page-title'>{data.title}</h1>
          <User {...data.user} date={data.date} words_count={data.words_count} views_count={data.views_count} />
          <article className='section' dangerouslySetInnerHTML={{ __html: data.content }} />
        </main>
        <aside className='side'>
          <div className='section'>
            <User {...data.user} />
            <UserPosts user_id={data.user_id} />
          </div>
          <RecommendPosts />
        </aside>
      </div>
      <SuspendedPanel />
    </div>
  ) : (
    <div>loading</div>
  );
};
