import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {hello, PI} from './modules/liveness-ui'//import the native module here.

//create a native module and import it here
// the native module we will import is the amplify ui for face liveness detection for ios module. 

//also run amplify init in the root folder of the project to initialze the amplify project. 
//ass amplify auth to the amplify project to enable liveness. 

export default function App() {


  return (
    <View style={styles.container}>
    
      <Text>{hello()} This line ran natively</Text>
      <Text>{PI} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
