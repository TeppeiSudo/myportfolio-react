import React from "react";
import { makeStyles, Grid, Container } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import Contact from "views/components/modules/Contact";

const useStyles = makeStyles({
  root: {
    color: grey[900],
    backgroundColor: "#ffffff",
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "12vh",
    marginBottom: "12vh",
  },
});

const ContactPage = () => {
  const classes = useStyles();
  return (
      <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={2} direction="column">
        <Contact />
      </Grid>
    </Container>
  );
};

export default ContactPage;
