import { darken } from 'polished';
import styled from 'styled-components';

import { breakpoints } from '~/constants';

export const Container = styled.button.attrs(props => ({
  disabled: props.disabled,
}))`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${props => props.width && `${props.width}px`};
  height: ${props => props.height}px;
  border: 0;
  color: #fff;
  padding: ${props => props.padding && '6px 12px'};

  border-radius: 4px;
  background: ${props => props.color};

  &:hover {
    background: ${props => darken(0.03, props.color)};
  }

  svg {
    margin-right: 5px;
  }
  & + & {
    margin-left: 5px;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  span {
    font-size: 0.8rem;
    font-weight: bold;
  }
  /* @media (max-width: ${breakpoints.xxs}) {
    margin: 0 0 5em 0;
    color: #444;
  } */
`;
