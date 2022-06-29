export const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data;
};

// fetch("https://kodemia-18g-default-rtdb.firebaseio.com/.json", {
//   method: "POST",
//   headers: {
//     "Content-Type": "Application/JSON",
//   },
//   body: JSON.stringify({
//     firstName: "Alan",
//     lastName: "Guerrero",
//     email: "alanguerrerog98@gmail.com",
//     birthdate: "20/08/1998",
//   }),
// });
