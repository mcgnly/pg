import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export default function EditProfile() {
  const classes = useStyles();
  const [textContents, setTextContents] = useState('');

  const submitEdit = async () => {
    const result = await axios.put(process.env.REACT_APP_MY_PROFILE_URL, {
      bio: textContents
    });
  };

  return (
    <Paper className={classes.root}>
      <TextField
        id="outlined-multiline-static"
        multiline
        rows="4"
        placeholder="What's happening?"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        inputProps={{ maxLength: 160 }}
        onChange={e => {
          setTextContents(e.target.value);
        }}
      />
      <Typography className={classes.pos} color="textSecondary">
        {`${textContents.length}/160`}
      </Typography>
      <Button className={classes.btn} variant="contained" color="primary" onClick={submitEdit}>
        Submit
      </Button>
    </Paper>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
    padding: theme.spacing(1)
  },
  pos: {
    marginBottom: 12
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '97%'
  },
  btn: {
    padding: '0, 50px'
  }
}));
