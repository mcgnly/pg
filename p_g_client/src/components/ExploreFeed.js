import React from 'react';
import Tweet from './Tweet';
import NewTweet from './NewTweet'

export default function ExploreFeed(){
return (  
  <div>
  Trends for you:
  # cats
  # dogs
  # birds
    <NewTweet />
    <Tweet />
    <Tweet />
    <Tweet />
  </div>
  )
}