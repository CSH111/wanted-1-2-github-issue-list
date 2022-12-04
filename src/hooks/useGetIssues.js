import { SORT_PARAMETER } from "../constants";
import { Issue } from "../context";
import { useService } from "../context/serviceContext";
import { deleteISOTime } from "../utils";

const ISSUES_AMOUNT_TO_GET = 10;

const useGetIssues = () => {
  const dispatch = Issue.useDispatch();
  const { getIssues } = useService();

  return async (pageToRender = 1, sortOption = SORT_PARAMETER.comments, sortChanged) => {
    if (!sortChanged) {
      dispatch({ type: "GET_ISSUES_PENDING" });
    }
    if (sortChanged) {
      dispatch({ type: "GET_SORT_CHANGED_ISSUES_PENDING" });
    }
    try {
      const res = await getIssues(pageToRender, sortOption, ISSUES_AMOUNT_TO_GET);

      const newDataArr = res.data.map((obj) => ({
        date: deleteISOTime(obj.created_at),
        title: obj.title,
        user: obj.user.login,
        number: obj.number,
        comments: obj.comments,
        id: obj.id,
      }));

      dispatch({ type: "GET_ISSUES_FULFILLED", payload: { newDataArr, sort: sortOption } });
    } catch (err) {
      dispatch({ type: "GET_ISSUES_REJECTED" });
    }
  };
};

export default useGetIssues;
