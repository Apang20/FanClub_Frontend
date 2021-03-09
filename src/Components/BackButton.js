import React from 'react'
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const BackButton = (props) => {
    return <Button onClick={props.backItems} startIcon={<ArrowBackIcon/>} variant="contained" color="inherint" style={{fontFamily: 'Vidaloka'}}>
            Previous
          </Button>
}
export default BackButton





















// const BackButton = (props) => {
//   return 
//   <div>
//     <Button onClick={props.backItems} startIcon={<ArrowBackIcon/>} variant="contained" color="inherit" >
      
//           </Button>
//   </div>
// }
// export default BackButton















// import React from 'react'