import React from 'react';

import PropTypes from 'prop-types';

import { Container, Table, Card, CardHeader } from './styles';

export default function CoursesList({ data }) {
  function renderData() {
    return data.length ? (
      data.map((vacancie, index) => (
        <tr key={index}>
          <td>{vacancie.estado}</td>
          <td>{vacancie.faculdade}</td>
          <td>{vacancie.cidade}</td>
          <td>{vacancie.curso}</td>
          <td>{vacancie.nota}</td>
          <td>{vacancie.vagas}</td>
          <td>{vacancie.vagaAmplaConcorrencia}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td>There is no data</td>
      </tr>
    );
  }

  function renderCard() {
    return data.length ? (
      data.map(vacancie => (
        <Card data-testid="card-list" key={vacancie.id}>
          <CardHeader>
            <h2>Curso: {vacancie.curso}</h2>
            <span>Minha Média: {vacancie.nota}</span>
            <span>Vagas: {vacancie.vagas}</span>
            <span>
              Vagas Ampla Concorrência : {vacancie.vagaAmplaConcorrencia}
            </span>
            <span>Cidade: {vacancie.cidade}</span>
            <span>Faculdade: {vacancie.faculdade}</span>
            <span>Estado: {vacancie.estado}</span>
          </CardHeader>
        </Card>
      ))
    ) : (
      <Card>
        <CardHeader>
          <span>There is no data</span>
        </CardHeader>
      </Card>
    );
  }
  return (
    <Container id="courses-list">
      <Table data-testid="users-list">
        <thead>
          <tr>
            <th>Estado</th>
            <th>Faculdade</th>
            <th>Cidade</th>
            <th>Curso</th>
            <th>Nota</th>
            <th>Vagas</th>
            <th>Vagas Ampla Concorrência</th>
          </tr>
        </thead>
        <tbody data-testid="tbody-list">{renderData()}</tbody>
      </Table>
      {renderCard()}
    </Container>
  );
}

CoursesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      age: PropTypes.number,
      description: PropTypes.string,
      fullName: PropTypes.string,
    }).isRequired
  ).isRequired,
  handleDetails: PropTypes.func,
};

CoursesList.defaultProps = {
  handleDetails: () => {},
};
