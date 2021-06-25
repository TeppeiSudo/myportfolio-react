import {
  Typography,
  Link,
  Grid,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Star } from "@material-ui/icons";
import { Card, CardContent } from "@material-ui/core/";
import useStyles from "style/style";
import { grey, blue, yellow } from "@material-ui/core/colors";

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
