import { Container, Typography, Grid } from "@material-ui/core";
import useStyles from "style/style";
import SkillCard from "../blocks/SkillCard";

const Skills = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.content}>
      <div id="skills" className={classes.offset} />
      <Typography variant="h3">skills</Typography>
      <div className={classes.offset} />
      <Grid
        container
        spacing={2}
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <SkillCard />
        </Grid>
        <Grid item xs={2}>
          <SkillCard />
        </Grid>
        <Grid item xs={2}>
          <SkillCard />
        </Grid>
        <Grid item xs={2}>
          <SkillCard />
        </Grid>
        <Grid item xs={2}>
          <SkillCard />
        </Grid>

        <Grid item xs={2}>
          <SkillCard />
        </Grid>
        <Grid item xs={2}>
          <SkillCard />
        </Grid>
        <Grid item xs={2}>
          <SkillCard />
        </Grid>
        <Grid item xs={2}>
          <SkillCard />
        </Grid>
        <Grid item xs={2}>
          <SkillCard />
        </Grid>

      </Grid>
    </Container>
  );
};

export default Skills;
