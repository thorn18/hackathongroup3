import { Link, Route, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import BattlePageComponent from './battlePage.component';
import CreateCharacterComponent from './createCharacter.component';
import HomeComponent from './homeComponent';

export default function RouterComponent() {
    // const dispatch = useDispatch();
    // const location = useLocation();
    const history = useHistory();
    return (
        <div>
            <header>
                <h1>Attack On Revature!!!</h1>
                <p className='hero'>Be Very Afraid</p>
            </header>
            <Route
                path='/BattlePage'
                component={BattlePageComponent}
            />
            <Route
                exact
                path='/CreateNewCharacter'
                component={CreateCharacterComponent}
            />
            <Route
                exact
                path='/Home'
                component={HomeComponent}
            />
        </div>
    );
}
