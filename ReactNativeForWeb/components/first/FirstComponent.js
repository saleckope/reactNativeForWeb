import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

export class FirstComponent extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>
          This is the first component
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'red',
  },
});