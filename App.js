//This program is designed to searchthe Hacker Algolia api and output a list of results
//Results include the article title ad the associated url.
//A History screen is also present to show all searches from your session. Thank you!
//best, Michaela Gallucci

import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import the two screens for navigation in the main page
import HistoryScreen from './screens/History.js';
import SearchScreen from './screens/Search.js';


function HomeScreen( { navigation }) {
  return (
    //Basic screen UI with buttons to go to the Search Screen or the History Screen, described 
    //in the comments at the top of this file.

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the home screen!</Text>
      <Text> Please select an option below:</Text>
      <Button
      title="Run a Search!"
      onPress={() => navigation.navigate('SearchScreen')}
      />
    
      <Button
      title="Check your search history!"
      onPress={() => navigation.navigate('HistoryScreen')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    //Implementing necessary components for screen to screen navigation
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;