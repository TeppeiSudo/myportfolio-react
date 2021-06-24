import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import { TimelineOppositeContent } from "@material-ui/lab";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Typography, Link } from "@material-ui/core";
import { Card, CardActions, CardContent, Button } from "@material-ui/core/";
import useStyles from "style/style";

export type EducationCardType = {
  name: string;
  year: string;
  depart: string;
  position: string;
  details: string;
  link: string;
};

const EducationCard = (props: EducationCardType) => {
  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineOppositeContent>{props.year}</TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Card variant="outlined" className={classes.workcard}>
          <CardContent>
            <Typography variant="h4">{props.name}</Typography>
            <Typography variant="h5">{props.depart}</Typography>
            <Typography variant="h6">{props.position}</Typography>
            <Typography variant="body2">{props.details}</Typography>
            <Typography variant="body2">
              <Link>{props.link}</Link>
            </Typography>
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};

export default EducationCard;
