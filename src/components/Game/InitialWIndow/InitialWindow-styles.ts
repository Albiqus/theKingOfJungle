import styled, { keyframes } from 'styled-components'

export const Div = styled.div`
     margin: 0 auto;
     height: 900px;
     width: 1500px;
     display: flex;
     flex-wrap: wrap;
     flex-direction: row;
     align-content: flex-start;
     justify-content: space-around;
     &:hover {
        cursor: pointer;
     }
`

const approximation = keyframes`
     0% {
         transform: scale(0.01);
     }

     100% {}
`

const emerging = keyframes`
     0% {
         opacity: 0;
     }

     50% {
         opacity: 0;
     }

     100% {
         opacity: 1;
     }
`

export const Logo = styled.p`
    margin: 0;
    margin-top: 370px;
    font-family: "gameFont";
    font-size: 60px;
    line-height: 50px;
    animation: 3s ${approximation};
`



export const Prompt = styled.p`
     margin: 0;
     margin-top: 70px;
     width: 1400px;
     text-align: center;
     font-family: "gameFont";
     font-size: 20px;
     line-height: 50px;
     animation: 3s ${emerging};
`

