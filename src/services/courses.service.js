import { toast } from 'react-toastify';

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

export const update = async ({ id, data }) => {
  const { firstName, lastName, age, description } = data;
  try {
    const response = await api.put(`${ENDPOINT}/${id}`, {
      firstName,
      lastName,
      age,
      description,
    });

    if (response.status) {
      toast.success('User atualizado com sucesso!');
    }
  } catch (error) {}
};

export const deleteById = async ({ id, users }) => {
  try {
    const response = await api.delete(`${ENDPOINT}/${id}`);

    if (response.status) {
      toast.success('Registro apagado com sucesso!');
      const list = [...users];
      const userIndex = list.findIndex(user => user.id === id);
      if (userIndex >= 0) {
        list.splice(userIndex, 1);
      }
      return list;
    }
  } catch (error) {}
};
