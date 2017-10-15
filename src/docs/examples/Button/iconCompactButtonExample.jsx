import React from 'react';
import DisplayPanel from '../displayPanel';
import Button from 'fluky-components/atoms/Button';
import Pencil from 'fluky-components/icons/Pencil'

/** Compact Button variations examples with icons */
export default function PainButtonExample() {
  return (
    <div>
      <DisplayPanel>
        <Button compact={true} icon={Pencil} >Click me</Button>
        <Button compact={true} icon={Pencil}  kind="dominant">Click me</Button>
        <Button compact={true} icon={Pencil}  kind="inferior">Click me</Button>
        <Button compact={true} icon={Pencil}  kind="risk">Click me</Button>
      </DisplayPanel>
    </div>
  );
}