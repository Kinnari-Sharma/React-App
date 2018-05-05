import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import { Grid, Row } from 'react-bootstrap';
import {SortableItem} from './SortableItem';

export const SortableList = SortableContainer(({items, removeCard, setTitle, setDesc, cards}) => {
  return (
    <Grid>
    <Row>
      {
        items.map((value, index) => (
        <SortableItem key={value.id} index={index} value={value} removeCard = {removeCard} setTitle = {setTitle} setDesc = {setDesc} cards={cards}/>
      ))}
    </Row>
    </Grid>
  );
});