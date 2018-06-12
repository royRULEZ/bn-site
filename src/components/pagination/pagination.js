import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: no-wrap;
    justify-content: center;
    text-align: center;
    flex-direction: column;
`;
    const Upper = styled.div`
        width: 100%;
        display: flex;
        flex-wrap: no-wrap;
        justify-content: center;
        text-align: center;
        flex-direction: row;   
        padding-bottom: 1rem;
    `;
    const Lower = styled.div`
        padding-top: 1rem;
        border-top: 1px solid #EEE;
        width: 100%;
        display: flex;
        flex-wrap: no-wrap;
        justify-content: flex-end;
        text-align: center;
        flex-direction: row; 
    `;
const PageNumber = styled.div`
    width: 2rem;
    height: 2rem;
    font-size: .75rem;
    border: 1px solid #DDD;
    color: #666;
    border-radius: 2px;
    cursor: pointer;
    margin: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &.active{
        border-color: ${props => props.theme.color_purple};
        color: #5a58b5;
        background-color: #fdfdfe;
    }
`;
const BigNext = styled.div`
    width: auto;
    padding: 0 2rem;
    height: 2rem;
    font-size: 1rem;
    border: 1px solid #DDD;
    color: #666;
    border-radius: 2px;
    cursor: pointer;
    margin: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active{
        border-color: ${props => props.theme.color_purple};
        color: #5a58b5;
        background-color: #fdfdfe;
    }
`;
const Direction = styled.div`
    width: auto;
    padding: 0 .75rem;
    height: 2rem;
    font-size: .75rem;
    border: 1px solid #DDD;
    color: #666;
    border-radius: 2px;
    cursor: pointer;
    margin: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active{
        border-color: ${props => props.theme.color_purple};
        color: #5a58b5;
        background-color: #fdfdfe;
    }
`;
const PageNumText = styled.div`
    width: auto;
    padding: 0 .75rem;
    height: 2rem;
    font-size: .875rem;
    color: #666;
    border-radius: 2px;
    cursor: pointer;
    margin: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .slash{
        padding-left: .5rem;
    }
    .pagecount{
        padding-left: .5rem;
    }
`;
const PageNumInput = styled.input`
    border: 1px solid #BBB;
    outline: 0;
    display: block;
    font-size: .875rem;
    width: 1.5rem;
    padding: .25rem;
    font-family: ${props => props.theme.font_main};
    &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
`;


export class Pagination extends Component { 

    goBackward = () => {
        let num = this.props.page;
        if(num != 1){
            console.log("Num: ", num);
            this.props.changePage(num-1);
        }
        window.scrollTo(0, 0);
    }

    goForward = () => {
        let page = this.props.page;
        let num = this.props.pageCount;
        if(page < num){
            console.log(this.props.pageCount);
            this.props.changePage(page+1);
        }
        window.scrollTo(0, 0);
    }

    onKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.props.changePage(parseInt(e.target.value))
        }
        
    }

    render(){

        let pages = "";
        if ( this.props.pageCount > 1 ) {

            // Assemble PageNums Array
            let pageNums = [];
            for(var i = 1; i <= this.props.pageCount; i++){
                pageNums.push({"num": i});
            }

            // Text
            if(pageNums.length > 10){
                console.log("PageCount: ", this.props.pageCount);
            }

            pages = pageNums.map( n => (
                <PageNumber 
                className={n.num === this.props.page ? "active" : ""}
                onClick={() => this.props.changePage(n.num)} 
                key={n.num}>
                    {n.num}
                </PageNumber>
            ))
        }

        let previous = <Direction onClick={() => this.goBackward()}><i className="fas fa-angle-left"></i></Direction>;
        let next = <Direction onClick={() => this.goForward()}><i className="fas fa-angle-right"></i></Direction>;
        let bigNext = <BigNext onClick={() => this.goForward()}>Next Page ></BigNext>;

        return(
            <Container>
                <Upper>
                    {bigNext}
                </Upper>
                <Lower>
                    <PageNumText>
                        <PageNumInput 
                            type='number'
                            value={this.props.page}
                            onChange={this.onKeyPress}
                            //onKeyPress={this.onKeyPress}
                        />
                        <div className="slash">/</div>
                        <div className="pagecount">{this.props.pageCount}</div>
                    </PageNumText>
                    {previous}{next}
                </Lower>
            </Container>
        );
    }
}


/*


<input
    className="form-control"
    type="text" value={this.state.name}
    id={'todoName' + this.props.id}
    onChange={e => this.onTodoChange(e.target.value)}
/>


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: no-wrap;
    justify-content: center;
    text-align: center;
    flex-direction: row;
`;
const PageNumber = styled.div`
    width: 2rem;
    height: 2rem;
    font-size: .75rem;
    border: 1px solid #DDD;
    color: #666;
    border-radius: 2px;
    cursor: pointer;
    margin: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &.active{
        border-color: ${props => props.theme.color_purple};
        color: #5a58b5;
        background-color: #fdfdfe;
    }
`;
const Direction = styled.div`
    width: auto;
    padding: 0 .75rem;
    height: 2rem;
    font-size: .75rem;
    border: 1px solid #DDD;
    color: #666;
    border-radius: 2px;
    cursor: pointer;
    margin: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active{
        border-color: ${props => props.theme.color_purple};
        color: #5a58b5;
        background-color: #fdfdfe;
    }
`;


export class Pagination extends Component { 

    goBackward = () => {
        let num = this.props.page;
        if(num != 1){
            console.log("Num: ", num);
            this.props.changePage(num-1);
        }
    }

    goForward = () => {
        let page = this.props.page;
        let num = this.props.pageCount;
        if(page < num){
            console.log(this.props.pageCount);
            this.props.changePage(page+1);
        }
    }

    render(){

        let pages = "";
        if ( this.props.pageCount > 1 ) {

            // Assemble PageNums Array
            let pageNums = [];
            for(var i = 1; i <= this.props.pageCount; i++){
                pageNums.push({"num": i});
            }

            // Text
            if(pageNums.length > 10){
                console.log("PageCount: ", this.props.pageCount);
            }

            pages = pageNums.map( n => (
                <PageNumber 
                className={n.num === this.props.page ? "active" : ""}
                onClick={() => this.props.changePage(n.num)} 
                key={n.num}>
                    {n.num}
                </PageNumber>
            ))
        }

        let previous = <Direction onClick={() => this.goBackward()}>Previous</Direction>;
        let next = <Direction onClick={() => this.goForward()}>Next</Direction>;

        return(
            <Container>
                {previous}
                {pages}
                {next}
            </Container>
        );
    }
}
*/