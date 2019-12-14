import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function OtherProfile() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const url = `${process.env.REACT_APP_PROFILE_URL}${id}/`;
      const result = await axios(url);
      setData(result.data);
    }
    fetchData();
  }, [id]);

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        {data.author}
      </Typography>
      <Typography component="p">{data.bio}</Typography>
    </Paper>
  );
}
