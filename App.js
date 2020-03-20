/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { SafeAreaView,StyleSheet,ScrollView, View,Text,TouchableOpacity} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListContactScreen from './src/components/ListContactScreen';
import LoginScreen from './src/components/LoginScreen';
import DetailsListContactScreen from './src/components/detailsContactScreen';




function Load({navigation, route}) {
  return (
    <Stack.Navigator initialRouteName="EvaluContact" mode="card" screenOptions={{ headerTintColor: 'white', headerStyle: {backgroundColor: 'black'},mode: 'card', gestureDirection: 'horizontal',
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('MyAccount')} style={{marginRight: 10, paddingHorizontal: 10}}>
            
          </TouchableOpacity>
        ),

      }}>
          <Stack.Screen
            name="EvaluContact"
            component={EvContact}
            mode="card"
            options={{
              title: 'evalContact',
            }}
          />
          <Stack.Screen
            name="MyAccount"
            component={Profile}
            options={{
              // headerStyleInterpolator: forFade,
              title: 'Mon Compte',
              animationTypeForReplace: 'push',
              headerRight: null,
            }}
          />

         <Stack.Screen
            name="DetailsContact"
            component={DetailsContact}
            mode="card"
            options={{
              // headerStyleInterpolator: forFade,
              title: 'Détails ',
              mode: 'card',
              gestureDirection: 'horizontal',
        }}
      />
          
     
    </Stack.Navigator>
  );
}

function DetailsContact({navigation, route}) {
  return (
    <DetailsListContactScreen navigation={navigation} route={route}/>
  );
}

function EvContact({navigation}) {
  return (
    <ListContactScreen navigation={navigation}/>
  );
}

function Profile({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()}/>
    </View>
  );
}

function SignIn({navigation}) {
  return (
    <LoginScreen navigation={navigation}/>
  );
}

function Loading({route}) {
  const {userToken} = route.params || {};
  return (
    <Stack.Navigator>
      {userToken == null ? (
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false,}}/>) : (
        <Stack.Screen name="Load" component={Load} options={{headerShown: false,}}/>
      )}
    </Stack.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          options={{headerShown: false}}
          component={Loading}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}