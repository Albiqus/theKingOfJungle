import { useDispatch } from "react-redux/es/exports";
import { Div, Logo, Prompt } from "./InitialWindow-styles"


export const InitialWindow = () => {

    const dispatch = useDispatch()

    const onInitialWindowClick = () => {
        dispatch({ type: 'SET_IS_INITIAL_WINDOW', payload: { status: false } })
    }

    return (
        <Div onClick={onInitialWindowClick}>
            <Logo>AlbiqusGame</Logo>
            <Prompt>кликните на экран</Prompt>
        </Div>
    )
}