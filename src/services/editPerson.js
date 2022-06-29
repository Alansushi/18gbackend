export const PatchPerson = async (name, lastName, email, photo, id) => {
  fetch(`https://kodemia-18g-default-rtdb.firebaseio.com/${id}.json`, {
    method: "PATCH",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify({
      firstName: name,
      lastName,
      email,
      photoURL: photo,
    }),
  });
};
