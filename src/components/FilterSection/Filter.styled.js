import styled from 'styled-components';

export const ListInput = styled.input`
  width: ${p => p.theme.space[8]}px;
  padding: ${p => p.theme.space[2]}px;
  outline: none;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.md};
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.s};
  margin-bottom: ${p => p.theme.space[3]}px;
  transition: border 250ms, box-shadow 250ms;

  :hover,
  :focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    box-shadow: 2px 2px 3px #00bfff;
  }
`;
