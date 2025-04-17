export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;

    if (trueOrFalse) {
        const task = true; // Using const to ensure block scope
        const task2 = false; // Using const to ensure block scope
    }

    return [task, task2];
}
