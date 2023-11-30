export async function fetchData(route) {
  const response = await fetch(`http://localhost:3001/${route}`);
  const resData = await response.json();

  const [rawRoute] = route.split('/');

  if (!response.ok) {
    throw new Error(`Failed to load ${route}`);
  }
  return resData[rawRoute];
}
