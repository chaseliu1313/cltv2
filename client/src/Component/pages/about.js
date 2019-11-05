import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { theme } from '../../theme';
import AboutCard from '../aboutCard';
import AboutGrid from './aboutGrid';
import Zoom from '@material-ui/core/Zoom';
import radio from '../../img/1radio.png';
import podcast from '../../img/2podcast.png';
import mel from '../../img/3mel.png';
import adidas from '../../img/4adidas.png';
import sydney from '../../img/5sydney.png';
import toronto from '../../img/6toronto.png';
import aboutBackground from '../../img/aboutBackground.svg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',

    //backgroundImage: `url(${Background3})`,
    //backgroundSize: ' cover',

    alignItems: 'center',
    backgroundImage: `url(${aboutBackground})`,
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover',

    [theme.breakpoints.down(960)]: {
      //backgroundImage: 'linear-gradient(-90deg, #1F3459, #4FA9A9)'
    },
    [theme.breakpoints.down(600)]: {},
    [theme.breakpoints.down(400)]: {}
  },
  item: {
    padding: 15
  }
}));

const cards = [
  {
    mediaPath: radio,
    title: 'Radio Host & Producer',
    descrip:
      'Being a radio host, news presenter, reporter and producer at a state-owned radio station in Jiangxi, China.',
    year: { number: 2014, from: { number: 2008 } },
    delay: '0ms'
  },
  {
    mediaPath: podcast,
    title: 'Podcast Producer',
    descrip:
      'Media company owner, created the first medical podcast show in China, reached 10 million hits, and over 1 million subscriptions.',
    year: { number: 2017, from: { number: 2012 } },
    delay: '1000ms'
  },
  {
    mediaPath: mel,
    title: 'Moved to Melbourne, Australia',
    descrip:
      'Studied Master of Information Technology program, graduated with distinction.',
    year: { number: 2017, from: { number: 2015 } },
    delay: '2000ms'
  },
  {
    mediaPath: adidas,
    title: 'On the path of becoming a developer',
    descrip:
      'Social media management, SEO, Magento, email server, website debugging and maintainance for adidas combat sports Australia.',
    year: { number: 2018, from: { number: 2017 } },
    delay: '3000ms'
  },
  {
    mediaPath: sydney,
    title: 'Frontend developer!',
    descrip:
      'Worked as a frontend developer, IT support, tech consultant in Sydney, Australia.',
    year: { number: 2018, from: { number: 2018 } },
    delay: '4000ms'
  },
  {
    mediaPath: toronto,
    title: 'New start!',
    descrip: 'Settling down in Toronto, Canada, YAY',
    year: { number: 2019, from: { number: 2019 } },
    delay: '5000ms'
  }
];

export default function About() {
  const classes = useStyles(theme);

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <div className={classes.root}>
      <Grid container>
        <AboutGrid />
        {cards.map(card => (
          <Zoom
            in={load}
            style={{ transitionDelay: card.delay }}
            key={card.title}
          >
            <Grid item xs={12} md={6} className={classes.item} key={card.title}>
              <AboutCard
                mediaPath={card.mediaPath}
                descrip={card.descrip}
                title={card.title}
                year={card.year}
              ></AboutCard>
            </Grid>
          </Zoom>
        ))}
      </Grid>
    </div>
  );
}

/*

load && (
              <animated.div key={key} style={props}>
                <Grid item xs={12} md={6} className={classes.item}>
                  <AboutCard
                    mediaPath={item.mediaPath}
                    descrip={item.descrip}
                    title={item.title}
                    year={item.year}
                  ></AboutCard>
                </Grid>
              </animated.div>
            )



(
          <animated.div key={key} style={props}>
            <Grid item xs={12} md={6} className={classes.item}>
              <AboutCard
                mediaPath={card.mediaPath}
                descrip={card.descrip}
                title={card.title}
                year={card.year}
              ></AboutCard>
            </Grid>
          </animated.div>
        )

<Transition
          items={cards}
          
          keys={card => card.title}
          from={{ transform: 'translate3d(0,-80px,0)' }}
          enter={{ transform: 'translate3d(0,0px,0)' }}
        >
          {card => props => (
            <Grid
              item
              xs={12}
              md={6}
              className={classes.item}
              key={card.title}
              style={props}
            >
              <AboutCard
                mediaPath={card.mediaPath}
                descrip={card.descrip}
                title={card.title}
                year={card.year}
              ></AboutCard>
            </Grid>
          )}
        </Transition>

 {cards.map(card => (
          <Grid item xs={12} md={6} className={classes.item} key={card.title}>
            <AboutCard
              mediaPath={card.mediaPath}
              descrip={card.descrip}
              title={card.title}
              year={card.year}
            ></AboutCard>
          </Grid>
        ))}

export function AniYear(props) {
  //{ number: 1, from: { number: 0 } }
  const prop = useSpring({
    config: { duration: 2000, precision: 0.1, friction: 500 },
    number: props.year.number,
    from: props.year.from
  });
  return (
    <Grid container>
      <Grid item md={6} xs={12}>
        <animated.span style={{ fontSize: 70 }}>
          {prop.number.interpolate(number => Math.floor(number))}
        </animated.span>
      </Grid>
    </Grid>
  );
}

  <Zoom in={load}>
        <Grid container spaceing={3} style={{}}>
          <Grid item xs={12} md={3} lg={3} className={classes.leftPanel}>
            <Typography variant="h3" className={classes.title}>
              a little more about me...
            </Typography>
          </Grid>
          <Grid item xs={12} md={9} lg={9} className={classes.rightPanel}>
            <AboutGrid />
          </Grid>
        </Grid>
      </Zoom>



      title: {
    fontSize: '60px',
    fontWeight: 'bold',
    textShadow: '1px 3px 6px #000000',
    color: '#FFFFFF',
    padding: '15px',
    [theme.breakpoints.down(600)]: {
      fontSize: '30px'
    },
    [theme.breakpoints.down(400)]: {
      fontSize: '20px'
    }
  },
  leftPanel: {
    display: 'flex',
    alignItems: 'center'
  },
  rightPanel: {}
*/
