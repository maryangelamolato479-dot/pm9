import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { ProductContext } from '../context/ProductContext';

export default function ProductDetail() {
  const { selectedProduct, setSelectedProduct } = useContext(ProductContext);

  if (!selectedProduct) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.modalContent}>
        <ScrollView>
          <Image source={{ uri: selectedProduct.thumbnail }} style={styles.image} />
          <Text style={styles.title}>{selectedProduct.title}</Text>
          <Text style={styles.price}>Price: ${selectedProduct.price}</Text>
          <Text style={styles.category}>Category: {selectedProduct.category}</Text>
          <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setSelectedProduct(null)}
        >
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxHeight: '80%',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#007BFF',
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#ff5252',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});