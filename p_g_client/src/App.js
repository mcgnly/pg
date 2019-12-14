import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Feed from './components/Feed';
import Profile from './components/Profile';
import OtherProfile from './components/OtherProfile';
import EditProfile from './components/EditProfile';
import PageWrapper from './components/PageWrapper';
import SingleTweetFeed from './components/SingleTweetFeed';

export default function App() {
  const classes = useStyles();

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
