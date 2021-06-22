import useStyles from "style/style"

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <p>this is a footer</p>
    </div>
  )
}

export default Footer