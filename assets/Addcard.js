import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';

const Addcard = ({submit}) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
  });

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Add New product</Text>
      <Text style={styles.label}>Product</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) =>
          setForm((prev) => ({name: text, description: prev.description}))
        }
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        multiline
        numberOfLines={3}
        style={styles.input}
        onChangeText={(text) =>
          setForm((prev) => ({description: text, name: prev.name}))
        }
      />
      <View style={{paddingVertical: 20}}>
        <Button title="Add Product" onPress={() => submit(form)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 15,
    marginVertical: 20,
    shadowOffset: {width: 2, height: 3},
    shadowColor: '#A3AAAF',
    shadowOpacity: 0.4,
  },
  heading: {
    fontSize: 35,
    paddingVertical: 25,
  },
  label: {
    padding: 10,
    paddingTop: 30,
    fontSize: 20,
  },
  input: {
    borderBottomColor: '#A3AAAF',
    color: 'black',
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 5,
    paddingBottom: 3,
  },
});

export default Addcard;
