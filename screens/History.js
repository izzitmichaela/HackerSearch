import * as React from 'react';
import { View, Text, FlatList, StyleSheet } from "react-native";
import '../memory/global.js';

//This method returns a list view of all the search quieries as recorded in the global.js file

//Wrapper function to call the single element from the global.js array list.
function Item({ entry }) {
   return (
     <View style={styles.item}>
       <Text style={styles.title}>{entry.term}</Text>
     </View>
   );
}

//Basic UI that returns the appropriate search records.
export default function HistoryScreen() {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:16,fontWeight:'700'}}>History Screen</Text>

      <FlatList
      data = {global.searches}
      renderItem={({ item }) => <Item entry={item} />}
      />


      </View>
   );
}

//List of appropriate style sheets.
const styles = StyleSheet.create({
container: {
   flex: 1,
   marginTop: 10,
},
item: {
   backgroundColor: 'lightblue',
   padding: 20,
   marginVertical: 8,
   marginHorizontal: 16,
},
title: {
   fontSize: 32,
},
});