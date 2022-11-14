import * as Yup from 'yup';
import 'yup-phone';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { Box } from 'commonStyle/Common.styled';
import { FormContact, FormLabel, Input, FormButton, Eror } from './Form.styled';
import { addContact, getContact } from 'redux/contactsSlice';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().phone('ua').required(),
});

const initialValue = { name: '', number: '' };

export const Formes = () => {
  const dispatch = useDispatch();
  const contact = useSelector(getContact);

  const hendleSubmit = (values, { resetForm }) => {
    addContacsFormSubmit(values);
    resetForm();
  };

  const addContacsFormSubmit = ({ name, number }) => {
    if (contact.find(item => item.name === name)) {
      return Notiflix.Notify.warning(`${name} is already is contacts`);
    } else {
      dispatch(addContact(name, number));
    }
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={hendleSubmit}
      validationSchema={validationSchema}
    >
      <FormContact>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <FormLabel>
            Name
            <Input type="text" name="name" />
            <ErrorMessage name="name" render={msg => <Eror>{msg}</Eror>} />
          </FormLabel>

          <FormLabel>
            Telephone
            <Input type="tel" name="number" />
            <ErrorMessage name="number" render={msg => <Eror>{msg}</Eror>} />
          </FormLabel>

          <FormButton type="submit">Add Contact</FormButton>
        </Box>
      </FormContact>
    </Formik>
  );
};
