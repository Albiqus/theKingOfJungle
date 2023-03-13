import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Div } from "./Game-styles"
import { GameWindow } from "./GameWindow/GameWindow";
import { InitialWindow } from "./InitialWIndow/InitialWindow"
import { MenuWindow } from "./MenuWindow/MenuWindow";


export const Game = () => {

    const { isInitialWindow, isMenuWindow, isGameWindow }  = useSelector((state: RootState) => state.windows);

    return (
        <Div>
            {isInitialWindow && <InitialWindow />}
            {isMenuWindow && <MenuWindow />}
            {isGameWindow && <GameWindow />}
        </Div>
    )
}