import React from 'react';

import PropTypes from 'prop-types';

import { Container, Table, Card, CardHeader, CardBody } from './styles';

export default function CoursesList({ data, handleDetails }) {
  function renderData() {
    return data.length ? (
      data.map(user => (
        <tr key={user.id}>
          <td>{user.fullName}</td>
          <td>
            <button type="button" onClick={() => handleDetails(user.id)}>
              Show
            </button>
          </td>
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
      data.map(user => (
        <Card data-testid="card-list" key={user.id}>
          <CardHeader>
            <h2>{user.fullName}</h2>
            <span>Age: {user.age}</span>
          </CardHeader>
          <CardBody>
            <span>Description: {user.description}</span>
            <div>
              <span>checkbox</span>
              <button type="button" onClick={() => handleDetails(user.id)}>
                Show
              </button>
            </div>
          </CardBody>
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
            <th>Cidade/Estado</th>
            <th>Faculdade</th>
            <th>Campus</th>
            <th>Curso</th>
            <th>Nota</th>
            <th>Vagas</th>
            <th>Actions</th>
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
