 /* eslint-disable */
 import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from '../axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    width: "80%",
    height: "100%",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


function FileViewer() {
  const classes = useStyles();

  const [itemData, setItemData] = useState(null)

  const getImages = async () => {
    const { data } = await axios.get('/gallery')
    setItemData(data.data)
  }

  useEffect(()=>{
    getImages()
  },[])

  if(!itemData) <CircularProgress />

  return (
    <div className={classes.root}>
      <ImageList rowHeight={310} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
        {itemData?.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.url} alt={item.name} />
            <ImageListItemBar
              title={item.name}
              subtitle={<Subtitles item={item} />}
              
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const Subtitles = ({item}) => {
    return(
        <>
        <p>email: {item.email}</p>
        <p>phone: {item.phone}</p>
        </>
    )
}

export default FileViewer;
