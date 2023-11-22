export async function fetchAvailableRooms () {
    const response = await fetch('http://localhost:3001/rooms');
    const resData = await response.json();

    if (!response.ok) {
      throw new Error('Failed to load rooms');
}
return resData.rooms
}