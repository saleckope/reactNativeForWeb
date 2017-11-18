/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  WebView,
} from 'react-native';
import { FirstComponent } from './components/first/FirstComponent';
import { SecondComponent } from './components/second/SecondComponent';
import { ThirdComponent } from './components/third/ThirdComponent';
import { FourthComponent } from './components/fourth/FourthComponent';
import { FifthComponent } from './components/fifth/FifthComponent';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuIndex: 0,
    };
  }

  onMenuItemPress(index) {
    this.setState({
      activeMenuIndex: index,
    });
  }

  getComponent() {
    const {
      activeMenuIndex,
    } = this.state;

    switch (activeMenuIndex) {
      case 0: return FirstComponent
      case 1: return SecondComponent
      case 2: return ThirdComponent
      case 3: return FourthComponent
      case 4: return FifthComponent
    }
  }

  renderMenu() {
    const menuItems = ['Weblap', 'Kliens és szerver', 'Redux', 'Fourth', 'Fifth'];    
    const isMenuHorizontal = Platform.OS !== 'web';

    return (
      <ScrollView horizontal={isMenuHorizontal}>
        { menuItems.map((text, index) => this.renderMenuItem(text, index)) }
      </ScrollView>
    );
  }

  renderMenuItem(text, index) {
    const rowStyle = this.state.activeMenuIndex === index ? styles.activeMenuRow : styles.menuRow;

    return ( 
      <Text
        key={index}
        style={rowStyle}
        onPress={() => this.onMenuItemPress(index)}
      >
        { text }
      </Text>
    );
  }

  renderContent() {
    const Component = this.getComponent();
    return (
      <Component />
    );
  }

  render() {
    const imageUri = 'https://www.pushwoosh.com/blog/wp-content/uploads/2016/07/react-logo.png';
    const typeOfApp = Platform.OS === 'web' ? 'website' : 'app';
    const headerText = `This ${typeOfApp} was created with React Native`;

    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <Image
            source={{ uri: imageUri }}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>
            { headerText }
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.menu}>
            { this.renderMenu() }
          </View>
          <View style={styles.content}>
            { this.renderContent() }
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    height: '100%',
    width: '100%',
  },
  container: {
    ...Platform.select({
      web: {
        flexDirection: 'row',
      }
    }),
    flex: 1,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  headerImage: {
    height: 30,
    width: 30,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 20,
    color: 'white',
  },
  menu: {
    flex: 0,
    ...Platform.select({
      web: {
        height: '100%',
        width: '20%', 
      },
      ios: {
        flexDirection: 'row',
      },
      android: {
        flexDirection: 'row',
      }
    }),   
  },
  activeMenuRow: {
    ...Platform.select({
      web: {
        marginBottom: 1, 
      },
      ios: {
        marginRight: 1,
      },
      android: {
        marginRight: 1,
      }
    }), 
    padding: 20,
    backgroundColor: '#33ccff',
  },
  menuRow: {
    ...Platform.select({
      web: {
        marginBottom: 1, 
      },
      ios: {
        marginRight: 1,
      },
      android: {
        marginRight: 1,
      }
    }), 
    padding: 20,
    color: 'white',
    backgroundColor: '#333399',
  },
  content: {
    flex: 1,
  },
});