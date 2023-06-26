import React, { useEffect, useState, useRef,} from 'react';
import { SafeAreaView, ScrollView, View, Alert,} from 'react-native';
import { Card, Text, TextInput, Button } from 'react-native-paper';


import styles from '../components/RecipeScreen.style';
import recipeData from '../components/recipeData.json';

const assetsDir = "../../assets/";

const NumComponent = ({recipeName}) => {
  const [text, setText] = React.useState("");

  const update = () => {
    var myRecipe = recipeData[recipeName];
    var myIngr = Object.keys(myRecipe); //array of ingr names
    var baseValues = new Array();
    var calculatedAmts = new Array();
    var ingrIDArray = new Array();

    for (let i = 0; i < myIngr.length; i++)
      {
        baseValues[i] = myRecipe[myIngr[i]];
        calculatedAmts[i] = baseValues[i] * parseInt(text);
        ingrIDArray[i] = parseInt(recipeData.IngrID[myIngr[i]].toString());
      }

    fetch('http://10.0.2.2:5000/iUpdate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "ingrIDArray": ingrIDArray,
        "calculatedAmts": calculatedAmts
      })
    })

    .then((response) => response.json())

    .then ((res) => {

      if (res.success === true) {
       // Alert.alert("DB UPDATED")
      }

      else if (res.sucess === false) { 
        //Alert.alert("DB NOT UPDATED")
      }

      else {
        Alert.alert(res.message)
      }
    })
    .catch(err => err);

    return 0;
  }
  return (<TextInput
   style={styles.numComponent} 
   keyboardType = "number-pad"
   mode="outlined" 
   label="#"
   maxLength={2}
   value = {text}
   onChangeText={text => setText(text)}
   onEndEditing={update}
   />)
};

interface RecipeComponentsParams {
  recipeName: string;
  recipeAuthor: string;
  recipeDesc: string;
  recipeCover: string;
  //id: string;
};


var RecipeComponent = (props: RecipeComponentsParams) => {
  return(
    <Card style={styles.recipeCard} mode={'outlined'}>
      <Card.Title title={props.recipeName} subtitle={props.recipeAuthor} titleStyle={styles.recipeTitle}/>
      <Card.Cover src={props.recipeCover} style={styles.recipeCover}/>
      <Card.Content>
        <Text variant="bodyMedium">{props.recipeDesc}</Text>
      </Card.Content>
      <Card.Actions>
        <NumComponent recipeName={props.recipeName}/>
      </Card.Actions>
    </Card>
  )
};



const RecipeScreen = () => 
{
  return (
    <SafeAreaView>
      <ScrollView style={styles.main} contentContainerStyle={{alignItems: "center"}}>
        <View style={styles.recipeDiv}>
        {
          <>
            <RecipeComponent
              recipeName="Sushi"
              recipeAuthor="by Toriyama"
              recipeDesc={"•1 Tuna\n" +
                "•1 cup Rice\n" +
                "•1 oz Wasabi\n" + 
                "•1 oz Garlic"}
              recipeCover='https://cdn11.bigcommerce.com/s-ek50668lzs/images/stencil/1280x1280/products/2572/2836/2021-lg__23020.1577640180.jpg?c=1?imbypass=on' />

            <RecipeComponent
              recipeName="Spaghetti"
              recipeAuthor="by Tony"
              recipeDesc={"•16 oz Pasta\n" +
                "•8 oz Spaghetti Sauce\n" +
                "•2 oz Garlic"}
              recipeCover='https://static01.nyt.com/images/2022/12/23/multimedia/afg-spaghetti-alla-assassina-1-19ef/afg-spaghetti-alla-assassina-1-19ef-threeByTwoMediumAt2X.jpg' />
            
            <RecipeComponent
              recipeName="Porkchop"
              recipeAuthor="by Grace"
              recipeDesc={"•1 Porkchop\n" +
                "•1 cup Rice\n" +
                "•2 oz Vegetable Oil"}
              recipeCover='https://contenthub.kraftheinz.com/api/public/content/3ce90ccf7a0a4e79b9bbc8470a175365?v=b098d2b8&t=w1004' />
          </>
        }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeScreen;

/*GENERIC
numRecipes.map((numRecipes: number, index: number) => 
  <RecipeComponent key={'recipe' + index}
  recipeName="Name of Recipe"
  recipeAuthor="Name of Author" 
  recipeDesc="Decription of recipe"
  recipeCover='https://cdn11.bigcommerce.com/s-ek50668lzs/images/stencil/1280x1280/products/2572/2836/2021-lg__23020.1577640180.jpg?c=1?imbypass=on'/>
*/