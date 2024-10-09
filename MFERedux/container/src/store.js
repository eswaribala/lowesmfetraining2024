import {configureStore} from "@reduxjs/toolkit";
import dataReducer from './dataslicer'

const store=configureStore({
    reducer:{
        countries:dataReducer
    }
})

export default store;