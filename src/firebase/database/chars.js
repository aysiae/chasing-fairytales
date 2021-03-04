import {database, Auth} from '../firebase';

export const addCharacter = (charSheet) => {
    database.collection('users').doc(Auth.currentUser.uid).collection('characters').doc(charSheet.firstName).set({
        charSheet
    }).then(() => console.log('Success!'))
    .catch(e => console.log(e));
}

export const getCharacter = (charSheet) => {
    
}