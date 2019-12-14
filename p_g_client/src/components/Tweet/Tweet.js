import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default function Tweet({ text, author, created, id }) {
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

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: '10px'
  },
  pos: {
    marginBottom: 12
  }
});
