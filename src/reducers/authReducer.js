import {
  GET_USER_LIST,
  GET_USER_LIST_FULFILLED,
  GET_USER_LIST_FAILURE
} from "actions/Auth/actionTypes";

const initialState = {
  getListLoading: false,
  memberList: []
};

const getList = (state, action) => ({
  ...state,
  getListLoading: true
});

const getListSuccess = (state, action) => {
  console.log("check the data in reducer", action);
  return {
    ...state,
    getListLoading: false,
    memberList: action.payload.data
  };
};

const getListFailed = (state, action) => ({
  ...state,
  getListLoading: false,
  memberList: []
});

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST:
      return getList(state, action);
    case GET_USER_LIST_FULFILLED:
      return getListSuccess(state, action);
    case GET_USER_LIST_FAILURE:
      return getListFailed(state, action);
    default:
      return state;
  }
};

export default authReducer;
