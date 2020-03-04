import queryString from 'query-string';

const queryParams = string => queryString.parse(string);

export default queryParams;
