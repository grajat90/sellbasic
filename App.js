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
  var prev = useRef();
  const [products, setProducts] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [newitem, setNewitem] = useState({
    id: 0,
    item: '',
    description: '',
  });
  const onFetchProducts = (items) => {
    setProducts([]);
    items.forEach((item) => {
      setProducts((prev) => {
        prev.forEach((current) => {
          if (item.id == current.id) {
            console.log('here');
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
  useEffect(() => {
    getProducts(onFetchProducts);
  }, []);

  useEffect(() => {
    if (newitem.item != '' && newitem.item != prev) {
      addProduct(newitem, onAddProduct);
      setModalVisibility(false);
      prev = newitem.item;
    }
  }, [newitem]);

  const newProd = (prod) => {
    const id = Math.floor(Math.random() * 100000);
    setNewitem({
      id: id,
      item: prod.name,
      description: prod.description,
    });
  };

  const onAddProduct = (item) => {
    getProducts(onFetchProducts);
  };

  const onRemove = (id) => {
    removeProduct(id, onRemoveComplete);
  };

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
      <Modal
        isVisible={modalVisibility}
        backdropOpacity={0.5}
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

const styles = StyleSheet.create({
  cards: {
    padding: 15,
  },
});

export default App;
