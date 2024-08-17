import qs from "query-string";

export const QueryRequestHelper = (props: any) => {
  let payload = { ...props };
  Object.keys(payload).forEach((key) => {
    if (
      (!payload[key] ||
        payload[key] === undefined ||
        (Array.isArray(payload[key]) && payload[key].length === 0)) &&
      typeof payload[key] !== "boolean"
    ) {
      delete payload[key];
    }
  });
  let queryRequest = qs.stringify(payload, {
    arrayFormat: "bracket",
    encode: false,
  });
  return queryRequest;
};
