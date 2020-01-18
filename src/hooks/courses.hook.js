import { useState, useEffect } from 'react';

import { findAll } from '~/services/courses.service';

/**
 * Function is responsible for get all courses
 *
 * @param {Function} setCourses
 */

const fetchCourses = async ({ query, setCourses }) => {
  try {
    const data = await findAll({ query });

    const dataFormatted = data.map(curse => ({
      ...curse,
      name: curse.nome,
    }));
    return setCourses(dataFormatted);
  } catch (error) {}
};

/**
 * this hook is responsible for fetch courses and set on state
 */

export function useCourses({ query }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses({ query, setCourses });
  }, [query]);

  return [courses, setCourses];
}
