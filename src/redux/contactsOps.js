import axios from "axios";
import { fetchingInProgres, fetchingSuccess, fetchingError } from "./contactsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";



axios.defaults.baseURL = "https://663adac4fee6744a6e9f8893.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
 try {
        dispatch(fetchingInProgres())
        const response = await axios.get("/contacts")
        dispatch(fetchingSuccess(response.deta))
 } catch (error) {
        dispatch(fetchingError(error.message))
        return thunkAPI.rejectWithValue(error.message);
    
    }   
    })


export const addContact = createAsyncThunk("contacts/addContact", 
    async (newContact, thunkAPI) => {
            try {
                dispatch(fetchingInProgres())
                const response = await axios.post("/contacts", newContact)
                dispatch(fetchingSuccess(response.data))
            } catch (error) {
                dispatch(fetchingError(error.message))
                return thunkAPI.rejectWithValue(error.message);
            }
        })

export const deleteContact = createAsyncThunk("contacts/deleteContact",
async(id, thunkAPI) => {
    
    try {
        dispatch(fetchingInProgres())
        const response = await axios.delete(`/contacts/${id}`)
        dispatch(fetchingSuccess(response.data))
    } catch (error) {
        dispatch(fetchingError(error.message))
        return thunkAPI.rejectWithValue(error.message)
    }
});       


