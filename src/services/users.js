export const list = async () => {
  const response = await fetch(
    `https://kodemia-18g-default-rtdb.firebaseio.com/.json`
  );
  const data = await response.json();
  return data;
};
