const getParamsAsObj = (URLSearchParams) => {
  const paramsObj = {}; //util로 뺴기
  for (let [key, value] of URLSearchParams.entries()) {
    paramsObj[key] = value;
  }

  return paramsObj;
};

export default getParamsAsObj;
