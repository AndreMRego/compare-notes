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
          <td>{vacancie.campus}</td>
          <td>{vacancie.curso}</td>
          <td>{vacancie.nota}</td>
          <td>{vacancie.vagas}</td>
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
            <span>Campus: {vacancie.campus}</span>
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
            <th>Campus</th>
            <th>Curso</th>
            <th>Nota</th>
            <th>Vagas</th>
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
