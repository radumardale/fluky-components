import React from 'react';
import DisplayPanel from '../displayPanel';
import Button from 'fluky-components/atoms/Button';

/** Compact Buttons variations example */
export default function PainButtonExample() {
  return (
    <DisplayPanel>
      <Button compact={true} >Click me</Button>
      <Button compact={true}  kind="dominant">Click me</Button>
      <Button compact={true}  kind="inferior">Click me</Button>
      <Button compact={true}  kind="risk">Click me</Button>
    </DisplayPanel>
  );
}