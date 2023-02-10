import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from './components/Button';

import * as SplashScreen from 'expo-splash-screen';

function HomeScreen({ navigation }) {
  
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  const [text, setText] = useState(0);
  return (
    
    <View style={styles.container}>
      <Text style={styles.appHeader}>Bruschetta Recipe</Text>
      <View style={styles.imageSetting}>
        <Image source={require('./assets/bruschetta.png')}/>
      </View>
      <View>
        {text !==0 ? 
        <TextInput style={styles.outputSetting} 
        placeholder="Enter the Number of Servings" 
        onChangeText={newText => setText(newText)} 
        defaultValue={text}/> 
        : 
        <TextInput style={styles.inputSetting} 
        placeholder="Enter the Number of Servings" 
        onChangeText={newText => setText(newText)} 
        defaultValue={text}/>}
      </View>
      
      <Button
        title="View Recipe"
        onPress={() => {
          navigation.navigate('Details', {
            basil: text * 6,
            garlic: text * 3,
            olive: text * 3,
            tomato: text * 4,
          });
        }}
      />
    </View>
  );
}

function DetailsScreen({ route }) {
  const { basil, garlic, olive, tomato } = route.params;
  return (
    <View>
      <Text style={styles.detailHeader}>Bruschetta</Text>
      <Text style={styles.subHeader}>Ingredients</Text>
      <Text style={styles.content}>{JSON.stringify(tomato)} plum tomatoes</Text>
      <Text style={styles.content}>{JSON.stringify(basil)} basil leaves</Text>
      <Text style={styles.content}>{JSON.stringify(garlic)} garlic cloves, chopped</Text>
      <Text style={styles.content}>{JSON.stringify(olive)} TB olive oil</Text>
      <Text style={styles.subHeader}>Directions</Text>
      <Text style={styles.content} >Combine the Ingredients. as salt to taste. Top French bread slices with mixture</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Healthy Recipes" 
        component={HomeScreen} 
        options={{
          title: 'Healthy Recipes',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen 
        name="Details" 
        component={DetailsScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
 
  container: {
    alignItems: 'center',
    marginTop: 30,
  },
  
  containerDetails: {
    marginTop: 40,
  },

  appHeader: {
    padding: 20,
    fontSize: 35,
  },

  detailHeader: {
    paddingTop: 100,
    fontSize: 35,
    alignItems: 'center', 
    justifyContent: 'center',
    marginLeft: 100,
    marginRight: 0,
  },

  subHeader: {
    paddingTop: 20,
    fontSize: 26,
    marginLeft: 35,
  },

  content: {
    marginLeft: 65,
    marginRight: 55,
    paddingRight: 5,
    fontSize: 20,

  },

  imageSetting: {
    width: 411, 
    height: 292,
  },

  outputSetting: {
    alignItems: 'center', 
    justifyContent: 'center',
    fontSize: 20,
    paddingTop: 25, 
    paddingBottom: 25,
    maxWidth: 25,
  },

  inputSetting: {
    paddingTop: 25, 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontSize: 20, 
    paddingBottom: 25,
  }
});