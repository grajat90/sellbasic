import firestore from '@react-native-firebase/firestore';

export function addProduct(product, onSubmit) {
  firestore()
    .collection('products')
    .add({
      id: Math.floor(Math.random() * 100000),
      item: product.item,
      description: product.description,
      submitted: firestore.Timestamp.now(),
    })
    .then((data) => onSubmit(data))
    .catch((error) => console.log(error));
}

export function removeProduct(id, onRemove) {
  firestore()
    .collection('products')
    .where('id', '==', id)
    .get()
    .then((docs) => {
      docs.forEach((doc) => {
        doc.ref.delete();
      });
      onRemove();
    });
}

export async function getProducts(onFetch) {
  products = [];
  await firestore()
    .collection('products')
    .get()
    .then((docs) => {
      docs.forEach((doc) => {
        products.push(doc.data());
      });
    });
  onFetch(products);
}
