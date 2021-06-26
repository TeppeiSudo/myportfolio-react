import { Container, Grid, Typography } from "@material-ui/core";
import useStyles from "style/style";
import ProjectCard, { ProjectCardType } from "../blocks/ProjectCard";

const Projects = () => {
  const classes = useStyles();
  const portfolio: ProjectCardType = {
    image: "/portfolio_img.png",
    name: "Portfolio Web Site",
    details: `This site. Used TypeScript, React, Material-UI, 
      and hosted with Github-pages. 
      Source code is in public repository, click here!`,
    link: "#",
  };
  const atcoder: ProjectCardType = {
    image: "/atcoder.png",
    name: "Competitive Programing",
    details: `I offten attend a competitive programing contest. 
    AtCoder is the most biggest contest site in Japan. 
    My current rating is about 600 (colored brown) as of June 2020. 
    I use Python(PyPy3).`,
    link: "#",
  };
  const kaggle: ProjectCardType = {
    image: "/signate.png",
    name: "Data Science Competition",
    details: `I'm always looking for a right competition to win in Kaggle, 
    SIGNATE, Nishika, atmacup, etc. I have won the some medals, check it out.
    If you're looking for a team merger, you can contact me on click here.`,
    link: "#",
  };

  return (
    <Container maxWidth="lg" className={classes.content}>
      <div id="projects" className={classes.offset} />
      <Typography variant="h3">projects & activities</Typography>
      <div className={classes.offset} />
      <Grid
        container
        xs={12}
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <ProjectCard {...portfolio} />
        </Grid>
        <Grid item xs={4}>
          <ProjectCard {...atcoder} />
        </Grid>
        <Grid item xs={4}>
          <ProjectCard {...kaggle} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
