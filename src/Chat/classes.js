export default {
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",

    "& *": {
      textAlign: "left",
      paddingLeft: 10,
      paddingRight: 10
    }
  },

  outgoing: {
    // flexBasis: 100,
    paddingTop: "1rem",
    width: "90%",
    display: "flex"
  },

  incoming: {
    flex: 1,
    overflowY: "auto"
  },

  message: {
    display: "flex",
    textAlign: "center",
    margin: "1rem auto",
    outline: "solid 1px black !important",
    width: "90%",
    wordWrap: "break-word",
  }
}