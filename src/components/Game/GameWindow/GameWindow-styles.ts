import styled, { keyframes } from 'styled-components'
import Jakson from '../../../images/entity/Jackson.png'


const moving = (movAnimation: any) => keyframes`
  0% {
    transform: translate(${movAnimation[0]}%, ${movAnimation[1]}%);
  }
  100% {
   transform: translate(0, 0);
  }
`


export const Div = styled.div`
    height: 900px;
    width: 1500px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: center;
    background-color: cyan;
`

export const Chunk: any = styled.div<{ type: string, playerId: number, id: number }>`
    width: 60px;
    height: 60px;
    background-color: ${props => props.type === 'air' ? 'cyan' : 'Sienna'};
    background-image: ${props => props.playerId === props.id && `url(${Jakson})`};
    animation: ${props => props.playerId === props.id && 0.3}s ${(props:any) => moving(props.movAnimation)}
`
