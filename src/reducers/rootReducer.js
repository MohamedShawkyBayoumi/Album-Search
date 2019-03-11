import { combineReducers } from 'redux';

import albumsReducer from '../components/Albums/albumsReducer';

const rootReducer = combineReducers({
    data: albumsReducer
});


export default rootReducer;