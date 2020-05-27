import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';

const Card = ({product, removeHandler}) => {
  return (
    <TouchableOpacity activeOpacity={0.4}>
      <View style={styles.card}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.heading}>{product.item}</Text>
          <Button
            color="#ee524a"
            title="remove"
            onPress={() => removeHandler(product.id)}
          />
        </View>
        <Text style={styles.desc}>{product.description}</Text>
        <Text style={styles.date}>{product.submitted}</Text>
      </View>
    </TouchableOpacity>
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
    flex: 2,
  },
  desc: {
    fontSize: 20,
  },
  date: {
    fontSize: 12,
    textAlign: 'right',
    color: 'grey',
  },
  remove: {
    alignSelf: 'flex-end',
  },
});

export default Card;
