
import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

let lastId = 0;

const slice = createSlice({
    name: "user",
    initialState: {
        jwt: null,
        iat: null,
        exp: null,
    },
    reducers: {
        loggedInWithJWT: (state, action) => {
            state.jwt = action.payload;

            const decoded = jwtDecode(action.payload);
            state.iat = decoded.iat;
            state.exp = decoded.exp;
        },
    }
});

export const { addUser, assignBug } = slice.actions;
export default slice.reducer;
