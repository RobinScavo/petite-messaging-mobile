// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, View } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';

import TabNavigator from './src/navigation/TabNavigator';

// const ApplicationContent = () => (
//   <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Welcome to UI Kitten</Text>
//   </Layout>
// );

const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <TabNavigator />
  </ApplicationProvider>
);

export default App;


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Petite Messaging!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
