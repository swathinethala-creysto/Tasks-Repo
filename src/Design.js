import * as React from 'react';
import Row from './Row';

export default function Design(props){
  return (
    <div
      style={{
        display: 'flex',
        width: '400px',
        justifyContent: 'space-between',
        height: '80px',
        alignItems: 'center',
      }}
    >
      <Row data={{ 1: 20, 2: 10, 3: 10, 4: 20 }} color={props.color}/>
      <Row data={{ 1: 20, 2: 20, 3: 20, 4: 20 }} color={props.color}/>
      <Row data={{ 1: 20, 2: 10, 3:10, 4: 20 }} color={props.color}/>
      <Row data={{ 1: 20, 2: 10, 3: 10, 4: 20 }} color={props.color}/>
      <Row data={{ 1: 20, 2: 15, 3: 15, 4: 20 }} color={props.color}/>
      <Row data={{ 1: 20, 2: 10, 3: 10, 4: 20 }} color={props.color}/>
      <Row data={{ 1: 20, 2: 10, 3: 10, 4: 20 }} color={props.color}/>
      <Row data={{ 1: 20, 2: 20, 3: 20, 4: 20 }} color={props.color}/>
      <Row data={{ 1: 20, 2: 10, 3: 10, 4: 20 }} color={props.color}/>
      <Row data={{ 1: 20, 2: 10, 3: 10, 4: 20 }} color={props.color}/>
      <Row data={{ 1: 20, 2: 15, 3: 15, 4: 20 }} color={props.color}/>
      <Row data={{ 1: 20, 2: 10, 3: 10, 4: 20 }} color={props.color}/>
      <Row data={{ 1: 20, 2: 10, 3: 10, 4: 20 }} color={props.color}/>
      <Row data={{ 1: 20, 2: 20, 3: 20, 4: 20 }} color={props.color}/>
      <Row data={{ 1: 20, 2: 10, 3: 10, 4: 20 }} color={props.color}/>
      <Row data={{ 1: 20, 2: 10, 3: 10, 4: 20 }} color={props.color}/>
      <Row data={{ 1: 20, 2: 15, 3: 15, 4: 20 }} color={props.color}/>
      <Row data={{ 1: 20, 2: 10, 3: 10, 4: 20 }} color={props.color}/>

    </div>
  );
}
