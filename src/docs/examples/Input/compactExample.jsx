import React from 'react';
import Input from 'fluky-components/atoms/Input';

/** Compact Input with a placeholder example */
export default function ExampleHelloWorld() {
  return <Input
    compact={true}
    placeholder="text here..."
  />;
}