//Main App

import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  Keyboard,
} from 'react-native';
import Modal from 'react-native-modal';
import Card from './assets/Card';
import Header from './assets/Header';
import {getProducts, addProduct, removeProduct} from './assets/api';
import Addcard from './assets/Addcard';

const App = () => {
  var prev = useRef(); //reference state
  const [products, setProducts] = useState([]); //local copy of products
  const [modalVisibility, setModalVisibility] = useState(false); //for use in modal
  //new item variable for adding new product
  const [newitem, setNewitem] = useState({
    id: 0,
    item: '',
    description: '',
  });

  //callback for api to update producst to local state
  const onFetchProducts = (items) => {
    setProducts([]); // clear products to remove previous stale states
    items.forEach((item) => {
      setProducts((prev) => {
        prev.forEach((current) => {
          if (item.id == current.id) {
          }
        });
        return [
          {
            id: item.id,
            item: item.item,
            description: item.description,
            submitted: new Date(
              item.submitted.seconds * 1000,
            ).toLocaleDateString('en-US'),
          },
          ...prev,
        ];
      });
    });
  };

  //initial state update
  useEffect(() => {
    getProducts(onFetchProducts);
  }, []);

  //update into firestore and local state whenever any new item is added
  useEffect(() => {
    if (newitem.item != '' && newitem.item != prev) {
      addProduct(newitem, onAddProduct);
      setModalVisibility(false);
      prev = newitem.item;
    }
  }, [newitem]);

  //callback for modal form submit button
  const newProd = (prod) => {
    // Generate id randomly
    const id = Math.floor(Math.random() * 100000);
    setNewitem({
      id: id,
      item: prod.name,
      description: prod.description,
    });
  };

  //callback for new product addition for api
  const onAddProduct = (item) => {
    getProducts(onFetchProducts);
  };

  //callback for product removal to trigger api action
  const onRemove = (id) => {
    removeProduct(id, onRemoveComplete);
  };

  //callback for api on product removal
  const onRemoveComplete = (data) => {
    getProducts(onFetchProducts);
  };

  return (
    <View>
      <Header title="Sell Products" />
      <FlatList
        style={{maxHeight: 650}}
        data={products}
        renderItem={({item}) => (
          <Card style={styles.cards} product={item} removeHandler={onRemove} />
        )}
      />
      <View style={{paddingVertical: 20}}>
        <Button
          title="Add New Product"
          onPress={() => setModalVisibility(true)}
        />
      </View>
      {/* modal form for new product */}
      <Modal
        isVisible={modalVisibility}
        backdropOpacity={0.5}
        // press anywhere outside modal to dismiss keyboard from screen
        onBackdropPress={() => Keyboard.dismiss()}>
        <SafeAreaView>
          <Addcard submit={newProd} />
          <Button
            color="#ee524a"
            title="Close"
            onPress={() => setModalVisibility(false)}
          />
        </SafeAreaView>
      </Modal>
    </View>
  );
};

//CSS styles
const styles = StyleSheet.create({
  cards: {
    padding: 15,
  },
});

export default App;
