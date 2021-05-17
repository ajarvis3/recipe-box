import {  makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import searchState from "../../../recoil/Search";


const useStyles = makeStyles({
   search: {
      marginLeft: 5,
      transform: "translate(0px, 5px)" 
   },
   input: {
      marginLeft: 10,
      marginTop: "1rem"   
   },
   inputProps: {
      fontSize: "20px"
   }
});

const RecipeSearch: FunctionComponent = () => {
   const [search, setSearch] = useRecoilState(searchState);
   const [open, setOpen] = useState(false);
   const inputRef = useRef<HTMLInputElement>(null);

   const classes = useStyles();

   const handleBlur = () => {
      if (search === "") setOpen(false);
   };

   const handleClick = () => {
      setOpen(true);
   };

   useEffect(() => {
      if (inputRef.current && inputRef.current !== null) (inputRef.current.firstChild?.firstChild as HTMLInputElement).focus();
   })

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
   };

   return (
      <>
         {!open ? (
               <Search fontSize="large" onClick={handleClick} className={classes.search} />
         ) : (
            <TextField 
               inputProps={{ style: {fontSize: 20}}} 
               className={classes.input} 
               ref={inputRef} 
               type="text" 
               value={search} 
               onChange={handleChange} 
               onBlur={handleBlur} />
         )}
      </>
   );
};

export default RecipeSearch;
