import React from 'react'
import Button from '@material-ui/core/Button'
import SkipNextIcon from '@material-ui/icons/SkipNext';

const MoreButton = (props) => {
  return <div>
    <Button startIcon={<SkipNextIcon/>}variant="contained" color="inherit" onClick={props.moreItems}>
      
          </Button>
  </div>
}
export default MoreButton