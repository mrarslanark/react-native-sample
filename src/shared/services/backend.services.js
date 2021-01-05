import { HTTPClient } from '../constants/constants';

export const getRequest = async () => {
  let result = await HTTPClient.get('GET_REQUEST_END_POINT');
  return result;
};

export const postRequest = async (data) => {
  let result = await HTTPClient.post('POST_REQUEST_END_POINT', data);
  return result;
};
