import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import CopyToClipBoard from "react-copy-to-clipboard";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { MailTooltip } from "../blocks/ContactButtons";
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
        href="https://twitter.com/sp_yduck"
      />
      <BottomNavigationAction
        label="github"
        icon={<GitHubIcon color="secondary" />}
        href="https://github.com/TeppeiSudo"
      />
      <BottomNavigationAction
        label="linkedin"
        icon={<LinkedInIcon color="secondary" />}
        href="https://www.linkedin.com/in/%E5%93%B2%E5%B9%B3-%E6%95%B0%E8%97%A4-3499b2190/?locale=en_US&success=true"
      />
      <BottomNavigationAction
        label="mail"
        icon={
          <MailTooltip title="Click to copy my email address to your clip bord!">
            <CopyToClipBoard text={"sudo20.t.ab@gmail.com"}>
              <MailOutlineIcon color="secondary" />
            </CopyToClipBoard>
          </MailTooltip>
        }
      />
    </BottomNavigation>
  );
};

export default Footer;
