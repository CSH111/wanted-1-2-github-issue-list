import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const IssuesContext = createContext(null);
const IssuesDispatchContext = createContext(null);

const IssuesReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_ISSUES_PENDING":
      return { ...state, isLoading: true, isError: false };
    case "GET_SORT_CHANGED_ISSUES_PENDING":
      return { ...initialState };
    case "GET_ISSUES_FULFILLED": {
      // const isSortOptionChanged = state.sort !== "" && state.sort !== payload?.sort;
      // if (isSortOptionChanged) {
      //   console.log("옵션 changed");
      //   return {
      //     ...state,
      //     issuesData: [...state.issuesData, ...payload.newDataArr],
      //     isLoading: false,
      //     isError: false,
      //     pageToRender: 2,
      //     sort: payload.sort,
      //   };
      // }
      // console.log(payload);
      return {
        ...state,
        issuesData: [...state.issuesData, ...payload.newDataArr],
        isLoading: false,
        isError: false,
        pageToRender: state.pageToRender + 1,
        // sort: payload.sort,
      };
    }
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
  // sort: "",
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
