import React, { useState, useEffect } from 'react';
import { getPrefix } from '../constants';
import { Item } from '../components';

export const RecommendPosts = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${getPrefix()}/posts/recommend`);
      const fetchedData = await res.json();
      setData(fetchedData);
      return fetchedData;
    };
    fetchData();
  }, []);

  console.log('RecommendPosts data', data);

  return data ? (
    <div className='section'>
      <h3 className='section-title'>推荐阅读</h3>
      {data.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  ) : null;
};
