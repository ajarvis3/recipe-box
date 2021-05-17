import { Card, CardContent, makeStyles } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import IRecipeCardProps from "../../types/RecipeCardProps";
import RecipeCardInfo from "./RecipeCardInfo";

const useStyles = makeStyles({
   root: {
      minWidth: 275,
      maxWidth: 500,
      margin: 50,
   },
   content: {
      minWidth: 275,
      maxWidth: 500,
      padding: 15,
   },
   image: {
      maxWidth: 500,
      borderRadius: 5,
   },
   imageContainer: {
      padding: 0,
   },
});

const RecipeCard: FunctionComponent<IRecipeCardProps> = (
   props: IRecipeCardProps
) => {
   const classes = useStyles();

   const { metadata, index } = props;
   const { title, imageUrl } = metadata;
   return (
      <Card raised className={classes.root}>
         <CardContent component="div" className={classes.imageContainer}>
            <img
               src={imageUrl}
               alt={`${title}`}
               className={classes.image}
            ></img>
         </CardContent>
         <CardContent className={classes.content} component="div">
            <RecipeCardInfo metadata={metadata} index={index} />
         </CardContent>
      </Card>
   );
};

export default RecipeCard;
