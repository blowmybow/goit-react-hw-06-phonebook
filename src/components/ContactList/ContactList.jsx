import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { List, Item, Span, Button } from './ContactList.styled';

import {
  deleteContact,
  getFilteredContacts,
} from '../../redux/contacts/contactsSlice';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            <Span>{name} :</Span>
            <Span>{number}</Span>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;
