import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const IssuesContext = createContext(null);
const IssuesDispatchContext = createContext(null);

const IssuesReducer = (state, action) => {
  switch (action.type) {
    case "GET_ISSUES_PENDING":
      return { ...state, isLoading: true, isError: false };
    case "GET_ISSUES_FULFILLED":
      return {
        ...state,
        issuesData: [...state.issuesData, ...action.payload.newDataArr],
        isLoading: false,
        isError: false,
        pageToRender: state.pageToRender + 1,
      };
    case "GET_ISSUES_REJECTED":
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

const initialState = {
  issuesData: [],
  pageToRender: 1,
  isLoading: true,
  isError: false,
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(IssuesReducer, initialState);
  return (
    <IssuesContext.Provider value={state}>
      <IssuesDispatchContext.Provider value={dispatch}>{children}</IssuesDispatchContext.Provider>
    </IssuesContext.Provider>
  );
};

export const useSelector = () => useContext(IssuesContext);
export const useDispatch = () => useContext(IssuesDispatchContext);

// 여기서 혹은 다른 전역상태에서 service, http 등 빼서쓸수있게끔?
