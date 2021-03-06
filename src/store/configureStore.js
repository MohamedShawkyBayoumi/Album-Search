import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

import { composeWithDevTools } from 'redux-devtools-extension';



export default function configureStore(initialState){
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools()
    );

    return store;
}