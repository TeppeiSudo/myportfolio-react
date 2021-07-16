import React, { useState, useCallback } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import theme from "style/theme";

const useStyles = makeStyles({
  offset: theme.mixins.toolbar,
});

const Contact = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted == false) {
    return (
      <React.Fragment>
        <Grid item>
          <Typography variant="h2">{"Contact Form"}</Typography>
        </Grid>
        <Grid item>
          <TextField
            id="name"
            placeholder={"Teppei Sudo"}
            fullWidth
            helperText={"Name"}
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            id="email"
            required
            placeholder={"abc@example.com"}
            fullWidth
            helperText={"email address"}
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            id="subject"
            placeholder={"about my favorit animals"}
            fullWidth
            helperText={"subject"}
            variant="outlined"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            id="body"
            required
            label={"drop your message here"}
            variant="outlined"
            multiline
            rows={10}
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            fullWidth
            type="submit"
            onClick={handleSubmit}
            disabled={name == "" || email == "" || message == ""}
          >
            send
          </Button>
        </Grid>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Typography variant="h2">{"Hi " + name + " !!"}</Typography>
        <Typography variant="body1">
          {"Thank you for sending your message !"}
        </Typography>
        <Typography variant="body1">
          {"I'll check your message soon :)"}
        </Typography>
        <Typography variant="body1">
          {
            "If there's no response from me, try to use other way like Twitter etc. "
          }
        </Typography>
      </React.Fragment>
    );
  }
};

export default Contact;
