import { LOGIN } from "../type";

const initialState = {
  error: null,
  isAuth: false,
  isLoading: false,
  accessToken: "",
  success: false,
  user: {},
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        success: false,
      };

    case LOGIN.SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        accessToken: payload,
      };

    case LOGIN.FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        accessToken: "",
        error: payload,
        user: {},
        success: false,
      };
    default:
      return state;
  }
};
