import React from 'react';

import PropTypes from 'prop-types';

import { Container, Table, Card, CardHeader, CardValue } from './styles';

export default function CoursesList({ data }) {
  function renderData() {
    return data.length ? (
      data.map(vacancie => (
        <tr key={vacancie.id}>
          <td>{vacancie.estado}</td>
          <td>{vacancie.faculdade}</td>
          <td>{vacancie.cidade}</td>
          <td>{vacancie.curso}</td>
          <td>{vacancie.nota}</td>
          <td>{vacancie.notaCotaRegional}</td>
          <td>{vacancie.notaDeCorte}</td>
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
            <h2>
              Faculdade: <span>{vacancie.faculdade}</span>
            </h2>
            <CardValue>
              Cidade: <span>{vacancie.cidade}</span>
            </CardValue>
            <CardValue>
              Minha Média: <span>{vacancie.nota}</span>
            </CardValue>
            {vacancie.notaCotaRegional !== '-' && (
              <CardValue>
                Nota (bônus regional): <span>{vacancie.notaCotaRegional}</span>
              </CardValue>
            )}
            <CardValue>
              Nota de Corte: <span>{vacancie.notaDeCorte}</span>
            </CardValue>
            <CardValue
              colorCorteNote={
                vacancie.diferencaNotaNormal > 0 ? '#90EE90' : '#FF6347'
              }
            >
              Diferença da nota de corte:{' '}
              <span>{vacancie.diferencaNotaNormal}</span>
            </CardValue>
            {vacancie.notaCotaRegional !== '-' && (
              <CardValue
                colorCorteRegional={
                  vacancie.diferencaNotaRegional > 0 ? '#90EE90' : '#FF6347'
                }
              >
                Diferença da nota de corte (bônus regional):{' '}
                <span>{vacancie.diferencaNotaRegional}</span>
              </CardValue>
            )}
            <CardValue>
              Vagas: <span>{vacancie.vagas}</span>
            </CardValue>
            <CardValue>
              Vagas Ampla Concorrência :{' '}
              <span>{vacancie.vagaAmplaConcorrencia}</span>
            </CardValue>
            <CardValue>
              Curso: <span>{vacancie.curso}</span>
            </CardValue>
            <CardValue>
              Estado: <span>{vacancie.estado}</span>
            </CardValue>
          </CardHeader>
        </Card>
      ))
    ) : (
      <Card>
        <CardHeader>
          <CardValue>There is no data</CardValue>
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
            <th>Minha Média</th>
            <th>Nota (bônus regional)</th>
            <th>Nota de Corte</th>
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
