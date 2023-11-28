export async function fetchData(route) {
  const response = await fetch(`http://localhost:3001/${route}`);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(`Failed to load ${route}`);
  }
  return resData[route];
}
export async function fetchRoom(route) {
  const response = await fetch(`http://localhost:3001/rooms/${route}`);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(`Failed to load ${route}`);
  }
  return resData.room;
}
