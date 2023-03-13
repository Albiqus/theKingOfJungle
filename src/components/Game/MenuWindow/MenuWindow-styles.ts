import styled, { keyframes } from 'styled-components'

const appearance = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Div = styled.div`
    height: 900px;
    width: 1500px;
    animation: 1s ${appearance} ease-out;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: center;
`

export const StartButton = styled.button`
    font-family: "gameFont";
    font-size: 60px;
    width: 600px;
    height: 150px;
    border: 5px solid black;
&:hover {
    cursor: pointer;
    transform: scale(1.1);
}
`

export const InfoButton = styled.button`
    font-family: "gameFont";
    font-size: 60px;
    width: 600px;
    height: 150px;
    border: 5px solid black;
    margin-top: 30px;
&:hover {
    cursor: pointer;
    transform: scale(1.1);
}
`

export const P = styled.p`
    text-align: center;
    margin: 0 auto;
    margin-top: 40px;
    font-family: "gameFont";
    font-size: 30px;
`

export const VolumeInput = styled.input`
    width: 600px;
    margin-top: 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &::-webkit-slider-thumb {
    background: #ecf0f1;
    border: 5px solid rgb(0, 0, 0);
    cursor: pointer;
    width: 15px;
    height: 15px;
    transform: scaleY(3);
    -webkit-appearance: none;
}
&::-webkit-slider-runnable-track {
    height: 15px;
    outline: 5px solid rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
}
`
