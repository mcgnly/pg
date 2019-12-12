import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: '100px'
  },
}));

export default function Profile() {
  const [data, setData] = useState({bio: 'nothing provided'})

  useEffect(() => {
    async function fetchData(){
      const url= process.env.REACT_APP_MY_PROFILE_URL
      const result = await axios(url);
      setData(result.data[0]);
    }
    fetchData();
  }, []);


  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        {data.author}
      </Typography>
      <Typography component="p">
        {data.bio}
      </Typography>
      <Link to='/edit-profile'>Edit profile</Link>
    </Paper>
  );
}