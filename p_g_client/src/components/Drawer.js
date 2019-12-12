import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function AppDrawer(){
  const classes = useStyles();
return (
  <div>
    <div className={classes.toolbar} />
    <List>
      <ListItem button key={'Home'}>
        <Link to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary={'Home'} />
        </Link>
      </ListItem>
      <ListItem button key={'Profile'}>
        <Link to="/profile">
          <ListItemIcon><AccountCircleIcon /></ListItemIcon>
          <ListItemText primary={'Profile'} />
        </Link>
      </ListItem>
      <ListItem button key={'Login'}>
        <a href={process.env.REACT_APP_LOGIN_URL}>
          <ListItemIcon><AccountCircleIcon /></ListItemIcon>
          <ListItemText primary={'Login'} />
        </a>
      </ListItem>
    </List>
  </div>
)
};