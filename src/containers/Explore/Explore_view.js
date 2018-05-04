//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import { BigBanner } from '../../components/ad/ad_factory';

//CSS
const Main = styled.div`
`;

class ExploreView extends Component {   
    
    render () {
        return (
            <Main>
                <BigBanner/>
                Explore
            </Main>
        );
    }
}

export default ExploreView;