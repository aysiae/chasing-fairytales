import {database, Auth} from '../firebase';

const currentRef = database.collection('users').doc(Auth.currentUser.uid);

export const addCharacter = (charSheet) => {
    currentRef.collection('characters').doc(charSheet.firstName).set({
        charSheet
    }).then(() => console.log('Success!'))
    .catch(e => console.log(e));
}

export const getCharacter = (charSheet) => {
    currentRef.collection('characters')
    .get()
    .then((querySnapshot)=> {
        querySnapshot.forEach(snapshot => console.log(snapshot));
    })
}