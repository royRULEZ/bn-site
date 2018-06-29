//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

//CSS
const Main = styled.article`
    max-width: 768px;
    width: 95%;
    margin: 0 auto 2rem auto;   
    .ht_description{
        line-height: 1.5rem;  
        padding: 0 .5rem 2rem .5rem;
        box-sizing: border-box;
        margin: 0 auto 4rem auto;
        @media (min-width: ${props => props.theme.tablet}) {
            line-height: 1.5rem;  
            padding: 0;
        }  
    } 
`;
const Title = styled.h1`
    margin: 0;
    padding: 3rem 0;
    font-size: 3rem;
    line-height: 3rem;
    font-family: ${props => props.theme.font_nixie};
    text-align: center;
    font-weight: 100;
    background: linear-gradient(to right, #d5617f 0%, #4a7f98 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (min-width: ${props => props.theme.tablet}) {
        padding: 3rem;
        font-size: 4rem;
        line-height: 4rem;         
    }
    @media (min-width: ${props => props.theme.big_tablet}) {
        padding: 3rem 0 5rem 0;
        font-size: 7.5rem;
        line-height: 7.5rem;         
    }
`;
const Section = styled.div`
    margin-top: 3rem;
    h2{
        font-size: 1.25rem;
        font-weight: 600;
        padding-bottom: .875rem;
    }
    .a-text{
        font-size: 1rem;
        line-height: 1.5rem;
        padding: 0 1rem 1rem 0;
        box-sizing: border-box;
    }
    @media (min-width: ${props => props.theme.tablet}) {
        padding-right: 3rem;
        h2{
            font-size: 1.5rem;
        }
        .a-text{
            font-size: 1.125rem;
            line-height: 1.75rem;        
        }
    }
`;
const SiteLink = styled(Link)`

`;

class AboutUs extends Component {   

    render () {
        return (
            <Main>
                <Title>About Us</Title>

                <Section>
                    <h2>Why did we make BabyNamr.com?</h2>
                    <div className="a-text">
                        Naming out first two kids was easy - we had family names and we had more or less already decided on both a girl and a boy name. However, with our third kid we were on our own. So many of the Baby Naming websites out there were cluttered with ads, links, and seemed outdated and poorly designed. We wanted a simple site where we could actually find unique and original names. We didn’t want the top 100 names - we wanted something a bit more original. It’s easy to show the top names - it’s a bit harder to dig. 
                    </div>
                    <div className="a-text">
                        Names are very special - with so much research and data available we thought we could at least highlight and showcase what’s out there and connect with API’s that are available publicly. That’s our mission - we want to connect people with compelling, meaningful, and original baby names. Names that will resonate with them and provide their children with an identity.
                    </div>
                </Section>

                <Section>
                    <h2>How does it work?</h2>
                    <div className="a-text">
                        We've taken a different approach to creating a Baby Name website. We're focused on the uncommon, original, and unique names. It can be hard to select a name for your child that fits your aspirations and your family identity. We've designed a site to help you learn more about the names you’ve selected and discover that one name to fit your child best.
                    </div>
                    <div className="a-text">
                        With data and API’s we’ve collected and gathered information about names and come up with ways of cataloging names based on their popularity (or, more desirably, the lack thereof). We’ve broken the experience into unique sections:
                    </div>
                    <div className="a-text">
                        <SiteLink to="/explore">Explore</SiteLink>: In the explore section you can view long lists of names categorized by popularity and sorted by gender, starting letter, and a length. 
                    </div>
                    <div className="a-text">
                        <SiteLink to="/get-inspired">Get Inspired</SiteLink>: This is our favorite section. We collect and curate contemporary lists of important public figures for you to take inspiration from. Be sure to check in often as we’re constantly updating this section with new lists and profiles 
                    </div>
                    <div className="a-text">
                        <SiteLink to="/how-to-choose-a-baby-name">How To</SiteLink>: We asked tons of people about how they went about selecting their baby names and compiled their ideas into our “How to Choose a Baby Name” guide.
                    </div>
                    <div className="a-text">
                    <SiteLink to="/name/Lucy">Name</SiteLink>: We love looking at all these different names. It’s fun to see how they change over time and which names which once were dominated by boys are now favoring girls. We love seeing all of the variations, the origins, and the collections each name is featured in. We hope you’ll enjoy sharing these pages with your friends!
                    </div>
                    <div className="a-text">
                        Be sure to get in touch with us if you have any questions!
                    </div>
                </Section>               
    
            </Main>
        );
    }
}


export default AboutUs;

