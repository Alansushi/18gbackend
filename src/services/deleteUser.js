export const deleteUser = async (id) => {
  fetch(`https://kodemia-18g-default-rtdb.firebaseio.com/${id}.json`, {
    method: "DELETE",
    //   headers: {
    //     "Content-Type": "Application/JSON",
    //   },
    //   body: JSON.stringify({
    //     firstName: name,
    //     lastName,
    //     email,
    //     photoURL: photo,
    //   }),
  });
};
