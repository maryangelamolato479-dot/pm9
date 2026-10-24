import React, { useContext } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView, StatusBar } from 'react-native';
import { ProductProvider, ProductContext } from './context/ProductContext';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function MainScreen() {
  const { loading } = useContext(ProductContext);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text style={styles.loaderText}>Loading Products...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      <Text style={styles.headerTitle}>Product Catalog</Text>
      <SearchBar />
      <ProductList />
      <ProductDetail />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <ProductProvider>
      <MainScreen />
    </ProductProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 12,
    color: '#333',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  loaderText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
});