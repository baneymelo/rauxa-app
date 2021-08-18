import React, { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Notify({success, msg}) {   
    return (
        <div>
          <Snackbar open={success} autoHideDuration={3000}>
            <Alert severity={ success ? "success" : "error"}>
              {msg}
            </Alert>
          </Snackbar>
        </div>
    )
}

export default Notify
