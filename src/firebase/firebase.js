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

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses)
//   });

// database.ref('expenses').on('value', (snapshot) => {
//       const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses)
// })

// database.ref('expenses').push({
//   description: 'Rent',
//   amount: 1000
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
//   const name = snapshot.val().name;
//   const jobTitle = snapshot.val().job.title;
//   const jobCompany = snapshot.val().job.company;

//   console.log(`${name} is a ${jobTitle} at ${jobCompany}`);
// }, (e) => {
//   console.log('Error with data fetching', e);
// });


// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error', e)
//   })

// database.ref().set({
//   name:'Lucas Fernandes',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   isSingle: false,
//   location: {
//     city: 'Philadelphia',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e)
// });

// database.ref().update({
//   stressLevel: 9,
//   'location/city': 'Seattle',
//   'job/company': 'Amazon'
// })

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('Removed!')
//   }).catch((e) => {
//     console.log('Remove failed: ', e)
//   })