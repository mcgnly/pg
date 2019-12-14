import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export default function FollowingDrawer() {
  const classes = useStyles();
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resultUsers = await axios(process.env.REACT_APP_USERS_URL);

      const resultFollows = await axios(process.env.REACT_APP_FOLLOWING_URL);

      const followArray = resultFollows.data.map(followItem => {
        const followUserObj = resultUsers.data.find(userItem => userItem.id === followItem.target);
        return { username: followUserObj.username, profileId: followUserObj.profile };
      });
      setFollowing(followArray);
    }
    fetchData();
  }, []);

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="right"
    >
      <div className={classes.toolbar} />
      <List>
        <ListItem key={'FollowingTitle'}>
          <ListItemText primary={'Following'} />
        </ListItem>
        <Divider />
        {following.map((followItem, index) => {
          return (
            <ListItem button key={index}>
              <Link key={index} to={`/profile/${followItem.profileId}`}>
                <ListItemText key={index} primary={followItem.username} />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}

const drawerWidth = 140;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
}));
