import { makeStyles } from "@material-ui/core";
import grey from '@material-ui/core/colors/grey'
import theme from "./theme";

const useStyles = makeStyles({
  header: {
    flexGrow: 1,
  },
  top: {
    color: grey[50],
    backgroundColor: "#282c34",
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    textAlign: 'center',
  },
  portfolio: {
    color: grey[900],
    backgroundColor: grey[50],
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    textAlign: 'center',
  },
  link: {
    color: '#61dafb',
  },
  footer: {
    color: grey[50],
    backgroundColor: "#282c34",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default useStyles