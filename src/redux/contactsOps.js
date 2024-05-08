import axios from "axios";
import { fetchingInProgres, fetchingSuccess, fetchingError } from "./contactsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Contact from "../components/contact/Contact";


axios.defaults.baseURL = "https://663adac4fee6744a6e9f8893.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async () => {
 try {
        dispatch(fetchingInProgres())
        const response = await axios.get("contacts")
        dispatch(fetchingSuccess(response.deta))
    } catch (error) {
        dispatch(fetchingError(error.message))
    }   
})
// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену це рядок "contacts/fetchAll".
// addContact - додавання нового контакту (метод POST). Базовий тип екшену це рядок "contacts/addContact".
// deleteContact - видалення контакту по ID (метод DELETE). Базовий тип екшену це рядок "contacts/deleteContact".