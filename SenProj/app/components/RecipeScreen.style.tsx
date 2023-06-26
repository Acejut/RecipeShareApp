import {StyleSheet, Platform, StatusBar,} from 'react-native';

const styles = StyleSheet.create({
  main:
  {
    backgroundColor: 'rgb(114, 185, 186)',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  recipeDiv:
  {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "10%",
    width: "80%",
  },

  recipeCard:
  {
    marginTop: "5%",
  },

  recipeTitle:
  {
    textAlign: "center",
    fontWeight: "bold",
  },

  recipeCover: 
  {
    paddingHorizontal: "5%",
    paddingBottom: "3%",
    backgroundColor: "white",
  },

  numComponent:
  {
    textAlign: "center",
  }
});

  export default styles;