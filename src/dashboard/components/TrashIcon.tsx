import { makeStyles } from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import { FunctionComponent } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import authenticatedFetch from "../../account/fetch/authenticatedfetch";
import userRecipesState from "../../recoil/UserRecipes";
import confirmationOpenState from "../recoil/ConfirmationOpen";
import confirmationRequestState from "../recoil/ConfirmationRequest";
import IRecipeData from "../types/RecipeData";
import IRecipeCardControlProps from "./recipe-card/types/RecipeCardControlProps";

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
         console.log('handleRequest')
         console.log(id)
         const newRecipes = recipes.slice();
         authenticatedFetch(`/content/recipes?id=${id}`, undefined, "DELETE")
            .then((value: IRecipeData) => {
               console.log(value);
               newRecipes.splice(index, 1)
               setRecipes(newRecipes);
            })
            .catch((err: Error) => {
               console.error(err);
         });
      }
   };

   const handleClick = () => {
      console.log('handleClick')
      console.log(handleRequest);
      setConfirmationRequestState(handleRequest);
      console.log('set open')
      setConfirmationOpen(true);
   };

   return <DeleteOutlined onClick={handleClick} className={classes.trash}  />;
};

export default TrashIcon;
