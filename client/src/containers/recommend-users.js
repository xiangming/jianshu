import React, { useState, useEffect } from 'react';
import { getPrefix } from '../constants';
import { User } from '../components';

export const RecommendUsers = ({ size = 5 }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${getPrefix()}/users/recommend?size=${size}`);
      const fetchedData = await res.json();
      setData(fetchedData);
      return fetchedData;
    };
    fetchData();
  }, []);

  console.log('RecommendUsers data', data);

  return data ? (
    <div className='section'>
      <h3 className='section-title'>推荐作者</h3>
      {data.map((item, index) => (
        <User key={index} {...item} />
      ))}
    </div>
  ) : null;
};
