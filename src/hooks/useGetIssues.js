import { Issue } from "../context";
import { useService } from "../context/serviceContext";
import { deleteISOTime } from "../utils";

const useGetIssues = () => {
  const dispatch = Issue.useDispatch();
  const { getIssues } = useService();

  return async (pageToRender = 1, loadAmount = 8) => {
    dispatch({ type: "GET_ISSUES_PENDING" });
    try {
      const res = await getIssues(pageToRender, loadAmount);

      const newDataArr = res.data.map((obj) => ({
        date: deleteISOTime(obj.created_at),
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
