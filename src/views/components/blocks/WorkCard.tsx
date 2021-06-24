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
  
  const WorkCard = () => {
    const classes = useStyles();
  
    return (
      <Card variant="outlined" className={classes.workcard}>
        <CardContent>
          <Typography variant="h4">Rakuten Group Inc. (2022~Now)</Typography>
          <Typography variant="h5">Cloud Platform Department</Typography>
          <Typography variant="h6">Web Application Engineer</Typography>
            <Typography variant="body2">
              <Link>Learn More</Link>
            </Typography>
        </CardContent>
      </Card>
    );
  };
  
  export default WorkCard;