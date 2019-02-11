import {createStore} from 'redux';

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_RECIPE':
            return Object.assign(
                {}, state, {
                    recipes: state.recipes.concat({ name: action.name})
                }
            );
    }
    return state;
};

const initialState = {
    recipes: [
        {
        name: 'Omlette',
        }
    ],
    ingredients: [
        {
            recipe: 'Omlette',
            name: 'Egg',
            quantity: 2,
        }
    ]
};

const store = createStore(reducer, initialState);
const state= store.getState();
console.log( state);
window.store = store;