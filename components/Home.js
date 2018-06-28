import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
// import { Constants } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          raised
          icon={{name: 'add'}}
          title="Write"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Write');
          }}
        />
      </View>
    );
  }
}

export default HomeScreen;
