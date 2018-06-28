import React from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'


class EntryItem extends React.Component {
  render() {
    return (
      <Card title={this.props.id}>
        <Text style={{paddingBottom: 10, textAlign: 'center'}}>{this.props.text}</Text>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button
            icon={{name: 'code'}}
            backgroundColor='aliceblue'
            title='View' />
          <Button
            icon={{name: 'remove'}}
            backgroundColor='tomato'
            title='Remove'
            onPress={() => this.props.onRemoveItem(this.props.id)}
          />
        </View>
      </Card>
    );
  }
}

export default EntryItem;

