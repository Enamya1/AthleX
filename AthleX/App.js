
import { StyleSheet, Text, View } from 'react-native';

import Tabs from './navigation/tabs';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 126, 161, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
