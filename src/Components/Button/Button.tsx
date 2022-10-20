import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type buttonType = "submit" | "button" | "reset";

interface ButtonOutlinedProps {
  tipoBotao: buttonType; 
  children: string;
}

export default function ButtonOutlined(props: ButtonOutlinedProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button type={props.tipoBotao} variant="contained">{props.children}</Button>
    </Stack>
  );
}
