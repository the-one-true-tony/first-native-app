import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './css/css';
export default class App extends React.Component {
  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width:193, height:100}} />
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
