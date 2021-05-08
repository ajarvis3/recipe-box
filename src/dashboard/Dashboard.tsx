import { Grid } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import RecipePopup from "./components/add-recipe/RecipePopup";
import RecipeHeader from "./components/header/RecipeHeader";
import RecipeCard from "./components/recipe-card/RecipeCard";
import IMetadata from "./types/Metadata";

const Dashboard: FunctionComponent = () => {
   let recipe_data = [];
   if (process.env.NODE_ENV === "development") {
      recipe_data = require("./dev-data/data").default;
   }
   return (
      <>
         <RecipeHeader />
         <Grid container spacing={0}>
            <RecipePopup />
            {recipe_data.map((data: IMetadata) => (
               <Grid item key={data.url}>
                  <RecipeCard key={data.url} metadata={data} />
               </Grid>
            ))}
         </Grid>
      </>
   );
};

export default Dashboard;
