import { FunctionComponent } from "react";
import MenuBook from "@material-ui/icons/MenuBook";
import IRecipeCardEditProps from "./types/RecipeCardEditProps";
import { useSetRecoilState } from "recoil";
import isCommentsOpenState from "../../recoil/IsCommentsOpen";
import currentRecipeIndexState from "../../recoil/CurrentRecipeIndex";
import { makeStyles } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
   menu: {
      "&:hover": {
         cursor: "pointer",
      },
   },
});

const RecipeNotesIcon: FunctionComponent<IRecipeCardEditProps> = (
   props: IRecipeCardEditProps
) => {
   const { index } = props;
   const setCommentsOpen = useSetRecoilState(isCommentsOpenState);
   const setCurrentRecipe = useSetRecoilState(currentRecipeIndexState);

   const classes = useStyles();

   const onClick = () => {
      setCommentsOpen(true);
      setCurrentRecipe(index);
   };

   return (
     <Tooltip title="Recipe Notes">
       <MenuBook onClick={onClick} className={classes.menu} />
     </Tooltip>
   );
};

export default RecipeNotesIcon;
