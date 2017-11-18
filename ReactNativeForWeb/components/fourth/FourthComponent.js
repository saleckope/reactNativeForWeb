import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

export class FourthComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [{ num: 3, color: 'red' }],
    };
    this.interval = null;
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      const rand = Math.floor(Math.random() * 10) + 1;
      const color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      
      this.setState({
        data: [...this.state.data, { num: rand, color }],
      })
      console.log(this.state.data);
      this.scroll.scrollToEnd({ animated: true });
      this.labelScroll.scrollToEnd({ animated: true });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderDiagram() {
    return this.state.data.map((data, index) => this.renderColumn(data, index));
  }

  renderColumn(data, index) {
    const height = 200 * data.num / 10;
    const width = 10;

    return (
      <View key={index} style={styles.column}>
        <View style={{ height, width, backgroundColor: data.color }} />
      </View>
    );
  }

  renderLabel() {
    let labels = [];
    this.state.data.forEach((element, index) => {
      labels.push(
        <Text key={index} style={styles.label}>{ element.num }</Text>
      )
    });

    return (
      <View style={styles.labelRow}>
        <ScrollView
          ref={scroll => this.labelScroll = scroll}
          scrollEnabled={false}
          horizontal={true}
        >
          { labels }
        </ScrollView>
      </View>
    );
  }

  render() {
    const imageURL = 'http://techblog.constantcontact.com/wp-content/uploads/2014/11/TechTalk_BAnderson_11052014_Image7.png';

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          Hierarchical render function
        </Text>
        <View 
          style={styles.diagram}
        >
          <ScrollView ref={scroll => {
              this.scroll= scroll;
            }}
            horizontal={true}
            scrollEnabled={false}
          >
            { this.renderDiagram() }
          </ScrollView>
        </View>
        { this.renderLabel() }
        <Text>
        A fejlesztése során a Facebook fejlesztők elsődleges célja egy reaktív könyvtár létrehozása volt a célja,
        mely a folyamatos újrarenderelések (képernyő újrarajzolások) segítségével azonnal válaszol a változásokra
        (például API-ból jövő adatok megérkezése, felhasználói kölcsönhatások). Mindezt úgy valósították meg,
        hogy csak azok a részek renderelődnek újra, melyeknek az adatai változtak (1. ábra).
        Ezzel lehetőséget teremtettek a nagyon gyors és gyorsan válaszoló alkalmazások fejlesztésére.
        </Text>
        <Image
          resizeMode={'contain'}
          source={{ uri: imageURL }}
          style={styles.image}  
        />
        <Text style={styles.text}>1. ábra - React Native rerender</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    height: 300,
    width: '100%',
    alignSelf: 'center',
    marginHorizontal: 30,
    marginTop: 30,
  },
  diagram: {
    height: 200,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'black',
  },
  column: {
    width: 20,
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 10,
  },
  labelRow: {
    flexDirection: 'row',
    marginLeft: 2,
    marginBottom: 20,
  },
  label: {
    width: 20,
    marginLeft: 10,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
});