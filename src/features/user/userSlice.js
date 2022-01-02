import { createSlice } from "@reduxjs/toolkit";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app"




const firebaseConfig = {
    apiKey: "AIzaSyCeU11Ra0fMCSSke8WETg_zcfDm6FYCm7w",
    authDomain: "movie-streaming-server.firebaseapp.com",
    projectId: "movie-streaming-server",
    storageBucket: "movie-streaming-server.appspot.com",
    messagingSenderId: "969779394442",
    appId: "1:969779394442:web:db0859b294858824153a73",
    measurementId: "G-BMH8814S7N"
};

const fire = initializeApp(firebaseConfig);
const initialState = {
    name: "",
    email: "",
    photo: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },

        setSignOutState: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        },
    },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user?.name;
export const selectUserEmail = (state) => state.user?.email;
export const selectUserPhoto = (state) => state.user?.photo;

export default userSlice.reducer;