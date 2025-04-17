export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line no-unused-vars
    const task = true; // Using const to ensure block scope
    // eslint-disable-next-line no-unused-vars
    const task2 = false; // Using const to ensure block scope
  }

  return [task, task2];
}
