import {
  IconButton,
  ButtonGroup,
  Container,
  Typography,
  Link,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Star } from "@material-ui/icons";
import { Card, CardActions, CardContent, Button } from "@material-ui/core/";
import useStyles from "style/style";
import React from "react";

const SkillCard = () => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.skillcard}>
      <CardContent>
        <TwitterIcon />
        <Typography variant="h5">Twitter</Typography>
        <Star /><Star /><Star /><Star /><Star />
          <Typography variant="body2">
            <Link>Learn More</Link>
          </Typography>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
