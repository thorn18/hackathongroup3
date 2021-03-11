import Character from '../character/character.js';

export default interface CharacterState {
    characters,
    character
}

export interface AppState extends ChracterState { }

const store: Store<AppState> = createStore(reducer);

export default store;
