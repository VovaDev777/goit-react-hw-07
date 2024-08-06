import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b0cad06a693a95b53a3af1.mockapi.io";

export const fetchContacts = createAsyncThunk("getContacts", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})