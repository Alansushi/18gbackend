export const retrieve = async (id) => {
  const response = await fetch(
    `https://kodemia-18g-default-rtdb.firebaseio.com/${id}.json`
  );
  const data = await response.json();
  return data;
};
