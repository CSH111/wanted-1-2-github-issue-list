import { Issue } from "../context";
import { useService } from "../context/serviceContext";

const useGetIssues = () => {
  const dispatch = Issue.useDispatch();
  const { getIssues } = useService();

  return async (pageToRender) => {
    dispatch({ type: "GET_ISSUES_PENDING" });
    try {
      const res = await getIssues(pageToRender);
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
};

export default useGetIssues;
