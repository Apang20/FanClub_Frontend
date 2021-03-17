import Button from '@material-ui/core/Button'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import React from 'react'

const MoreButton = (props) => {
  return( <div>
          <Button onClick={props.moreItems} endIcon={<ArrowForwardIcon/>} variant="contained" color="primary" style={{fontFamily: ''}}>
          Forward
        </Button>
        </div>
  )
}

  export default MoreButton;
