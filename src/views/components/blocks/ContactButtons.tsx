import {
  IconButton,
  ButtonGroup,
  makeStyles,
  Typography,
  Tooltip,
} from "@material-ui/core";
import React from "react";
import CopyToClipBoard from "react-copy-to-clipboard";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Mail from "@material-ui/icons/Mail";
import { withStyles } from "@material-ui/styles";
import { Theme } from "pretty-format/build/types";

const useStyles = makeStyles({
  buttongroup: {
    fontSize: 60,
    margin: "auto",
  },
});

export const MailTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    fontSize: 20,
    padding: "2vh",
  },
}))(Tooltip);

const ContactButtons = () => {
  const classes = useStyles();

  return (
    <ButtonGroup color="primary">
      <IconButton href="https://twitter.com/sp_yduck">
        <TwitterIcon className={classes.buttongroup} />
      </IconButton>
      <IconButton href="https://github.com/TeppeiSudo">
        <GitHubIcon className={classes.buttongroup} />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/%E5%93%B2%E5%B9%B3-%E6%95%B0%E8%97%A4-3499b2190/?locale=en_US&success=true">
        <LinkedInIcon className={classes.buttongroup} />
      </IconButton>
      <MailTooltip title="Click to copy my email address to your clip bord!">
        <IconButton>
          <CopyToClipBoard text={"sudo20.t.ab@gmail.com"}>
            <Mail className={classes.buttongroup} />
          </CopyToClipBoard>
        </IconButton>
      </MailTooltip>
    </ButtonGroup>
  );
};

export default ContactButtons;
