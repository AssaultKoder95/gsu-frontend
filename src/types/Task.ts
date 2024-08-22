export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "inprogress" | "complete" | "backlog" | "blocked";
  createdAt?: string;
  updatedAt?: string;
}
