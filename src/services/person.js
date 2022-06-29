export const postPerson = async (name, lastName, email, photo, birthdate) => {
  fetch("https://kodemia-18g-default-rtdb.firebaseio.com/.json", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify({
      firstName: name,
      lastName,
      email,
      birthdate,
      photoURL: photo,
    }),
  });
};
