import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring';
import RadioPanel from './radioPanel';
import DeveloperPanel from './developerPanel';

const useStyles = makeStyles(theme => ({
  root: {
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down(400)]: {
      justifyContent: 'space-between'
    },
    zIndex: 2
  },
  name: {
    fontSize: '100px',
    fontWeight: 'bold',
    textShadow: '1px 3px 6px #000000',
    color: '#FFFFFF',
    overflow: 'hidden',
    zIndex: 1,
    marginBottom: 20,
    padding: 20,
    [theme.breakpoints.up(1200)]: {
      fontSize: '150px',
      marginBottom: 5,
      marginLeft: 100
    },
    [theme.breakpoints.down(960)]: { fontSize: '80px', marginBottom: 5 },
    [theme.breakpoints.down(600)]: {
      fontSize: '60px',
      marginBottom: 5
    },
    [theme.breakpoints.down(400)]: {
      fontSize: '30px',
      marginBottom: 5
    }
  },
  btnContainer: {},
  image: {
    display: 'block',
    height: 230,
    width: 230,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '25%',
    marginTop: 20,
    [theme.breakpoints.down(960)]: {
      height: 150,
      width: 150,
      margin: 'auto',
      marginTop: 14
    },
    [theme.breakpoints.down(600)]: {
      height: 150,
      width: 150,
      marginLeft: 20,
      marginTop: 14
    },
    [theme.breakpoints.down(400)]: {
      height: 40,
      width: 40,
      marginLeft: 80,
      backgroundColor: 'transparent !important'
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {},
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`,
    color: '#223C5F',
    [theme.breakpoints.down(400)]: {
      color: 'white'
    }
  }
}));

export default function HomePanel() {
  const classes = useStyles();
  const [module1Expanded, setExpand1] = useState(false);
  const [module2Expanded, setExpand2] = useState(false);

  //update width and height hooks

  const [curHeight, setHeight] = useState(window.innerHeight);
  const [curWidth, setWidth] = useState(window.innerWidth);
  //update size function
  const getSize = () => {
    return {
      height: window.innerHeight,
      width: window.innerWidth
    };
  };
  //react-spring styles
  const styleM1 = useSpring({
    width: module1Expanded ? curWidth : 0.15 * curHeight,
    height: module1Expanded ? curHeight : 0.15 * curHeight,
    zIndex: module1Expanded ? 3 : 2,
    display: module2Expanded ? 'none' : 'flex',
    backgroundColor: module1Expanded
      ? 'rgba(242, 242, 242, 1)'
      : 'rgba(194, 217, 148, 0.9)'
  });

  const styleM2 = useSpring({
    width: module2Expanded ? curWidth : 0.15 * curHeight,
    height: module2Expanded ? curHeight : 0.15 * curHeight,
    zIndex: module2Expanded ? 3 : 2,
    display: module1Expanded ? 'none' : 'flex',
    backgroundColor: module2Expanded
      ? 'rgba(242, 242, 242, 1)'
      : 'rgba(253, 245, 23, 0.8)'
  });

  const nameStyle = {
    display: module1Expanded || module2Expanded ? 'none' : 'block'
  };

  useEffect(() => {
    const resizeListner = () => {
      setHeight(getSize().height);
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListner);
    return () => window.removeEventListener('resize', resizeListner);
  }, [curWidth, curHeight]);

  return (
    <div className="homeContainer">
      <Typography variant="h1" className={classes.name} style={nameStyle}>
        Hi, I am Chase Liu
      </Typography>
      <div className="btnContainer">
        <animated.div
          className="epbtn"
          onClick={() => setExpand1(!module1Expanded)}
          style={styleM1}
        >
          <p
            className="btnText"
            style={{ display: module1Expanded ? 'none' : ' ' }}
          >
            Media Producer
          </p>
          <RadioPanel module1Expanded={module1Expanded} />
        </animated.div>

        <animated.div
          className="devbtn"
          onClick={() => setExpand2(!module2Expanded)}
          style={styleM2}
        >
          <p
            className="btnText"
            style={{ display: module2Expanded ? 'none' : ' ' }}
          >
            Full Stack Developer
          </p>
          <DeveloperPanel module2Expanded={module2Expanded} />
        </animated.div>
      </div>
    </div>
  );
}
