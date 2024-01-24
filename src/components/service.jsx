const API_URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';


const getList = async (id) => {
  if (!id) id = 'users';
  const response = await fetch(`${API_URL}${id}.json`);
  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }
  const data = await response.json();
  return data;
}

export default getList;