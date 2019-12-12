import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}));

export default function AppDrawer(){
  const classes = useStyles();
  // [{username:'lala', profileId:2}]
  const [following, setFollowing] = useState([])

  useEffect(() => {
    async function fetchData(){
      const resultUsers = await axios(
        process.env.REACT_APP_USERS_URL,
      );

      const resultFollows = await axios(
        process.env.REACT_APP_FOLLOWING_URL,
      );

      const followArray = resultFollows.data.map((followItem)=>{
        const followUserObj = resultUsers.data.find(userItem => userItem.id === followItem.target)
        return { username:followUserObj.username, profileId:followUserObj.profile }
      })
      setFollowing(followArray)
    }
    fetchData();
    }, []);

return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <ul>
          {following.map((followItem, index)=>{
            return (

              <Link  key={index} to={`/profile/${followItem.profileId}`}>
                <li key={index}>{followItem.username}</li>
              </Link>
            )
          }
          )}
        </ul>
      </Drawer>
)
};
