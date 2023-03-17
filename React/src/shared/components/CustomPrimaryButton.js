import React from 'react'
import Button from '@mui/material/Button';

const CustomPrimaryButton = ({
    label,
    additionalStyles,
    disabled,
    onClick,
}) => {
  return (
    <Button 
    varinat='contained'
    sx={{
        bgcolor:'#5865F2',
        color:'white',
        textTranform:'none',
        fontSize:'16px',
        fontweight:500,
        width:'100%',
        height:'40px',
    }}
    style={additionalStyles?additionalStyles : {}}
    disabled={disabled}
    onClick={onClick}
    >
    {label}
    </Button>
  )
}

export default CustomPrimaryButton
