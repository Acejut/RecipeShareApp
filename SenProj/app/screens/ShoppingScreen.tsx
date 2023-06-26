import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';

import styles from '../components/ShoppingScreen.style';

const ShoppingScreen = () => 
{
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  var strfyJSON;
  var parsed;

  useEffect(() => {
    const timer = setTimeout(() =>{
      fetch('http://10.0.2.2:5000/shopList')
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching: ", error);
          setError(error);
        }
      )
    }, 5000)
  })

  strfyJSON = JSON.stringify(data);
  parsed = JSON.parse(strfyJSON);
  
  
  console.log(typeof data);
  console.log(typeof strfyJSON);
  console.log(typeof parsed);
  console.log(parsed.length);
  
  
  
  return (
    <SafeAreaView>
      <ScrollView style={styles.main} contentContainerStyle={{alignItems: "center"}}>
        <View style={styles.ingredientDiv}>
        {
          <DataTable>
          <DataTable.Header>
            <DataTable.Title textStyle={styles.titleText}>Ingredient</DataTable.Title>
            <DataTable.Title textStyle={styles.titleText}>Amount</DataTable.Title>
            <DataTable.Title textStyle={styles.titleText}>Measurement</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[0].name}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[0].amount}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[0].measure}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[1].name}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[1].amount}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[1].measure}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[2].name}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[2].amount}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[2].measure}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[3].name}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[3].amount}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.cellText}> {parsed[3].measure}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[4].name}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[4].amount}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[4].measure}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[5].name}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[5].amount}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[5].measure}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[6].name}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[6].amount}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[6].measure}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[7].name}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[7].amount}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.cellText}>{parsed[7].measure}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
        }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShoppingScreen;


/* GENERIC
numIngredients.map((numIngredients: number, index: number) => 
  <IngredientComponent key={index}
  ingredientName="Ingredient"
  ingredientAmt="Amt" 
  ingredientMeasurement="measurement"
  />
*/