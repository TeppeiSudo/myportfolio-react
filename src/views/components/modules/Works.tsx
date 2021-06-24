import { Container, Typography } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import useStyles from "style/style";
import WorkCard, { WorkCardType } from "../blocks/WorkCard";

const Works = () => {
  const classes = useStyles();
  const rakuten: WorkCardType = {
    name: "Rakuten Group Inc.",
    year: "2022.4~",
    depart: "Cloud Platform Department",
    position: "Web Application Engineer",
    details: "scheduled to join the company in 2022.4",
    link: "#",
  };
  const now: WorkCardType = {
    name: "Tokyo Institute of Technology",
    year: "Now~2022.3",
    depart: 'Eloctrical and Electronics',
    position: "Graduate Student",
    details: 'expected graduation in 2022.3',
    link: '#',
  }

  return (
    <Container maxWidth="lg" className={classes.content}>
      <div id="works" className={classes.offset} />
      <Typography variant="h3">works</Typography>
      <Timeline className={classes.timeline}>
        <WorkCard {...rakuten} />
        <WorkCard {...now} />
      </Timeline>
    </Container>
  );
};

export default Works;
