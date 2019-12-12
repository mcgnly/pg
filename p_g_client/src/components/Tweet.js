import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";


const useStyles = makeStyles({
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
});

export default function Tweet({text, author, created, id}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.pos} color="textSecondary">
          {`@${author}`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {created}
        </Typography>
        <Link to={`/tweet/${id}`}>
          <Typography variant="body2" component="p">
          {text}
          <br />
          </Typography>
        </Link>
        </CardContent>
    </Card>
  );
}