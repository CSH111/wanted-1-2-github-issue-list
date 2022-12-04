import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { SORT_PARAMETER } from "../../constants";
const Filter = () => {
  const selectArr = [
    { value: SORT_PARAMETER.comments, text: "많은 코멘트" },
    { value: SORT_PARAMETER.created, text: "최근 생성" },
    { value: SORT_PARAMETER.updated, text: "최근 업데이트" },
  ];
  const defaultFilterValue = selectArr[0].value;
  const [params, setParams] = useSearchParams();
  const currentFilter = params.get("sort");

  const handleOptionChange = ({ target: { value } }) => {
    setParams({ sort: value });
  };

  return (
    <StyledSelect value={currentFilter ?? defaultFilterValue} onChange={handleOptionChange}>
      {selectArr.map(({ value, text }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Filter;

const StyledSelect = styled.select`
  align-self: flex-end;
  border-radius: 5px;
`;
