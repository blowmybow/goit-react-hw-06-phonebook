import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

import { LabelWrapper, Label, Input } from './Filter.styled';

const filterId = nanoid();

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    const normalizeFilterValue = e.currentTarget.value.toLowerCase().trim();
    dispatch(setFilter(normalizeFilterValue));
  };
  return (
    <Label>
      <LabelWrapper>Find contacts by name</LabelWrapper>
      <Input
        type="text"
        value={filter}
        onChange={changeFilter}
        id={filterId}
        placeholder="search contacts"
      />
    </Label>
  );
};

export default Filter;
