// Imports
import React from 'react';
import styled from 'styled-components';

import Aux from  '../../../hoc/Aux';

// -------------------------------------------------------------------------------------------------------------------------
// List, Photo with Text opposite
// -------------------------------------------------------------------------------------------------------------------------
export const Profiles = (props) => {

    // CSS
    const ListItem = styled.div`
        display: flex;
        flex-direction: row;
        .c_Photo{
            float: left;
            width: 50%;
            height: 300px;
            background-color: #444;
        }
        .c_Bio{
            float: left;
            width: 50%;
            height: 300px;
            padding: 50px;
            box-sizing: border-box;
            .c_Bio-name{
                font-size: 24px;
            }
            .c_Bio-bio{
                font-size: 14px;
                line-height: 24px;
            }            
        }
        &:nth-child(odd){
            flex-direction: row-reverse;
        }
    `;

    // Array of Names
    let names = null;
    names = props.data.map( n => (
        <ListItem key={n.name}>
            <div className="c_Photo"></div>
            <div className="c_Bio">
                <div className="c_Bio-name">{n.name}</div>
                <div className="c_Bio-bio">{n.bio}</div>
            </div>
        </ListItem>
    ));
    
    // Return
    return(
        names
    );
}


// -------------------------------------------------------------------------------------------------------------------------
// List, Photo with Text opposite
// -------------------------------------------------------------------------------------------------------------------------
export const Names = (props) => {

    // CSS
    const NamesContainer = styled.div`
        background-color: #f7f7f7;
        padding: 4rem 0;
        box-sizing: border-box;
    `;
    const Container = styled.div`
        width: 768px;
        max-width: 95%;
        margin: 0 auto;
        .c_Label{
            width: 100%;
            text-align: left;
            font-family: ${props => props.theme.font_nixie};
            font-size: 2rem;
        }
    `;
    const Names = styled.div`
        display: flex;
        flex-wrap: wrap;
    `;
    const Name = styled.div`
        width: 25%;
        padding: 1.6rem 0;
        box-sizing: border-box;
        text-align: left;
        a{
            text-decoration: underline;
            font-weight: 400;
            font-size: 1.75rem;
            &.M{
                color: ${props => props.theme.color_boy};
            }
            &.F{
                color: ${props => props.theme.color_girl};
            }
        }
    `;

    // Array of Names
    let names = null;
    names = props.data.map( n => (
        <Name key={n.name}>
            <a href="/" className={n.gender}>{n.name}</a>
        </Name>
    ));
    
    // Return
    return(
        <NamesContainer>
            <Container>
                <div className="c_Label">Names</div>
                <Names>
                    {names}
                </Names>
            </Container>
        </NamesContainer>
    );
}