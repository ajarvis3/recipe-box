import { makeStyles } from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import React, { FunctionComponent } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import authenticatedFetch from "../../account/fetch/AuthenticatedFetch";
import userRecipesState from "../../recoil/UserRecipes";
import confirmationOpenState from "../recoil/ConfirmationOpen";
import confirmationRequestState from "../recoil/ConfirmationRequest";
import IRecipeData from "../types/RecipeData";
import IRecipeCardControlProps from "./recipe-card/types/RecipeCardControlProps";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
   trash: {
      "&:hover": {
         cursor: "pointer",
      },
   },
});

const TrashIcon: FunctionComponent<IRecipeCardControlProps> = (
   props: IRecipeCardControlProps
) => {
   const [recipes, setRecipes] = useRecoilState(userRecipesState);
   const setConfirmationOpen = useSetRecoilState(confirmationOpenState);
   const setConfirmationRequestState = useSetRecoilState(
      confirmationRequestState
   );
   const { index, id } = props;

   const classes = useStyles();

   const handleRequest = () => {
      return () => {
         const newRecipes = recipes.slice();
         authenticatedFetch(`/content/recipes?id=${id}`, undefined, "DELETE")
            .then((value: IRecipeData) => {
               newRecipes.splice(index, 1);;
               setRecipes(newRecipes);
            })
            .catch((err: Error) => {
               console.error(err);
               });
      };
   };

   const handleClick = () => {
      setConfirmationRequestState(handleRequest);
      setConfirmationOpen(true);
   };

   return (
     <Tooltip title="Delete">
       <DeleteOutlined onClick={handleClick} className={classes.trash} />
     </Tooltip>
   );
};

export default TrashIcon;
