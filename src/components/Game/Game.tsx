import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { Div } from "./Game-styles"
import { InitialWindow } from "./InitialWIndow/InitialWindow"


export const Game = () => {

    const isInitialWindow = useSelector((state: RootState) => state.windows.isInitialWindow);

    return (
        <Div>
            {isInitialWindow && <InitialWindow />}
        </Div>
    )
}