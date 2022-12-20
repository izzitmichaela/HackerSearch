//Importing basic packages and search history variable for archiving quieries.
import * as React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, TextInput, FlatList } from "react-native";
import { useState } from "react";
import '../memory/global.js';


//The Search page has a single text input field for the user to enter a search result. When the quiery
//is entered, the page will display a list of all hits taken from the Hacker API and is designede to show the
//title and the url of the result.

export default function SearchScreen() {
   const [statusMessage, setStatusMessage] = useState('Waiting for input');
   const [text, onChangeText] = React.useState("");
   const [data, setData] = useState();


   //This function calls the API through the Fetch method and awaits for a response before setting
   //the data variable to the returned hits from the API.
   //It takes  a single variable 'q' as the quiery from the user.
   const getAPI = async (q) => {
      searchTerm = 'http://hn.algolia.com/api/v1/search?query='+q;

      try {
         const response = await fetch(searchTerm);
         const json = await response.json();
         setData(json.hits);

      } catch (error) {
         console.error(error);
      }
   }


   //This method checks to see if a user entered a quiery before runnign the API call. if the user 
   //hit enter before typing anything, it will notify the user and not return any results. Otherwise,
   //it will add that result to the user's search history and resume with the API call.
   const runAPICall = (input) => {
      
 
      if (input == '') {

         setStatusMessage("No input detected.\nPlease Enter a quiery.");

      } else {
         global.searches.push({term: input});

         getAPI(input);
      }
   }

   //This method defines the elements of the search results to display on the app. Currently,
   //it is set to return onlt the title and the url from the list of properties in the API.
   function Item({ entry }) {
      return (
        <View style={styles.item}>
          <Text style={styles.title}>{entry.title}{'\n'}{entry.url}</Text>
        </View>
      );
   }



   //The return method contains a status message for the user, an input field to enter the quiery,
   //and an enter button. Below this is the viewing window that will populate with the search results
   //upon completion
   return (
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView>    
         <Text style={{fontSize:16,fontWeight:'700'}}>Search Screen</Text>
         <Text style={{fontSize:16,fontWeight:'500'}}>{statusMessage}</Text>
         <TextInput
            defaultValue = ""
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Enter your quiery here"
         />


         <Button
            title="Search"
            onPress={() => runAPICall(text)}
         />

         <Text style={{fontSize:16,fontWeight:'700'}}>Output:</Text>

         <FlatList
            //Display the results in a list form with thei title and url.
            data = {data}
            renderItem={({ item }) => <Item entry={item} />}
         />

      </SafeAreaView>
   </View>

   
   );
   
}


//Style components used for the various elements
const styles = StyleSheet.create({
   input: {
     height: 40,
     margin: 12,
     borderWidth: 1,
     padding: 10,
   },

   container: {
      flex: 1,
      paddingTop: 10,
   },
   scrollView: {
      flex: 1,
      backgroundColor: 'lightblue',
      marginHorizontal: 0,
   },
   text: {
      fontSize: 42,
   },
   item: {
      backgroundColor: 'lightblue',
      padding: 5,
      marginVertical: 8,
      marginHorizontal: 16,
   },
   title: {
      fontSize: 12,
   },
});

