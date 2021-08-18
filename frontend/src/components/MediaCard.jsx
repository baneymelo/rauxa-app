// @ts-nocheck
 /* eslint-disable */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      //flexWrap: 'wrap',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      '& img': {
        objectFit: "scale-down",
        width: 310,
        height: 310,
      }
    }
  }));
  
const MediaCard = ({ srcMedia }) => {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <img src={srcMedia} alt={"item.title"}  />
    </div>
    )
}

export default MediaCard;