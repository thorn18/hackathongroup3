import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

export default function RouterComponent() {
    const dispatch = useDispatch();
    const location = useLocation();
    return (
        <div>
            <header>
                <h1>Attack On Revature!!!</h1>
                <p className='hero'>Be Very Afraid</p>
            </header>

            <nav id='nav'>
                <button>
                    <Link to='/characterCreate'>Create new Character</Link>
                </button>
                <button>
                    <Link to='/battle'>Create new Character</Link>
                </button>
            </nav>
            <Route
                path='/battle'
                component={battleComponent}
            />
            <Route
                exact
                path='/createCharacter'
                component={CreateCharacterComponent}
            />
            <Route
                exact
                path='/home'
                component={RouterComponent}
            />
        </div>
    );
}
