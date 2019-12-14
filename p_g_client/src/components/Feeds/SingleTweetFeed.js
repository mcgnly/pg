import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Tweet from '../Tweet/Tweet';

export default function SingleTweetFeed() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resultTweet = await axios(`${process.env.REACT_APP_TWEETS_URL}${id}/`);
      setData(resultTweet.data);
      const resultReplies = await axios(process.env.REACT_APP_REPLIES_URL);
      setReplies(resultReplies.data.filter(item => item.target == id));
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <Tweet
        key={data.index}
        text={data.text}
        author={data.author}
        created={data.created}
        url={data.url}
      />
      {replies.map((item, index) => (
        <Tweet
          key={`reply${index}`}
          text={item.text}
          author={item.author}
          created={item.created}
          url={item.url}
        />
      ))}
    </div>
  );
}
