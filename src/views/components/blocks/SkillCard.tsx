import React from "react";
import { Typography, Link, Grid, DialogTitle } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import {
  Card,
  CardContent,
  CardActionArea,
  Dialog,
  Slide,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core";
import { cyan, grey, blue, blueGrey, yellow } from "@material-ui/core/colors";
import { TransitionProps } from "@material-ui/core/transitions";

export type SkillCardType = {
  font: JSX.Element;
  name: string;
  star: number;
  details: string;
  moredetails: string;
};

const useStyles = makeStyles({
  skillcard: {
    minWidth: "18vh",
    minHeight: "20vh",
    fontSize: 34,
    margin: "auto",
  },
  dialog: {
    minWidth: "40vh",
    maxWidth: "45vh",
    minHeight: "40vh",
    color: blueGrey[400],
    //color: blue[700],
    //color: yellow[700],
    textAlign: "center",
    margin: "4vh",
  },
})

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SkillCard = (props: SkillCardType) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.star) {
      stars.push(<Star style={{ color: blue[600] }} />);
    } else {
      stars.push(<Star style={{ color: grey[500] }} />);
    }
  }

  return (
    <Grid item container direction="column" justify="center" xs={2}>
      <Card variant="outlined">
        <CardActionArea onClick={handleClickOpen}>
          <CardContent className={classes.skillcard}>
            {props.font}
            <Typography variant="h5">{props.name}</Typography>
            {stars}
            <Typography variant="body2">{props.details}</Typography>
            <Typography variant="body2">
              <Link style={{ color: blue[600] }}>Learn More</Link>
            </Typography>
          </CardContent>
        </CardActionArea>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          BackdropProps={{ style: { backgroundColor: "transparent" } }}
        >
          <Card variant="outlined">
            <CardContent className={classes.dialog}>
              <Grid style={{fontSize: 100}}>
              {props.font}
              </Grid>
              <Typography color="primary" variant="h4">{props.name}</Typography>
              {stars}
              <Typography variant="body2">{props.details}</Typography>
              <Typography color="primary" variant="h6">
                {props.moredetails}
              </Typography>
            </CardContent>
          </Card>
        </Dialog>
      </Card>
    </Grid>
  );
};

export default SkillCard;
