import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CameraApp from './components/CameraApp'

class HomePage extends React.Component {

  constructor(props){
    super(props)
    this.state = {

    }
    this.openCamera = this.openCamera.bind(this)
  }

  openCamera(navigate) {
    console.log('button was pressed')
    navigate('CameraApp')
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          onPress={() => this.openCamera(navigate)}
          title="Snap A Picture"
          color="#841584"
          accessibilityLabel="Take a picture a learn"
        />
      </View>
    );
  }
}

export default App = StackNavigator({
  Home: { screen: HomePage },
  CameraApp: {screen: CameraApp}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
