import { Route, useHistory } from 'react-router-dom';
import React from 'react';
import BattlePageComponent from './battlePage.component';
import CreateCharacterComponent from './createCharacter.component';
import './styles.css'
import logo from './gameLogo.png'

export default function RouterComponent() {
    // const dispatch = useDispatch();
    // const location = useLocation();
    const history = useHistory();
    return (
        <div id = "routerComponentDiv">
            <header id = "header">
                <img src = {logo}></img>
                <p className='hero'>Be Very Afraid</p>
            </header>
            <div id = "buttondiv">
                <button onClick={() => { history.push('./CreateNewCharacter') }} id="createCharButton"> Create A New Character
                </button>
                <button onClick={() => { history.push('./BattlePage') }} id="battlePageButton"> Battle!
                </button>
            </div>
            <Route
                path='/BattlePage'
                component={BattlePageComponent}
            />
            <Route
                exact
                path='/CreateNewCharacter'
                component={CreateCharacterComponent}
            />
        </div>
    );
}
