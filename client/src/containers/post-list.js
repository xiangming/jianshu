import React, { useState, useEffect } from 'react';
import { getPrefix } from '../constants';
import { Post } from '../components';

export const PostList = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${getPrefix()}/posts`);
      const fetchedData = await res.json();
      setData(fetchedData);
      return fetchedData;
    };
    fetchData();
  }, []);

  console.log('PostList data', data);

  return data ? (
    <ul className='post-list'>
      {data.map((item, index) => (
        <Post key={index} {...item} />
      ))}
    </ul>
  ) : (
    <div>loading</div>
  );
};
