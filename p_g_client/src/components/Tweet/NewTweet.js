import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export default function NewTweet() {
  const classes = useStyles();
  const [textContents, setTextContents] = useState('');

  return (
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
          onChange={e => {
            setTextContents(e.target.value);
          }}
        />
      </CardContent>
      <CardActions>
        <Typography className={classes.pos} color="textSecondary">
          {`${textContents.length}/160`}
        </Typography>
        <Button size="small">Tweet</Button>
      </CardActions>
    </Card>
  );
}

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    margin: '10px',
    marginTop: '50px'
  },
  pos: {
    marginBottom: 12
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 200,
    width: '97%'
  }
}));
