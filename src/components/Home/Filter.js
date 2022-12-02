import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Filter = () => {
  const selectArr = [
    { value: "comments", text: "코멘트 많은 순" },
    { value: "created", text: "최신 순" },
  ];
  const [params, setParams] = useSearchParams();
  const currentFilter = params.get("sort");
  const defaultSortValue = selectArr[0].value;

  useEffect(() => {
    if (params.get("sort")) return;
    setParams({ sort: defaultSortValue });
  }, []);

  const handleOptionChange = ({ target: { value } }) => {
    setParams({ sort: value });
  };

  return (
    <StyledFilter value={currentFilter} onChange={handleOptionChange}>
      {selectArr.map(({ value, text }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </StyledFilter>
  );
};

export default Filter;

const StyledFilter = styled.select`
  align-self: flex-end;
  border-radius: 5px;
`;
