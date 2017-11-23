import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

export class FirstComponent extends Component {
  render() {
    const text = 'A weblap vagy weboldal egy olyan webdokumentum, mely megfelel a World Wide Web számára, és alkalmas arra, hogy egy webböngésző megjelenítse. \nA webböngésző a weblapot monitoron vagy mobil eszközön jeleníti meg. A weboldal fő jellemzője a hiperszöveg, mely más weboldalakra navigálhat el minket linkeken (hiperhivatkozásokon) keresztül. \nSokan a weboldalnak vagy honlapnak hívják a webhelyeket, mivel az internet magyarországi elterjedésekor az angol website szót nem fordították le, nem volt rá megfelelő magyar szó, és még a mai napig a webhely kifejezés sem terjedt el eléggé. Ezért helyette tévesen a honlap, weblap, weboldal szavak valamelyikét használjuk a köznyelvben. A webhely egy adott doménen található weboldalak összessége, tehát a webhely, webszájt weboldalakból, weblapokból tevődik össze. Egyik része a másiknak. A honlap (homepage) szó pedig az adott webhelyen található weblapok közül az elsőt jelöli, a főoldalt, azaz a kezdőlapot.\nMivel az internet magyarországi elterjedésekor egyes szavakat lefordítottak, másokat nem, egyes szavakra hamarabb találtak magyar megfelelőt (akár tükörfordítás, akár nyelvújítás segítségével), mint más szavakra, és mivel sokan rosszul használták az eredeti fogalmakat, keverve azok jelentéseit, ezért a mai magyar nyelvben már az eredeti fogalmak helyett a legtöbben szinonimának gondolják a weblap, weboldal szavakat a webhely, webszájt illetve a honlap szóval.'
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>
          Weblap
        </Text>
        <Text style={styles.welcome}>
          A weblap vagy weboldal egy olyan webdokumentum, mely megfelel a World Wide Web számára, és alkalmas arra, hogy egy webböngésző megjelenítse.
          A webböngésző a weblapot monitoron vagy mobil eszközön jeleníti meg.
          A weboldal fő jellemzője a hiperszöveg, mely más weboldalakra navigálhat el minket linkeken (hiperhivatkozásokon) keresztül.
          Sokan a weboldalnak vagy honlapnak hívják a webhelyeket, mivel az internet magyarországi elterjedésekor az angol website szót nem fordították le, nem volt rá megfelelő magyar szó, és még a mai napig a webhely kifejezés sem terjedt el eléggé.
          <Text>
            Ezért helyette tévesen a honlap, weblap, weboldal szavak valamelyikét használjuk a köznyelvben.
            A webhely egy adott doménen található weboldalak összessége, tehát a webhely, webszájt weboldalakból, weblapokból tevődik össze.
            Egyik része a másiknak. A honlap (homepage) szó pedig az adott webhelyen található weblapok közül az elsőt jelöli, a főoldalt, azaz a kezdőlapot.
            Mivel az internet magyarországi elterjedésekor egyes szavakat lefordítottak, másokat nem, egyes szavakra hamarabb találtak magyar megfelelőt
            (akár tükörfordítás, akár nyelvújítás segítségével), mint más szavakra, és mivel sokan rosszul használták az eredeti fogalmakat, keverve azok jelentéseit,
            ezért a mai magyar nyelvben már az eredeti fogalmak helyett a legtöbben szinonimának gondolják a weblap, weboldal szavakat a webhely, webszájt illetve a honlap szóval.
          </Text>
        </Text>
        <Image
          source={{ uri: 'https://ujszo.com/sites/default/files/photos/promoted/www-globe.png' }}
          style={styles.image}  
        />
        <Text>
          Ezért helyette tévesen a honlap, weblap, weboldal szavak valamelyikét használjuk a köznyelvben.
          A webhely egy adott doménen található weboldalak összessége, tehát a webhely, webszájt weboldalakból, weblapokból tevődik össze.
          Egyik része a másiknak. A honlap (homepage) szó pedig az adott webhelyen található weblapok közül az elsőt jelöli, a főoldalt, azaz a kezdőlapot.
          Mivel az internet magyarországi elterjedésekor egyes szavakat lefordítottak, másokat nem, egyes szavakra hamarabb találtak magyar megfelelőt
          (akár tükörfordítás, akár nyelvújítás segítségével), mint más szavakra, és mivel sokan rosszul használták az eredeti fogalmakat, keverve azok jelentéseit,
          ezért a mai magyar nyelvben már az eredeti fogalmak helyett a legtöbben szinonimának gondolják a weblap, weboldal szavakat a webhely, webszájt illetve a honlap szóval.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    margin: 30,
  },
});