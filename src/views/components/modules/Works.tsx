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
    name: "rakuten",
    year: "2022~",
    depart: "CPD",
    position: "web app eng",
    details: "",
    link: "learn more",
  };
  const now: WorkCardType = {
    name: "Tokyo Tech",
    year: "Now~2022",
    depart: '',
    position: '',
    details: '',
    link: '',
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
