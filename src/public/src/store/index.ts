import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';
// unused: createTransform
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import socketio from 'socket.io-client';

// const transformCircular = createTransform(
//     (inboundState, key) => stringify(inboundState),
//     (outboundState, key) => parse(outboundState),
// );

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['socket']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(logger),
);

export const persistor = persistStore(store, {}, () => {
    const state = store.getState();
    /* Refresh socket */
    state.socket = socketio('/', {
        query: `username=${state.user.username}`
    });
    // state.test = 99;
    // console.log('done hydration', state);
});

export default store;