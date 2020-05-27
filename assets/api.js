// API for communication with firebase firestore

import firestore from '@react-native-firebase/firestore';

// Add a new product
export function addProduct(product, onSubmit) {
  firestore()
    .collection('products')
    .add({
      id: Math.floor(Math.random() * 100000),
      item: product.item,
      description: product.description,
      submitted: firestore.Timestamp.now(),
    })
    .then((data) => onSubmit(data)) //Callback called for successful addtion
    .catch((error) => console.log(error)); //log errors
}

// Remove a product
export function removeProduct(id, onRemove) {
  firestore()
    .collection('products')
    .where('id', '==', id)
    .get()
    .then((docs) => {
      docs.forEach((doc) => {
        doc.ref.delete();
      });
      onRemove(); //Callback call for successful removal
    })
    .catch((error) => console.log(error)); //log any errors
}

// Get Product listing (Fetch)
export async function getProducts(onFetch) {
  products = [];
  await firestore()
    .collection('products')
    .orderBy('submitted', 'asc') //always have newest listing on top
    .get()
    .then((docs) => {
      docs.forEach((doc) => {
        products.push(doc.data());
      });
      onFetch(products); //Callback for successful product fetch
    })
    .catch((error) => console.log(error)); //log errors
}
