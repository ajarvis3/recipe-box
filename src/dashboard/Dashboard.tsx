import React, { FunctionComponent } from "react";
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
         {recipe_data.map((data: IMetadata) => 
            <RecipeCard metadata={data}  />
         )}
      </>
   );
};

export default Dashboard;
