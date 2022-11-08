import React, { useState, useEffect } from 'react';
import { getPrefix } from '../constants';
import { Item } from '../components';

export const UserPosts = ({ user_id, size = 3 }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${getPrefix()}/posts?user_id=${user_id}&size=${size}`);
      const fetchedData = await res.json();
      setData(fetchedData);
      return fetchedData;
    };
    fetchData();
  }, []);

  console.log('UserPosts data', data);

  return data ? data.map((item, index) => <Item key={index} {...item} />) : <div>loading</div>;
};
