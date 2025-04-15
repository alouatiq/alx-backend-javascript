export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const taskInside = true;
    const task2Inside = false;
    return [taskInside, task2Inside];
  }

  return [task, task2];
}
