import { useReducer } from "react";
import { useEffect } from "react";

import { useService } from "../context/serviceContext";

const initialState = {
  isLoading: true,
  isError: false,
  commentsData: [],
};

const issueDetailReducer = (state, { type, payload: { mainData, commentsData } = {} }) => {
  switch (type) {
    case "GET_ISSUE_DETAIL_PENDING":
      return { ...state, isLoading: true, isError: false };
    case "GET_ISSUE_DETAIL_FULLFILLED":
      return {
        ...state,
        commentsData: [mainData, ...commentsData],
        isLoading: false,
        isError: false,
      };
    case "GET_ISSUE_DETAIL_REJECTED":
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

const useIssueDetail = (issueNumber) => {
  const [issueDetail, dispatch] = useReducer(issueDetailReducer, initialState);
  const { getIssueDetail, getIssueComments } = useService();

  useEffect(() => {
    (async () => {
      dispatch({ type: "GET_ISSUE_DETAIL_PENDING" });

      const mainRespones = getIssueDetail(issueNumber);
      const commentResponse = getIssueComments(issueNumber);

      try {
        const [main, comments] = await Promise.all([mainRespones, commentResponse]);
        dispatch({
          type: "GET_ISSUE_DETAIL_FULLFILLED",
          payload: {
            mainData: main.data,
            commentsData: comments.data,
          },
        });
      } catch (err) {
        dispatch({ type: "GET_ISSUE_DETAIL_REJECTED" });
      }
    })();
  }, []);

  return issueDetail;
};

export default useIssueDetail;
