export const fetchUsers = async () => {
  try {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/users',
      {
        method: 'GET',
      }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw Error(error.message);
    }
    throw Error('Failed to Fetch Accounts');
  }
};
