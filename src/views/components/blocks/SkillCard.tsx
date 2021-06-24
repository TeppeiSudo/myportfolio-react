import { Typography, Link, Grid } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Star } from "@material-ui/icons";
import { Card, CardContent } from "@material-ui/core/";
import useStyles from "style/style";
import { grey, blue, yellow } from "@material-ui/core/colors";

export type SkillCardType = {
  font: JSX.Element;
  name: string;
  star: number;
  details: string;
};

const SkillCard = (props: SkillCardType) => {
  const classes = useStyles();
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.star) {
      stars.push(<Star style={{ color: blue[600] }} />);
    } else {
      stars.push(<Star style={{ color: grey[500] }} />);
    }
  }

  return (
    <Grid item xs={2}>
      <Card variant="outlined" className={classes.skillcard}>
        <CardContent>
          {props.font}
          <Typography variant="h5">{props.name}</Typography>
          {stars}
          <Typography variant="body2">{props.details}</Typography>
          <Typography variant="body2">
            <Link style={{ color: blue[600] }} >Learn More</Link>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SkillCard;
