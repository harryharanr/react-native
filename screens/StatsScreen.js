import React from 'react';
import { Text,View } from 'react-native';

class StatsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Stats Screen!</Text>
        </View>
      );
    }
}

export {StatsScreen};