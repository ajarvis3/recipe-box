import React, { FunctionComponent } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import IRecipeFieldInputProps from "./types/RecipeFieldInputProps";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
   label: {
      marginLeft: "2%",
      marginRight: "1%",
      marginTop: 10,
      display: "inline-block",
   },
   item: {
      margin: 0,
   },
   input: {},
});

const RecipeFieldInput: FunctionComponent<IRecipeFieldInputProps> = (
   props: IRecipeFieldInputProps
) => {
   const { onChange, value, fieldName } = props;
   const classes = useStyles();

   return (
      <Grid item className={classes.item}>
         <FormLabel className={classes.label}>{fieldName}:</FormLabel>
         <TextField
            className={classes.input}
            type="text"
            value={value}
            onChange={onChange}
         />
      </Grid>
   );
};

export default RecipeFieldInput;
