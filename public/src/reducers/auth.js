import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from "../actions/constants";
import AuthService from "../services/authService";

const email = AuthService.getEmail();
const token = AuthService.getToken();

const initialState = token
  ? { isLoggedIn: true, email, token }
  : { isLoggedIn: false, email: null, token: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        email: payload.email
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        email: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        email: payload.email
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        email: null
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        email: null
      };
    default:
      return state;
  }
}
