import { Task } from "../models/task.class";
import { LEVELS } from '../models/levels.enum';

const defaultTask1 = new Task('Task 1', 'This is 1', true, LEVELS.BLOKING)
const defaultTask2 = new Task('Task 2', 'This is 2', false, LEVELS.NORMAL)
const defaultTask3 = new Task('Task 3', 'This is 3', false, LEVELS.URGENT)

export const taskArray = [defaultTask1,defaultTask2,defaultTask3]
