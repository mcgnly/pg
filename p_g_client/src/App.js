import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Feed from './components/Feeds/Feed';
import Profile from './components/Profile/Profile';
import OtherProfile from './components/Profile/OtherProfile';
import EditProfile from './components/Profile/EditProfile';
import PageWrapper from './components/Wrapper/PageWrapper';
import SingleTweetFeed from './components/Feeds/SingleTweetFeed';
import FollowingDrawer from './components/Wrapper/FollowingDrawer';

export default function App() {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState('');

  useEffect(() => {
    console.log('---', sessionStorage, sessionStorage.getItem('loggedin'))
    setIsLoggedIn(sessionStorage.getItem('loggedin') === 'true');
  }, []);

  return (
    <Router>
      <div className={classes.root}>
        <PageWrapper />
        <main className={classes.content}>
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/edit-profile" component={EditProfile} />
            <Route exact path="/profile/:id" component={OtherProfile} />
            <Route exact path="/tweet/:id" component={SingleTweetFeed} />
          </Switch>
        </main>
        <FollowingDrawer />
      </div>
    </Router>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
