import {StyleSheet, Platform, StatusBar,} from 'react-native';

const styles = StyleSheet.create({
  main:
  {
    backgroundColor: 'rgb(114, 185, 186)',
    height: "100%",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  ingredientDiv:
  {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "5%",
    width: "100%",
  },

  titleText:
  {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },

  cellText:
  {
    color: "black",
    fontSize: 15,
  }
});
export default styles;