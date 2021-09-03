import React from 'react';
import './App.css';
import {ActionProvider} from "./features/contexts/ActionContext";
import {PlayerContextProvider} from "./features/contexts/PlayerContext";
import GameController from "./features/GameController";
import {MapProvider} from "./features/contexts/MapContext";
import {createPortal} from "./features/Portal/createPortal";
import {InnerPopupContainer, InnerPopupProvider } from './features/PopupUiComponent';



function App() {

    return (
        <div className="App">
            <InnerPopupProvider>
                <ActionProvider>
                    <PlayerContextProvider>
                        <MapProvider>
                            <GameController/>
                            <InnerPopupContainer/>
                        </MapProvider>
                    </PlayerContextProvider>
                </ActionProvider>
            </InnerPopupProvider>

        </div>
    );
}

export default App;
