import React from 'react';
import Home from './Home';
import Feature from './Feature';
//import Gallery from './Components/Gallery';
//import Testimonials from './Components/Testimonials';

class LandingPage extends React.Component {

    componentDidMount() {
        this.props.hideShell(false)
    }
    render(){
        return(
            <div>
            <Home/>
            <Feature/>
            </div>
        )
    }
}

export default LandingPage; 