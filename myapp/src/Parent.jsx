import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { FormForEmployee } from './FormForEmployee';
import DisplayDataWithGrid from './DisplayDataWithGrid';
export default function Parent() {

    const [open,setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <>

<Button variant="outlined" onClick={handleClickOpen} >
        Open form dialog
      </Button>

      <FormForEmployee open={open}   handleClose={handleClose}/>
      <DisplayDataWithGrid/>
    </>
  )
}
