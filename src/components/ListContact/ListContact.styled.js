import styled from 'styled-components';

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: ${p => p.theme.space[3]}px;
  gap: ${p => p.theme.space[3]};
`;

export const ItemList = styled.li`
  width: 100%;
`;

export const ItemListParagr = styled.p`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ItemListButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  padding: ${p => p.theme.space[2]}px;
  outline: none;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.md};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  transition: border 250ms, box-shadow 250ms, scale 250ms;

  :hover,
  :focus {
    cursor: pointer;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    box-shadow: 2px 2px 3px #00bfff;
    scale: 1.1;
  }
`;
