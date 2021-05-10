import { makeStyles } from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { FunctionComponent } from "react";
import IUrlProps from "./types/recipecardurlprops";

const useStyles = makeStyles({
   openExternal: {
      "&:hover": {
         cursor: "pointer",
      },
   },
});

const RecipeCardOpenUrl: FunctionComponent<IUrlProps> = (props: IUrlProps) => {
   const { url } = props;

   const classes = useStyles();

   const open = () => {
      const win = window.open(url, "_blank");
      win?.focus();
   };

   return <OpenInNewIcon className={classes.openExternal} onClick={open} />;
};

export default RecipeCardOpenUrl;
