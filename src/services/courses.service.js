import api from './api';

const ENDPOINT = 'curso';

export const findAll = async ({ query }) => {
  try {
    const { data } = await api.get(`${ENDPOINT}?nome=${query}`);

    return data;
  } catch (error) {}
};

export const findById = async ({ id }) => {
  try {
    const { data } = await api.get(`${ENDPOINT}/${id}`);

    return data;
  } catch (error) {}
};
