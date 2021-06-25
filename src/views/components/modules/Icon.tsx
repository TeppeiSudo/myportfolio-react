import { Container, Typography, Grid, Avatar, IconButton, SvgIcon } from "@material-ui/core";
import ContactButtons from "../blocks/ContactButtons";
import useStyles from "style/style";

const Icon = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='xl'>
      <div id="" className={classes.offset} />
      <Grid
        container
        spacing={0}
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.icon}
      >
        <Grid item xs={3}>
          <Avatar src="psyduck.jpg" className={classes.avatar} />
        </Grid>
        <Grid item xs={4} className={classes.avatartext}>
          <Typography variant="h2">Hello, I'm Teppei</Typography>
          <Typography variant="body1">A software engineer</Typography>
          <ContactButtons />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Icon;
