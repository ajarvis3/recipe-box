import { Card, CardContent, makeStyles } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import IRecipeCardProps from "../../types/RecipeCardProps";
import RecipeCardInfo from "./RecipeCardInfo";

const useStyles = makeStyles({
   root: {
      minWidth: 275,
      maxWidth: 500,
      margin: 50,
      padding: 10,
   },
   content: {
      minWidth: 275,
      maxWidth: 500,
   },
   image: {
      minWidth: 255,
      maxWidth: 480,
   },
});

const RecipeCard: FunctionComponent<IRecipeCardProps> = (
   props: IRecipeCardProps
) => {
   const classes = useStyles();

   const { metadata } = props;
   const { title, imageUrl } = metadata;
   return (
      <Card raised className={classes.root}>
         <CardContent component="span" className={classes.content}>
            <img
               src={imageUrl}
               alt={`${title}`}
               className={classes.image}
            ></img>
         </CardContent>
         <CardContent className={classes.content} component="span">
            <RecipeCardInfo metadata={metadata} />
         </CardContent>
      </Card>
   );
};

export default RecipeCard;
