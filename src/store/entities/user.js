import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import http from "../../services/httpService";
import { apiCallBegan } from "./../apiActions";

const apiEndpoint = process.env.REACT_APP_API_LOGIN;
const tokenKey = "token";

const slice = createSlice({
  name: "user",
  initialState: {
    token: null,
    name: null,
    _id: null,
    iat: null,
    exp: null,
  },
  reducers: {
    loggedIn: (state, { payload }) => {
      const token = payload.data.token;

      localStorage.setItem(tokenKey, token);

      const decoded = jwtDecode(token);
      Object.keys(state).forEach((key) => {
        state[key] = decoded[key];
      });

      state.token = token;
    },
    loggedInWithJWT: (state, { payload: token }) => {
      localStorage.setItem(tokenKey, token);

      const decoded = jwtDecode(token);
      Object.keys(state).forEach((key) => {
        state[key] = decoded[key];
      });

      state.token = token;
    },
    loggedOut: (state) => {
      localStorage.removeItem(tokenKey);
      Object.keys(state).forEach((key) => {
        state[key] = null;
      });
    },
    jwtHasSet: (state) => {
      const token = localStorage.getItem(tokenKey) || null;
      if (!token) return;

      const decoded = jwtDecode(token);

      Object.keys(state).forEach((key) => {
        state[key] = decoded[key];
      });

      state.token = token;
    },
  },
});

export default slice.reducer;

const { loggedIn, loggedInWithJWT, loggedOut, jwtHasSet } = slice.actions;

// ACTIONS
export const setJwt = () => (dispatch) => {
  return dispatch({
    type: jwtHasSet.type,
  });
};

export const login =
  ({ email, password, onSuccess, onError }) =>
  async (dispatch) => {
    return dispatch(
      apiCallBegan({
        url: apiEndpoint,
        method: "post",
        data: {
          email,
          pass: password,
        },
        onSuccess: onSucceed,
        onError,
      })
    );

    function onSucceed(data) {
      dispatch({ type: loggedIn.type, payload: data });
      if (onSuccess) onSuccess();
    }
  };

export const loginWithJWT = (jwt) => (dispatch) => {
  return dispatch({
    type: loggedInWithJWT.type,
    payload: {
      jwt,
    },
  });
};

export const logout = () => (dispatch) => {
  return dispatch({
    type: loggedOut.type,
  });
};

// SELECTORS
export const selectCurrentUser = (state) => state.entities.user;
export const selectJwt = (state) => state.entities.user.jwt;
