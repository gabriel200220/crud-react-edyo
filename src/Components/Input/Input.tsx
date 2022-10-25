import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface InputOutlinedProps {
    type: string;
    placeholder?: string;
    label: string
    value?: string;
    onKeyDown?:any;
}

export default function InputOutlined(props:InputOutlinedProps) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      
      noValidate
      autoComplete="off"
    >
      <TextField className='outlined-basic' label={props.label} variant="outlined" placeholder={props.placeholder} type={props.type}/>
      
    </Box>
  );
}