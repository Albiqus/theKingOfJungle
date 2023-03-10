import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Div } from "./Game-styles"
import { InitialWindow } from "./InitialWIndow/InitialWindow"
import { MenuWindow } from "./MenuWindow/MenuWindow";


export const Game = () => {

    const { isInitialWindow, isMenuWindow }  = useSelector((state: RootState) => state.windows);

    return (
        <Div>
            {isInitialWindow && <InitialWindow />}
            {isMenuWindow && <MenuWindow/>}
        </Div>
    )
}