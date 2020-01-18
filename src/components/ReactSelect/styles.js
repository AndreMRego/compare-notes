import Async from 'react-select/async';

import styled from 'styled-components';

import { breakpoints } from '~/constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-right: 25px;

  > span {
    color: #ee4d64;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
    margin: 0;
  }
`;

export const AsyncWrapper = styled(Async)`
  min-width: 150px;
  margin-bottom: 20px;

  .react-select__control {
    background: transparent;
  }

  .react-select__value-container {
    outline: initial !important;
    max-height: 45px;

    background: transparent;
  }

  .react-select__indicator-separator {
    display: none;
  }
`;
