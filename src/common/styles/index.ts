import { makeStyles } from "@material-ui/core";

const useCommonStyles = makeStyles({
   headerLink: {
      "&:hover": {
         content: '""',
         color: "black",
         transitionDuration: ".5s",
      },
      "textDecoration": "none",
      "color": "white",
      "margin": "auto 0px",
   },
   signInOut: {
      fontSize: "2rem",
   },
});

export default useCommonStyles;
