import React, { useState } from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { moveLeft } from "../../../actionCreators/moveLeft";
import { moveRight } from "../../../actionCreators/moveRight";
import { RootState } from "../../../store/store";
import { getDirection } from "../../../utils/getDirection";
import { isMovementAvailable } from "../../../utils/isMovementAvailable";
import { Chunk, Div } from "./GameWindow-styles";



export const GameWindow = () => {

    const dispatch = useDispatch()
    const { location, playerId } = useSelector((state: RootState) => state.location);
    const [movAnimation, setMovAnimation] = useState([0, 0])


    const locationСhunks = location?.map((chunk: any) => {
        return <Chunk key={chunk.id} type={chunk.type} playerId={playerId} id={chunk.id} movAnimation={movAnimation}> <p>{chunk.id}</p></Chunk>
    })


    const onGameKeyDown = (e: any) => {
        const direction = getDirection(e.keyCode)
        if (!direction) {
            return
        }
        if (!isMovementAvailable(location, playerId, direction)) {
            return
        }
        if (direction === 'right') {
            setMovAnimation([-100, 0])
            dispatch(moveRight())
        }
        if (direction === 'left') {
            setMovAnimation([100, 0])
            dispatch(moveLeft())
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', onGameKeyDown)
        return () => {
            window.removeEventListener('keydown', onGameKeyDown)
        }
    }, [playerId]);


    return (
        <Div>
            {locationСhunks}
        </Div>
    )
}