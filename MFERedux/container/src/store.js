import {configureStore} from "@reduxjs/toolkit";
import dataReducer from './dataslicer'

const store=configureStore({
    reducer:{
        data:dataReducer
    }
})

export default store;