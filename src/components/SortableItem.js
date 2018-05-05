import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { Col } from 'react-bootstrap';
import CardItem from './CardItem';

export const SortableItem = SortableElement(({value, removeCard, setTitle, setDesc, cards}) =>
  <Col sm={3}>
   <CardItem card = {value} key = {value.id} id={value.id} removeCard = {removeCard} setTitle = {setTitle} setDesc = {setDesc} cards={cards}/>
  </Col>
);