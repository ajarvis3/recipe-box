import { Box, Button } from "@material-ui/core";
import React from "react";

const AddRecipe = () => {
   return (
      <Box component='span' className="recipeHeaderRight">
         <Button variant="contained" color="primary">
            Add Recipe
         </Button>
      </Box>
   );
};

export default AddRecipe;
