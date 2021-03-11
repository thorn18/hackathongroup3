import { createStore, Store } from 'redux';
import {Character} from '../character/character.js';

export interface CharacterState {
    characters:Character[],
    character:Character
}

export interface AppState extends CharacterState{};

//const store: Store<AppState> = createStore(reducer);

//export default store;
