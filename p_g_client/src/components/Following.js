import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FollowingItem from './FollowingItem';

export default function Following() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(process.env.REACT_APP_TWEETS_URL);
      setData(result.data.results);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <FollowingItem key={index} text={item.text} username={item.username} url={item.url} />
      ))}
    </div>
  );
}
