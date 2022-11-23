import axios from "axios";

import { useIssuesDispatch } from "../context/issuesContext";

const useGetIssues = () => {
  const dispatch = useIssuesDispatch();
  const getIssue = async (pageToRender) => {
    dispatch({ type: "GET_ISSUES_PENDING" });
    try {
      const res = await axios.get(
        `https://api.github.com/repos/angular/angular-cli/issues?sort=comments&per_page=8&page=${pageToRender}`,
        {
          headers: {
            Authorization: "token" + process.env.REACT_APP_API_KEY,
          },
        }
      );
      const newDataArr = res.data.map((obj) => ({
        date: obj.created_at.split("T")[0],
        title: obj.title,
        user: obj.user.login,
        number: obj.number,
        comments: obj.comments,
        id: obj.id,
      }));
      dispatch({ type: "GET_ISSUES_FULFILLED", payload: { newDataArr } });
    } catch (err) {
      dispatch({ type: "GET_ISSUES_REJECTED" });
    }
  };

  return getIssue;
};

export default useGetIssues;
