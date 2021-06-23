import { IconButton, ButtonGroup, Container } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Mail from "@material-ui/icons/Mail";
import useStyles from "style/style";

const ContactButtons = () => {
  const classes = useStyles();

  return (
    <ButtonGroup color="primary">
      <IconButton>
        <TwitterIcon className={classes.buttongroup} />
      </IconButton>
      <IconButton>
        <GitHubIcon className={classes.buttongroup} />
      </IconButton>
      <IconButton>
        <LinkedInIcon className={classes.buttongroup} />
      </IconButton>
      <IconButton>
        <Mail className={classes.buttongroup} />
      </IconButton>
    </ButtonGroup>
  );
};

export default ContactButtons;
