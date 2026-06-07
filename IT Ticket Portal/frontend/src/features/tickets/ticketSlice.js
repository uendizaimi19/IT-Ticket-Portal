import {

createSlice,
createAsyncThunk

} from "@reduxjs/toolkit"

import ticketService from "./ticketService"

const initialState = {

tickets:[],
isLoading:false,
isError:false,
message:""

}

export const getTickets =
createAsyncThunk(

"tickets/getAll",

async(_,thunkAPI)=>{

try{

const token =
thunkAPI.getState()
.user.user.token

return await ticketService
.getTickets(token)

}catch(error){

const message =

(error.response &&
error.response.data &&
error.response.data.message)

||

error.message

||

error.toString()

return thunkAPI.rejectWithValue(message)

}

}

)

export const ticketSlice =
createSlice({

name:"ticket",

initialState,

reducers:{},

extraReducers:(builder)=>{

builder

.addCase(
getTickets.pending,
(state)=>{

state.isLoading=true

}
)

.addCase(
getTickets.fulfilled,
(state,action)=>{

state.isLoading=false

console.log(action.payload)

state.tickets=action.payload

}
)

.addCase(
getTickets.rejected,
(state,action)=>{

state.isLoading=false

state.isError=true

state.message=action.payload

}
)

}

})

export default
ticketSlice.reducer