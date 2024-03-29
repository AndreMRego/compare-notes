import { Form } from '@rocketseat/unform';
import styled from 'styled-components';

import { breakpoints } from '~/constants';

export const Wrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 15px 30px;
  /* background: #fff; */

  label {
    color: #444;
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 0.9rem;
  }

  input {
    height: 38px;
    border: 1px solid #ddd;
    padding: 0 15px;
    border-radius: 4px;
    background: #fff;
    /* margin: 0 0 20px; */
    width: 100%;

    &::placeholder {
      color: #999;
    }
  }

  > span {
    color: #ee4d64;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.xxs}) {
    margin: 2em 0 0 0;
    display: block;
  }
`;
