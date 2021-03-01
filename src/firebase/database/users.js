import {database} from '../firebase';

export const createUser = (username, email, role) => {
    database.collection("users").add({
        username: username,
        email: email,
        role: role,
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    

}

