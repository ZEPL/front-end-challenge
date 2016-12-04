export const EXAMPLE_ACTION = 'ExampleAction';

export function exampleAction(exampleValue) {
  return {
    type: EXAMPLE_ACTION,
    value: exampleValue,
  };
}
