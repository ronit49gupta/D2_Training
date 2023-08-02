import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer: {
        counterStore : counterReducer,
        authStore : authReducer
    }
});

export default store;

 

