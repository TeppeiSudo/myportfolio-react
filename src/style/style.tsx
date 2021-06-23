import { makeStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import theme from "./theme";

const useStyles = makeStyles({
  headername: {
    flexGrow: 1,
  },
  top: {
    color: grey[50],
    backgroundColor: "#282c34",
    minHeight: "88vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    textAlign: "center",
  },
  avatar: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    margin: "auto",
  },
  avatartext: {
    marginTop: "5vh",
  },
  icon: {
    marginTop: "-10vh",
    marginBottom: "10vh",
  },
  buttongroup: {
    fontSize: 60,
    margin: "auto",
  },
  portfolio: {
    color: grey[900],
    backgroundColor: grey[50],
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    textAlign: "center",
    marginTop: "100px",
    paddingTop: "100px",
  },
  content: {
    minHeight: "50vh",
  },
  offset: theme.mixins.toolbar,
  link: {
    color: "#61dafb",
  },
  footer: {
    color: grey[50],
    backgroundColor: "#282c34",
  },
});

export default useStyles;
