import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles({
  card: { width: '100%', maxHeight: 510 },
  img: {
    width: '100%',
    height: '800%',
    objectFit: 'cover'
  }
});

export default function AboutCard(props) {
  const classes = useStyles();
  const { mediaPath, descrip, title, year, delay } = props;
  const prop = useSpring({
    config: { duration: 2000, mass: 1, tension: 120, friction: 14 },
    number: year.number,
    from: year.from,
    delay: parseInt(delay) * 3
  });

  return (
    <animated.div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.img}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            title="Contemplative Reptile"
            image={mediaPath}
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {descrip}
            </Typography>
            <animated.span style={{ fontSize: 70 }}>
              {prop.number.interpolate(number => Math.floor(number))}
            </animated.span>
          </CardContent>
        </CardActionArea>
      </Card>
    </animated.div>
  );
}
