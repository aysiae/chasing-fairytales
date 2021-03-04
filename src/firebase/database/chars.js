import {database, Auth} from '../firebase';


export const addCharacter = (charSheet) => {
    const currentRef = database.collection('users').doc(Auth.currentUser.uid);
    currentRef.collection('characters').doc(`${charSheet.firstName}-${charSheet.uuid}`).set({
        charSheet
    }).then(() => console.log('Success!'))
    .catch(e => console.log(e));
}

export const getAll = async () => {
    const chars = []
    const currentRef = database.collection('users').doc(Auth.currentUser.uid);
    await currentRef.collection('characters')
    .get()
    .then((querySnapshot)=> {
        querySnapshot.forEach(doc => chars.push(doc.data()));
    })  
    return chars;
}