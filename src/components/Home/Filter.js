import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import getParamsAsObj from "../../utils/getParamsAsObj";

const Filter = ({ onChange }) => {
  const selectArr = [
    { value: "comments", text: "코멘트 많은 순" },
    { value: "created", text: "최신 순" },
  ];
  const [params, setParams] = useSearchParams();
  const currentFilter = params.get("sort");
  const handleOptionChange = ({ target: { value } }) => {
    // const currentParams = getParamsAsObj(params);
    // setParams({ ...currentParams, sort: value });
    setParams({ sort: value });
    // onChange();
  };

  return (
    <StyledSelect value={currentFilter ?? selectArr[0].value} onChange={handleOptionChange}>
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
