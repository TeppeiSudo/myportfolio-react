import {
  Typography,
  Link,
  CardActionArea,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core/";
import { grey, blue, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  projectcard: {
    maxWidth: "40vh",
    minWidth: "40vh",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
})

export type ProjectCardType = {
  image: string;
  name: string;
  details: string;
  link: string;
};

const ProjectCard = (props: ProjectCardType) => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.projectcard}>
      <CardActionArea href={props.link}>
        <CardContent>
          <CardMedia image={props.image} src="img" className={classes.media} />
          <Typography variant="h5">{props.name}</Typography>
          <Typography variant="body2">{props.details}</Typography>
          <Typography variant="body2">
            <Link href={props.link} style={{ color: blue[600] }}>
              Learn More
            </Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
