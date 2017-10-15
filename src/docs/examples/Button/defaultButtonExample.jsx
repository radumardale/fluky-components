import React from 'react';
import DisplayPanel from '../displayPanel';
import Button from 'fluky-components/atoms/Button';

/** Buttons variations example */
export default function PainButtonExample() {
  return (
    <DisplayPanel>
      <Button>Click me</Button>
      <Button kind="dominant">Click me</Button>
      <Button kind="inferior">Click me</Button>
      <Button kind="risk">Click me</Button>
    </DisplayPanel>
  );
}