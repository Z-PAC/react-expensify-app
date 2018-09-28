import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { firebase, googleAuthProvider, facebookAuthProvider, database as default };

// database.ref('expenses')
//   .on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   })

// database.ref('expenses')
//   .on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   })

//   database.ref('expenses')
//   .on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   })
//   .catch((e) => {
//     console.log('Error:', e);
//   });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'Expense 1',
//   note: 'Some note',
//   amount: 150,
//   createdAt: 0
// });

// database.ref('expenses').push({
//   description: 'Expense 2',
//   note: 'Some note 2',
//   amount: 3435,
//   createdAt: 1000
// });

// database.ref('expenses').push({
//   description: 'Expense 3',
//   note: 'Some note 3',
//   amount: 20000,
//   createdAt: -1000
// });

//database.ref('notes/-LNF41U2ZUvNnFuFHnpZ').remove();

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'Angular, React'
// });

// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// },{
//   id: '765asd',
//   title: 'Another note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref().set({
//   name: 'Jose Pedro',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Lisbon',
//     country: 'Portugal'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('This failed:', error);
// });

// //database.ref().set('This is my data');
// // database.ref('age').set(27);
// // database.ref('location/city').set('Porto');
// database.ref('attributes').set({
//   height: 180,
//   weight: 60
// }).then(() => {
//   console.log('This worked');
// }).catch((error) => {
//   console.log('This failed: ', error);
// });

// // database.ref('location').remove()
// //   .then(() => {
// //     console.log('Removed successfully');
// //   })
// //   .catch((error) => {
// //     console.log('Error removing: ', error);
// //   });

// // database.ref().update({
// //   name: 'Mike',
// //   age: 29,
// //   job: 'Developer',
// //   attributes: null,  // deletes
// //   'location/city': 'Porto'  // for nested updates
// // });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// // ref().once --> fetches data one time
// database.ref('location/city')
//   .once('value')
//   .then((snapshot)=> {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data', e);
//   });

  // // ref().on --> sets event listener for changes
  // const onValueChange = database.ref().on('value',(snapshot) => {
  //   console.log(snapshot.val());
  // }, (e) => {
  //   console.log('Error with data fetching', e);
  // });

  // setTimeout(() => {
  //   database.ref('age').set(29);
  // }, 3500);

  // setTimeout(() => {
  //   database.ref().off(onValueChange);
  // }, 7000);

  // setTimeout(() => {
  //   database.ref('age').set(30);
  // }, 10500);

  // database.ref().on('value',(snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
  // },(e) => {
  //   console.log('Error with data fetching', e);
  // });