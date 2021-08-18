 /* eslint-disable */
import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { Container, makeStyles } from '@material-ui/core';
import FileForm from './FileForm';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  minHeight: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const useStyles = makeStyles({
  uploadBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "1em 0",
    height: "7em",
    border: ".2em solid #d3d3d3",
    borderStyle: "dashed solid",
    background: "#fcfbf8"
  },
  button: {
    
  }
})

export default function FileUploader() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <div className={classes.uploadBar}>
        <div>
          <Button className={classes.button} onClick={handleOpen} color='primary' variant='outlined'>Upload</Button>
        </div>
        <div>
          <Typography variant="subtitle1" color="textSecondary">- Or -</Typography>
        </div>
        <div>
          <Typography variant="subtitle1" color="textSecondary">Drop images here</Typography>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FileForm/>
        </Box>
      </Modal>
    </Container>
  );
}
