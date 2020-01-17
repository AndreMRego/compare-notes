import React, { useState, useEffect } from 'react';

import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Button from '~/components/Button';
import CoursesList from '~/components/CoursesList';
import ReactSelect from '~/components/ReactSelect';
import { useCourses } from '~/hooks/courses.hook';

import {
  Container,
  TopHeader,
  CustomForm,
  Row,
  Column,
  ButtonWrapper,
} from './styles';

const schema = Yup.object().shape({
  curso_id: Yup.number()
    .typeError('É necessário escolher um curso')
    .required('É necessário escolher um curso'),
  red: Yup.string().required('A nota de Redação é obrigatória'),
  cnt: Yup.string().required(
    'A nota de Ciências da Natureza e suas Tecnologias é obrigatória'
  ),
  cht: Yup.string().required(
    'A nota de Ciências Humanas e suas Tecnologias é obrigatória'
  ),
  lct: Yup.string().required(
    'A nota de Linguagens, Códigos e suas Tecnologias  é obrigatória'
  ),
  mt: Yup.string().required(
    'A nota de Matemática e suas Tecnologias é obrigatória'
  ),
});
export default function Main({ history }) {
  const [course, setCourse] = useState({});
  const [query, setQuery] = useState('');
  const [courses, setCourses] = useCourses({ query });

  const [openCourses, setOpenCourses] = useState(false);
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const element = document.getElementById('courses-list');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [openCourses]);

  function handleDetails(id) {
    history.push(`users/${id}`);
  }

  function handleSubmit(data) {
    /* dispatch(signInRequest(email, password)); */
    console.log(data);
    setOpenCourses(!openCourses);
  }

  return (
    <Container>
      <TopHeader>
        <h2>Compare sua nota do ENEM</h2>
      </TopHeader>
      <CustomForm schema={schema} onSubmit={handleSubmit}>
        <Row>
          <ReactSelect
            name="curso_id"
            label="CURSO"
            value={course}
            onInputChange={value => setQuery(value)}
            placeholder="Selecione o curso"
            noOptionsMessage={() => 'Não há cursos'}
            onChange={item => setCourse(item)}
            options={courses}
          />
          <Column>
            <Input label="Redação" name="red" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Input label="Ciências da Natureza e suas Tecnologias" name="cnt" />
          </Column>
          <Column>
            <Input label="Ciências Humanas e suas Tecnologias" name="cht" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Input label="Linguagens, Códigos e suas Tecnologias" name="lct" />
          </Column>
          <Column>
            <Input label="Matemática e suas Tecnologias" name="mt" />
          </Column>
        </Row>

        <ButtonWrapper>
          <Button width={142} color="#7159C1" type="submit">
            Pesquisar cursos
          </Button>
        </ButtonWrapper>
      </CustomForm>

      {openCourses && (
        <CoursesList handleDetails={handleDetails} data={vacancies} />
      )}
    </Container>
  );
}
