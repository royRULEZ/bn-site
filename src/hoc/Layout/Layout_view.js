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
import Name from '../../containers/Name/Name';
import HowTo from '../../containers/HowTo/HowTo';
import Inspired from '../../containers/Inspired/Inspired';
import Collection from '../../containers/Collection/Collection';

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
                        <Route path="/collection/:c" component={Collection} />
                        <Route path="/get-inspired" component={Inspired} />
                        <Route path="/how-to-choose-a-baby-name" component={HowTo} />
                        <Route path="/name/:n" component={Name} />
                        <Route path="/explore" component={Explore} />
                        <Route path="/" exact component={Home} />
                    </Switch>
                <Footer />
            </div>
        )

    }
}

export default Layout;