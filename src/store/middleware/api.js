import http from "../../services/httpService";
import * as actions from "../apiActions";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const {
      url,
      method = "get",
      onStart,
      onSuccess,
      onError,
      ...rest
    } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    try {
      const response = await http.call({
        url,
        method,
        ...rest,
      });

      // General
      dispatch(actions.apiCallSucceeded(response.data));

      // Specific
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      // General
      dispatch(actions.apiCallFailed(error.message));

      // Specific
      if (onError)
        dispatch({ type: onError, payload: { errorMessage: error.message } });
    }
  };

export default api;
