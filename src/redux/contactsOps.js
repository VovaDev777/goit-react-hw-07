import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b0cad06a693a95b53a3af1.mockapi.io";

export const fetchContacts = createAsyncThunk("base-action", async () => {
   try {
    const response = await axios.get("/contacts");
    return response.data;
   } catch (error) {
        
   }
})