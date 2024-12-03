import { StyleSheet,  SafeAreaView, Platform } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {

const CharmanData = {
  name:"charmander",
  image : require("./assets/pok1l.png"),
  type : "fire",
  hp:39,
  moves :["Scratch","Ember","Growl","Leer"],
  weaknesses : ["water","Rock"]
};

  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard {...CharmanData} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',  
    paddingTop : Platform.OS === "android" ? 25 : 0,
  },
});
