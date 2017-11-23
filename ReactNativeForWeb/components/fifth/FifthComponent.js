import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

export class FifthComponent extends Component {
  render() {
    const text = 'A weblap vagy weboldal egy olyan webdokumentum, mely megfelel a World Wide Web számára, és alkalmas arra, hogy egy webböngésző megjelenítse. \nA webböngésző a weblapot monitoron vagy mobil eszközön jeleníti meg. A weboldal fő jellemzője a hiperszöveg, mely más weboldalakra navigálhat el minket linkeken (hiperhivatkozásokon) keresztül. \nSokan a weboldalnak vagy honlapnak hívják a webhelyeket, mivel az internet magyarországi elterjedésekor az angol website szót nem fordították le, nem volt rá megfelelő magyar szó, és még a mai napig a webhely kifejezés sem terjedt el eléggé. Ezért helyette tévesen a honlap, weblap, weboldal szavak valamelyikét használjuk a köznyelvben. A webhely egy adott doménen található weboldalak összessége, tehát a webhely, webszájt weboldalakból, weblapokból tevődik össze. Egyik része a másiknak. A honlap (homepage) szó pedig az adott webhelyen található weblapok közül az elsőt jelöli, a főoldalt, azaz a kezdőlapot.\nMivel az internet magyarországi elterjedésekor egyes szavakat lefordítottak, másokat nem, egyes szavakra hamarabb találtak magyar megfelelőt (akár tükörfordítás, akár nyelvújítás segítségével), mint más szavakra, és mivel sokan rosszul használták az eredeti fogalmakat, keverve azok jelentéseit, ezért a mai magyar nyelvben már az eredeti fogalmak helyett a legtöbben szinonimának gondolják a weblap, weboldal szavakat a webhely, webszájt illetve a honlap szóval.'
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>
          HTML
        </Text>
        <Text style={styles.welcome}>
          A HTML (angolul: HyperText Markup Language=hiperszöveges jelölőnyelv) egy leíró nyelv,
          melyet weboldalak készítéséhez fejlesztettek ki, és mára már internetes szabvánnyá vált a W3C
          (World Wide Web Consortium) támogatásával. Az aktuális változata a 4.01, mely az SGML általános jelölőnyelv
          egy konkrét alkalmazása (azaz minden 4.01-es HTML dokumentum egyben az SGML dokumentumszabványnak is meg kell,
          hogy feleljen). Ezt tervek szerint lassan kiszorította volna az XHTML (ami a szintén SGML alapú XML leíró nyelven alapul),
          de az is lehetséges, hogy a HTML 5 veszi át a helyét.
        </Text>
        <Text>
          HTML általában szöveges állományokban található meg olyan számítógépeken, melyek az internethez kapcsolódnak.
          Ezek az állományok tartalmazzák azokat a szimbólumokat, amelyek a megjelenítő programnak leírják,
          hogyan is kell megjeleníteni illetve feldolgozni az adott állomány tartalmát. Megjelenítő program lehet egy webböngésző
          (angolul: web browser), aural böngésző (olyan, amelyik a felhasználónak felolvassa a megjelenítendő szöveget),
          braille olvasó, amely konvertálja a szöveget braille "formátumba", levelező program
          (mint például: Mozilla Thunderbird, Microsoft Outlook, Eudora stb.), valamint egyéb eszközök, például mobiltelefon.  
        </Text>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/HTML_source_code_example.svg/2000px-HTML_source_code_example.svg.png' }}
          style={styles.image}  
        />
        <Text style={styles.subtitle}>HTML5</Text>
        <Text>
          A HTML5 a következő, jelentősen átdolgozott változata a HTML-nek
          (Hypertext Markup Language), a web fő jelölőnyelvének. Egyik fő tervezési célja,
          hogy a webes alkalmazásokhoz ne legyen szükség pluginek (pl. Adobe Flash, Microsoft Silverlight, Sun JavaFX)
          telepítésére. A specifikáció a HTML4 és az XHTML1 új verzióját jelenti, a hozzájuk tartozó DOM2 HTML API-val együtt.
          A HTML5 specifikációban leírt formátumba történő migráció HTML4-ről, vagy XHTML1-ről a legtöbb esetben egyszerű,
          mivel a visszamenőleges kompatibilitás biztosított. A specifikáció a közeljövőben támogatni fogja a Web Forms
          2.0 specifikációt is. HTML5-ben lehetőség van audio és videofájlok beillesztésére, erre a célra külön tagek vannak
          (audio, video). Továbbá létezik egy úgynevezett canvas tag, mely egy vászon.
          Erre Javascript segítségével lehet rajzolni, vagy képet beilleszteni.
          Fontos megemlíteni, hogy a HTML5-ből kivették az elrendezés megadó tulajdonságokat. Ezeket CSS-ben kell megadni.
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
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    margin: 30,
  },
});