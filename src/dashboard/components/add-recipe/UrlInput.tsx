import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import authenticatedFetch from "../../../account/fetch/AuthenticatedFetch";
import userRecipesState from "../../../recoil/UserRecipes";
import currentRecipeUrl from "../../recoil/CurrentRecipeUrl";
import isAddState from "../../recoil/IsAddState";
import IRecipeData from "../../types/RecipeData";
import popupState from "../../recoil/Popup";

const useStyles = makeStyles({
   wrapper: {
      width: "100%",
      padding: "0px",
      marginTop: "1%",
      marginBottom: "1%",
   },
   input: {
      width: "75%",
      marginLeft: "2%",
      marginRight: "2%",
   },
   button: {
      float: "right",
      marginRight: "2%",
   },
   fieldSet: {
      margin: "0",
      padding: "0",
      border: "none",
   },
});

const UrlInput: FunctionComponent = () => {
   const [url, setUrl] = useRecoilState(currentRecipeUrl);
   const [recipeData, setRecipeData] = useRecoilState(userRecipesState);
   const setOpen = useSetRecoilState(popupState);
   const setAddState = useSetRecoilState(isAddState);
   const isAdd = useRecoilValue(isAddState);

   const classes = useStyles();

   const onClick = (e: React.SyntheticEvent) => {
      e.preventDefault();

      authenticatedFetch<IRecipeData>(
         "content/recipes",
         JSON.stringify({ url }),
         "POST",
      ).then((value) => {
         if (!value.ok) {
            console.error(value.error);
            return;
         }

         if (value.data) {
            const newRecipeData = recipeData.slice();
            newRecipeData.push(value.data);
            setOpen(false);
            setAddState(false);
            setRecipeData(newRecipeData);
         }
      });
   };

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUrl(e.target.value);
   };

   return (
      <Box component="form" className={classes.wrapper} onSubmit={onClick}>
         <fieldset className={classes.fieldSet} disabled={!isAdd}>
            <TextField
               type="text"
               value={url}
               onChange={onChange}
               placeholder="Recipe Url"
               className={classes.input}
            />
            {isAdd && (
               <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  type="submit"
               >
                  Submit URL
               </Button>
            )}
         </fieldset>
      </Box>
   );
};

export default UrlInput;
