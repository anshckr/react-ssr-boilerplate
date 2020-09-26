import { OKR_URL } from './constants';

const fetchOKR = () => {
  return fetch(OKR_URL).then((res) => res.json());
};

export default fetchOKR;
