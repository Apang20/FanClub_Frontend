import React from 'react'
import Button from '@material-ui/core/Button'
import SkipNextIcon from '@material-ui/icons/SkipNext';

const MoreButton = (props) => {
  return <div>
    <Button startIcon={<SkipNextIcon/>}variant="contained" color="primary" onClick={props.moreItems}>

          </Button>
  </div>
}
export default MoreButton

// <Button variant="outlined" color="primary" </Button>
