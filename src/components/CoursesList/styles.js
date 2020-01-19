import styled from 'styled-components';

import { breakpoints } from '~/constants';

export const Container = styled.div`
  display: flex;

  width: 100%;
  flex-wrap: wrap;
  max-height: 130px;

  margin-top: 50px;

  @media (max-width: ${breakpoints.md}) {
    justify-content: center;
  }

  @media (max-width: ${breakpoints.xs}) {
    max-height: 50px;
  }

  @media (max-width: ${breakpoints.xxs}) {
    max-height: 5px;
    /*  margin-top: 300px; */
  }
`;
export const Table = styled.table`
  display: flex;
  flex: 1;
  flex-direction: column;

  background: #fff;

  @media (max-width: 1199px) {
    display: none;
  }

  thead {
    border: 1px solid rgba(224, 224, 224, 1);
  }

  tbody {
    border-left: 1px solid rgba(224, 224, 224, 1);
    border-right: 1px solid rgba(224, 224, 224, 1);
  }

  tr {
    display: flex;
    width: 100%;
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th {
    display: flex;
    flex: 1;
    padding: 30px 0 20px 0px;
    text-align: left;

    &:first-child {
      padding-left: 30px;
      max-width: 120px;
    }

    :nth-child(2) {
      max-width: 150px;
    }

    :nth-child(3) {
      max-width: 400px;
    }
    :nth-child(4) {
      padding-left: 20px;
    }
  }

  td {
    display: flex;
    flex: 1;
    margin: 0;
    padding: 16px 0;
    border-bottom: 1px solid rgba(224, 224, 224, 1);

    &:first-child {
      padding-left: 30px;
      max-width: 120px;
    }

    :nth-child(2) {
      max-width: 150px;
    }

    :nth-child(3) {
      max-width: 400px;
    }

    :nth-child(4) {
      padding-left: 20px;
    }

    button {
      border: 0;
      color: #4d85ee;
      font-size: 0.9rem;
      background: transparent;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 250px;
  flex-wrap: wrap;
  padding: 10px;
  margin: 20px 5px;
  border-radius: 4px;
  border: 1px solid #ccc;

  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }

  background: #fff;

  span {
    font-size: 0.9rem;
    margin: 5px 0;
  }

  button {
    border: 0;
    color: #4d85ee;
    font-size: 0.9rem;
    background: transparent;
  }
`;
export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;

  h2 {
    font-size: 1rem;
    margin: 5px 0;
  }
`;
export const CardBody = styled.div`
  div {
    display: flex;
    margin: 10px 0;
    justify-content: space-between;
  }
`;
