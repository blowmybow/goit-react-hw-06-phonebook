import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from '../../redux/filter/filterSlice';

import { LabelWrapper, Label, Input } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch(setFilter);

  const changeFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };
  return (
    <Label>
      <LabelWrapper>Find contacts by name</LabelWrapper>
      <Input
        type="text"
        value={filter}
        onChange={changeFilter}
        placeholder="search contacts"
      />
    </Label>
  );
};

export default Filter;
