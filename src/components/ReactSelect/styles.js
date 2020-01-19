import Async from 'react-select/async';

import styled from 'styled-components';

import { breakpoints } from '~/constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;

  margin-right: 25px;

  > span {
    color: #ee4d64;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.sm}) {
    margin-right: 0;
  }

  @media (max-width: ${breakpoints.xxs}) {
    margin: 0 0 70px 0;
  }
`;

export const AsyncWrapper = styled(Async)`
  min-width: 150px;
  margin-bottom: 20px;
  background: #fff;
  .react-select__control {
    background: transparent;
  }

  .react-select__value-container {
    outline: initial !important;

    @media (max-width: ${breakpoints.xxs}) {
      max-height: 4vh;
    }
    max-height: 5vh;

    background: transparent;
  }

  .react-select__indicator-separator {
    display: none;
  }
`;
