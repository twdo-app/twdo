export interface task {
  id: string;
  projectId: number | null;
  description: string;
}

export interface project {
  id: number;
  name: string;
  emoji: string;
}
