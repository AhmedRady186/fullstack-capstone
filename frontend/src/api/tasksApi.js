export async function fetchTasks() {
  const response = await fetch("http://localhost:5000/api/tasks");
  return response.json();
}