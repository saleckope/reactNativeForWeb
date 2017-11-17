import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

export class SecondComponent extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>
          This is the SecondComponent
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});