import React from 'react';
import { Button, View, Text, AsyncStorage } from 'react-native';
import EntryItem from './EntryItem';

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  _retrieveData = async () => {

    try {
      const keys = await AsyncStorage.getAllKeys((err, keys) => {
        if (err) return []
        else return keys;
      });

      let value = await AsyncStorage.multiGet(keys);
      value = value.map((result, i, store) => {
        // get at each store's key/value so you can work with it
        let key = store[i][0];
        let value = store[i][1];
        return {
          key: key,
          value: value
        };
      });

      this.setState({
        items: value
      });

    } catch (error) {
       // Error retrieving data
       console.log(error)
     }
  }
  _removeItem(key) {
    try {
      AsyncStorage.removeItem(key, (err) => {
        if (!err) {
          this._retrieveData()
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  componentDidMount() {
    this._retrieveData();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {
          this.state.items.map((i) =>
            <EntryItem
              key={i.key}
              text={i.value}
              id={i.key}
              onRemoveItem={(key) => this._removeItem(key)}
            />)
        }
      </View>
    );
  }
}

export default DetailsScreen;
