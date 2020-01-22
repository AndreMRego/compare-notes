import React, { useState, useEffect } from 'react';

import * as Yup from 'yup';

import Button from '~/components/Button';
import CoursesList from '~/components/CoursesList';
import Form from '~/components/Form';
import Input from '~/components/Input';
import ReactSelect from '~/components/ReactSelect';
import { useCourses } from '~/hooks/courses.hook';
import { findAll } from '~/services/vacancies.service';
import { filterFloat } from '~/utils/checkNumber';

import { Container, TopHeader, Row, Column, ButtonWrapper } from './styles';

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
export default function Main() {
  const [course, setCourse] = useState({});
  const [query, setQuery] = useState('');
  const courses = useCourses({ query });

  const [openCourses, setOpenCourses] = useState(false);
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const element = document.getElementById('courses-list');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [openCourses]);

  async function handleSubmit({ curso_id, red, cnt, cht, lct, mt }) {
    const data = await findAll({ curse: curso_id, red, cnt, cht, lct, mt });
    const dataFormatted = data.map(obj => ({
      ...obj,
      nota: parseFloat(obj.nota).toFixed(2),
      notaCotaRegional:
        obj.notaCotaRegional !== '-'
          ? parseFloat(obj.notaCotaRegional).toFixed(2)
          : obj.notaCotaRegional,
      diferencaNotaNormal: filterFloat(obj.diferencaNotaNormal).toFixed(2),
      diferencaNotaRegional: filterFloat(obj.diferencaNotaRegional).toFixed(2),
    }));
    setVacancies(dataFormatted);
    setOpenCourses(true);
  }

  return (
    <Container>
      <TopHeader>
        <h2>Média do ENEM por Curso e Faculdade</h2>
      </TopHeader>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Row>
          <ReactSelect
            name="curso_id"
            label="Curso"
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
            <Input label="Ciências da Natureza" name="cnt" />
          </Column>
          <Column>
            <Input label="Ciências Humanas" name="cht" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Input label="Linguagens, Códigos" name="lct" />
          </Column>
          <Column>
            <Input label="Matemática" name="mt" />
          </Column>
        </Row>

        <ButtonWrapper>
          <Button width={142} color="#7159C1" type="submit">
            Pesquisar Faculdades
          </Button>
        </ButtonWrapper>
      </Form>

      {openCourses && <CoursesList data={vacancies} />}
    </Container>
  );
}
