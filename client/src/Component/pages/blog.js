import React, { Fragment, useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import BG1 from "../../img/blogBg.svg";
import { makeStyles } from "@material-ui/core/styles";
import CodeIcon from "@material-ui/icons/Code";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import Collapse from "@material-ui/core/Collapse";

import { theme } from "../../theme";

const useStyles = makeStyles({
  upperCard: {
    height: "90vh",
    width: " 100%",
    display: "flex",
    alignItems: "center",
    backgroundImage: `url(${BG1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    marginTop: 17,
    filter: "blur(8px)",
    WebkitFilter: "blur(8px)"
  },
  title: {
    width: "fit-content",
    margin: "auto",

    color: "#1C314C",
    fontWeight: "bold",
    fontSize: "5vw",
    position: "absolute",
    top: "40%",
    left: "20%",
    zIndex: 2
  }
});

export default function Blog() {
  const classes = useStyles(theme);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <Collapse in={load} collapsedHeight="40px">
      <Fragment>
        <div className={classes.upperCard}></div>
        <Typography className={classes.title}>
          <CodeIcon style={{ marginLeft: 5, fontSize: "4vw" }} />
          Blog is coming soon
          <AvTimerIcon style={{ marginRight: 5, fontSize: "4vw" }} />
        </Typography>
      </Fragment>
    </Collapse>
  );
}
