import axios from 'axios';

export const getMovieData = (payload) => {
  return axios
    .get(`http://localhost:8000/data`)
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((err) => {
      return err;
    });
};
