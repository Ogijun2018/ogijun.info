import React from "react";
import styled from "styled-components";

export const Container = styled.div
`
width: 25%;
padding: 2rem 10rem;
background-color: purple;
text-align: center;
`

export const Inner = styled.div
`
width: 50%;
height: 80%;
border: medium solid #ff00ff;
margin: 2rem;
text-align: center;
`

export const Image = styled.img
`

`

export default class Card extends React.Component {
    render(){
        return(
            <Container>
                <img src={this.props.imgSrc} alt=""/>
                {this.props.title}
            </Container>
        );
    }
}