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
import About from '../../components/pages/aboutus';
import Contact from '../../components/pages/contact';

// Specialized Views
import Instagram from '../../containers/Name/Instagram';
import Infographic from '../../containers/Name/Infographic';

// Persistent Page Components 
import Toolbar from '../../components/toolbar/toolbar';
import Footer from '../../components/footer/footer';
import SideDrawer from '../../components/sideDrawer/sideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render () {
        // Return
        return(
            <div>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed ={this.SideDrawerClosedHandler} />
                    <Switch>                            
                        <Route path="/collection/:c" component={Collection} />
                        <Route path="/get-inspired" component={Inspired} />
                        <Route path="/how-to-choose-a-baby-name" component={HowTo} />
                        <Route path="/name/:n" component={Name} />
                        <Route path="/explore" component={Explore} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/name-of-the-day" component={Instagram} />
                        <Route path="/infographic" component={Infographic} />
                        <Route path="/" exact component={Home} />
                    </Switch>
                <Footer />
            </div>
        )

    }
}

export default Layout;