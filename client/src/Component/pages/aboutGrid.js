import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { theme } from "../../theme";
import { ThemeProvider } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center"
  },
  container: {
    display: "flex",
    justifyContent: "center"
  },

  paper: {
    display: "block",
    width: "80%",
    minHeight: "40px",
    backgroundColor: "rgba(225, 225, 225,0.6)",
    margin: 10,
    padding: 10
  },
  title: {
    width: "fit-content",
    margin: "auto",
    color: "#223C5F"
  },

  btnContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 10
  }
}));

export default function AboutGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item md={12} sm={12} lg={12} className={classes.container}>
        <Paper className={classes.paper}>
          <Typography className={classes.title} variant="h2">
            About Me
          </Typography>
          <ThemeProvider theme={theme}>
            <div className={classes.btnContainer}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.cTButton}
                href="https://drive.google.com/file/d/19bY6bxV1um2cgcwi8B99pMTJ59fBvEed/view?usp=sharing"
                download
              >
                Download Resume
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.cTbutton}
                component={Link}
                to="/contact"
              >
                Send me a message
              </Button>
            </div>
          </ThemeProvider>
        </Paper>
      </Grid>
    </div>
  );
}
