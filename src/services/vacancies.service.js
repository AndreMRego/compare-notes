import { toast } from 'react-toastify';

import api from './api';

const ENDPOINT = 'mediacurso';

export const findAll = async ({ curse, red, cnt, cht, lct, mt }) => {
  try {
    const { data } = await api.get(
      `${ENDPOINT}?curso=${curse}&notahumanas=${cht}&notalinguagens=${lct}&notamatematica=${mt}&notanatureza=${cnt}&notaredacao=${red}`
    );

    return data;
  } catch (error) {}
};

export const findById = async ({ id }) => {
  try {
    const { data } = await api.get(`${ENDPOINT}/${id}`);

    return data;
  } catch (error) {}
};
