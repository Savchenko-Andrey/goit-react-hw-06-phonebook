import { Box } from 'commonStyle/Common.styled';
import { Formes } from './FormSection/Form';
import { Filter } from './FilterSection/Filter';
import { Renderlist } from './ListContact/ListContact';
import { ContactList } from './ListContact/ListContact.styled';

export const Phonebook = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" p={8}>
        <h1>Phonebook</h1>
        <Formes />
        <h2>Contacts</h2>
        <Filter />
        <ContactList>
          <Renderlist />
        </ContactList>
      </Box>
    </>
  );
};
