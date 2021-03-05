import React from 'react'
import Button from '@material-ui/core/Button'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

const BackButton = (props) => {
  return <div>
    <Button startIcon={<SkipPreviousIcon/>}
    variant="contained" 
    color="inherit" 
    onClick={props.backItems}>
      
          </Button>
  </div>
}
export default BackButton