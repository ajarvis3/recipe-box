import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { useSetRecoilState } from "recoil";
import editCommentState from "./recoil/EditCommentState";
import IComment from "./types/Comment";
import DeleteComment from "./DeleteComment";

const useStyles = makeStyles({
   comment: {
      "width": "80%",
      "margin": "0% 0% 0% 5%",
      "borderBottom": "1px solid black",
      "height": 24,
      "display": "inline-block",
      "&:hover": {
         cursor: "text",
      },
   },
   box: {
      maxHeight: 25,
      padding: 0,
      margin: 0,
   },
});

const Comment: FunctionComponent<IComment> = (props: IComment) => {
   const { text, index } = props;
   const setEditComment = useSetRecoilState(editCommentState);

   const classes = useStyles();

   const handleClick = () => {
      setEditComment(index);
   };

   return (
      <Grid item>
         <Box className={classes.box}>
            <Typography onClick={handleClick} className={classes.comment}>
               {text}
            </Typography>
            <DeleteComment index={index} />
         </Box>
      </Grid>
   );
};

export default Comment;
