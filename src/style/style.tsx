import { makeStyles } from "@material-ui/core";
import theme from "./theme";

const useStyles = makeStyles({
  workcard: {
    maxWidth: "70vh",
  },
  content: {
    minHeight: "50vh",
  },
  timeline: {
    textAlign: "left",
    marginLeft: "-40vh",
  },
  offset: theme.mixins.toolbar,
  link: {
    color: "#61dafb",
  },
});

export default useStyles;
