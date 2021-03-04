import {database, Auth} from '../firebase';


export const addCharacter = (charSheet) => {
    const currentRef = database.collection('users').doc(Auth.currentUser.uid);
    currentRef.collection('characters').doc(charSheet.firstName).set({
        charSheet
    }).then(() => console.log('Success!'))
    .catch(e => console.log(e));
}

export const getAll = () => {
    const currentRef = database.collection('users').doc(Auth.currentUser.uid);
    currentRef.collection('characters')
    .get()
    .then((querySnapshot)=> {
        querySnapshot.forEach(snapshot => console.log(snapshot));
    })
}