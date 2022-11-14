import styled from 'styled-components';
import { AiFillPhone, AiOutlineUserAdd } from 'react-icons/ai';
import { Field, Form } from 'formik';

export const FormContact = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.sm};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-top: ${p => p.theme.space[4]}px;
`;

export const Input = styled(Field)`
  position: relative;
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

export const FormButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  padding: ${p => p.theme.space[3]}px;
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

export const Eror = styled.p`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.muted};
`;

export const IconsUser = styled(AiOutlineUserAdd)`
  position: absolute;
  display: inline-flex;
  top: 355px;
  left: 617px;
  fill: ${p => p.theme.colors.accent};
`;

export const Icons = styled(AiFillPhone)`
  position: absolute;
  display: inline-flex;
  top: 435px;
  left: 685px;
  rotate: 120deg;
  fill: ${p => p.theme.colors.accent};
`;
