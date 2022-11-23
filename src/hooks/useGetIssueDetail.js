import axios from "axios";
import { useReducer } from "react";
import { useEffect } from "react";

const initialState = {
  isLoading: true,
  isError: false,
  mainData: {},
  commentsData: [],
};

const issueDetailReducer = (state, { type, payload: { mainData, commentsData } = {} }) => {
  switch (type) {
    case "GET_ISSUE_DETAIL_PENDING":
      return { ...state, isLoading: true, isError: false };
    case "GET_ISSUE_DETAIL_FULLFILLED":
      return { ...state, mainData, commentsData, isLoading: false, isError: false };
    case "GET_ISSUE_DETAIL_REJECTED":
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

const useGetIssueDetail = (issueNumber) => {
  const [issueDetail, dispatch] = useReducer(issueDetailReducer, initialState);
  useEffect(() => {
    dispatch({ type: "GET_ISSUE_DETAIL_PENDING" });
    const mainRespones = axios.get(
      `https://api.github.com/repos/angular/angular-cli/issues/${issueNumber}`,
      {
        headers: {
          Authorization: "token" + process.env.REACT_APP_API_KEY,
        },
      }
    );
    const commentResponse = axios.get(
      `https://api.github.com/repos/angular/angular-cli/issues/${issueNumber}/comments`,
      {
        headers: {
          Authorization: "token" + process.env.REACT_APP_API_KEY,
        },
      }
    );

    Promise.all([mainRespones, commentResponse]) //
      .then(([main, comments]) => {
        dispatch({
          type: "GET_ISSUE_DETAIL_FULLFILLED",
          payload: {
            mainData: main.data,
            commentsData: comments.data,
          },
        });
      })
      .catch(() => {
        dispatch("GET_ISSUE_DETAIL_REJECTED");
      });
  }, []);

  return issueDetail;
};

export default useGetIssueDetail;
