import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  footer: {
    color: grey[50],
    backgroundColor: "#282c34",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.footer}>
      <BottomNavigationAction
        label="twitter"
        icon={<TwitterIcon color="secondary" />}
      />
      <BottomNavigationAction
        label="github"
        icon={<GitHubIcon color="secondary" />}
      />
      <BottomNavigationAction
        label="linkedin"
        icon={<LinkedInIcon color="secondary" />}
      />
      <BottomNavigationAction
        label="mail"
        icon={<MailOutlineIcon color="secondary" />}
      />
    </BottomNavigation>
  );
};

export default Footer;
