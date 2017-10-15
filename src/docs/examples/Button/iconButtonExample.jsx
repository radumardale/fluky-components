import React from 'react';
import DisplayPanel from '../displayPanel';
import Button from 'fluky-components/atoms/Button';
import Pencil from 'fluky-components/icons/Pencil'

/** Button variations examples with icons */
export default function PainButtonExample() {
  return (
    <div>
      <DisplayPanel>
        <Button icon={Pencil} >Click me</Button>
        <Button icon={Pencil}  kind="dominant">Click me</Button>
        <Button icon={Pencil}  kind="inferior">Click me</Button>
        <Button icon={Pencil}  kind="risk">Click me</Button>
      </DisplayPanel>
    </div>
  );
}