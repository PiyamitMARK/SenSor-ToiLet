import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: 'http://192.168.1.106/' }} style={styles.webview} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
