import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { DialogContent, DialogActions } from "@material-ui/core";

const useStyles = makeStyles({
  message: { fontSize: "2vw", color: "#223C5F" }
});

export default function Feedback(props) {
  const classes = useStyles();
  const { onClose, open, messageTitle, messageStatus } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="message feedback"
      open={open}
    >
      <DialogTitle id="feedback form">{messageTitle}</DialogTitle>
      <DialogContent>
        {messageStatus ? (
          <Typography className={classes.message}>
            <BeenhereIcon style={{ marginLeft: 5, fontSize: "2vw" }} />
            Thank you for your message, I will contact you soon!
          </Typography>
        ) : (
          <Typography className={classes.message}>
            <ErrorOutlineIcon style={{ marginLeft: 5, fontSize: "2vw" }} />
            Hmm..Something is wrong, doube check your input?
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Dismiss
        </Button>
      </DialogActions>
    </Dialog>
  );
}
