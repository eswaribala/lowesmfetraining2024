import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const getCountries=createAsyncThunk('data/getCountries',
    async()=>{
        const response=  await fetch("https://restcountries.com/v2/all")
        return response.json();
})

const dataSlicer=createSlice({
    name:'countries',
    initialState:{data:[],status:'idle'},
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getCountries.pending, (state, action) => {
               state.status='loading'
                // action is inferred correctly here if using TS
            })

            .addCase(getCountries.fulfilled, (state, action) => {
                // action is inferred correctly here if using TS
                state.status='completed'
                state.data=action.payload
            })
            .addCase(getCountries.rejected, (state, action) => {
                // action is inferred correctly here if using TS
                state.status='error'
            })

    }


})
export default dataSlicer.reducer;