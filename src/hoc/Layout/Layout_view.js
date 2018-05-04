//======================================================================================================================
// Higher Order Component: Auxillary (Aux)
//======================================================================================================================
// Description:
// Wrapper component to enable more than a single root element.
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'; // TODO: Navlink
// Components
import Home from '../../containers/Home/Home';
import Explore from '../../containers/Explore/Explore';
// Persistent Page Components 
import Toolbar from '../../components/toolbar/toolbar';
import Footer from '../../components/footer/footer';

class Layout extends Component {

    render () {
        // Return
        return(
            <div>
                <Toolbar />
                    <Switch>                            
                        <Route path="/explore" component={Explore} />
                        <Route path="/" exact component={Home} />
                    </Switch>
                <Footer />
            </div>
        )

    }
}

export default Layout;