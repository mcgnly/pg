import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tweet from './Tweet';
import NewTweet from './NewTweet'
import { Link } from "react-router-dom";


export default function Feed(){

  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData(){
    const result = await axios(
      process.env.REACT_APP_TWEETS_URL,
    );
    setData(result.data);
  }
  fetchData();
  }, []);
  
  return (  
    <div>
      <NewTweet />
      {data.map((item)=>(
          <Tweet text={item.text} author={item.author} created={item.created} id={item.id} />
        ))}
    </div>
    )
}