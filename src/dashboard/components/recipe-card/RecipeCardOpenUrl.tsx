import { makeStyles } from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import Tooltip from "@material-ui/core/Tooltip";
import React, { FunctionComponent } from "react";
import IUrlProps from "./types/RecipeCardUrlProps";

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

   return (
     <Tooltip title="Open Recipe">
       <OpenInNewIcon className={classes.openExternal} onClick={open} />
     </Tooltip>
   );
};

export default RecipeCardOpenUrl;
