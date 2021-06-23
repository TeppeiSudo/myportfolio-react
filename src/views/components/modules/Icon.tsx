import { Container, Typography, Grid, Avatar, IconButton, SvgIcon } from "@material-ui/core";
import ContactButtons from "../blocks/ContactButtons";
import useStyles from "style/style";

const Icon = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false}>
      <div id="" className={classes.offset} />
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="flex-start"
        className={classes.icon}
      >
        <Grid item xs={4}>
          <Avatar src="psyduck.jpg" className={classes.avatar} />
        </Grid>
        <Grid item xs={4} className={classes.avatartext}>
          <Typography variant="h1">I'm Teppei</Typography>
          <Typography variant="body1">A software engineer.</Typography>
          <ContactButtons />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Icon;
