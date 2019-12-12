import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    margin: '10px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function EditProfile() {
  const classes = useStyles();
  const [textContents, setTextContents] = useState('')

  const submitEdit = async ()=>{
    const result = await axios.put(
          process.env.REACT_APP_MY_PROFILE_URL,
          {
            bio:textContents
          }
        );
  }

  return (
    <Paper className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows="4"
            placeholder="What's happening?"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            inputProps={{ maxLength: 160 }}
            onChange={e => { setTextContents(e.target.value) }}
          />
        </CardContent>
        <CardActions>
        <Typography className={classes.pos} color="textSecondary">
          {`${textContents.length}/160`}
        </Typography>
          <Button size="small" onClick={submitEdit}>Submit</Button>
        </CardActions>
      </Card>
    </Paper>
  );
}
