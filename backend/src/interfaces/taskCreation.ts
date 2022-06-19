interface ITaskCreation {
  userId: number;

  //isCompleted: boolean;
  description: string;
  dueDate?: string;
  date?: string;
  dateIndex?: number;
  projectIndex?: number;
}
export default ITaskCreation;
