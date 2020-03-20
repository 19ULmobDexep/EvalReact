/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Dimensions
} from 'react-native';

import styles from '../../styles';
import {evalContact} from '../../app';


export default class DetailsListContactScreen extends Component {
    state = {
      evalContact: {},
      
    };
    navigation = null;

    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;
        this.state.evalContact = this.props.route.params.evalContact || {};
      }

 
    render() {
    console.log(this.state)
      return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
          <SafeAreaView style={{flex: 1}}>

                    <ScrollView style={{flex:1, backgroundColor: 'black'}}>
           
                            <View style={{flex: 1}}>


                                        <View style={{flex: 1, borderBottomWidth: 1, borderBottomColor: 'black'}}>
                                                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                                                    
                                                </View>
                                                <View style={{flex: 1, flexDirection: 'column'}}>
                                                    <View style={{flex: 1, alignItems: 'center',justifyContent: 'center', marginTop: 40}}>
                                                        <Text style={{flex: 2, fontWeight: 'bold', fontSize: 18, color: 'white'}}>{this.state.evalContact.lastName}</Text>
                                                        <Text style={{flex: 2, fontWeight: 'bold', fontSize: 18, color: 'white'}}>{this.state.evalContact.firstName}</Text>
                                                        <Text style={{flex: 2, fontWeight: 'bold', fontSize: 10, color: 'white'}}>{this.state.evalContact.city}</Text>
                                                    </View>
                                                </View>


                                                <View style={{flex: 1, flexDirection: 'row'}}>

                                                    <View style={styles.container}>
                                                        <Text style={{flex: 2, fontWeight: 'bold', fontSize: 18, color: 'white', marginTop: 50}}>{this.state.evalContact.mobilePhone}</Text>
                                                    </View>

                                                    <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>

                                                        <Text style={{flex: 2, fontWeight: 'bold', fontSize: 18, color: 'white', marginTop: 50}}>{this.state.evalContact.personalPhone}</Text>

                                                    </View>

                                                </View>


                                                <View style={{flex: 1, flexDirection: 'row'}}>

                                                    <View style={{flex: 1, alignItems: 'center',justifyContent: 'center',}}>
                                                        <Text style={{flex: 2, fontWeight: 'bold', fontSize: 18, color: 'white', marginTop: 50}}>{this.state.evalContact.address}</Text>
                                                    </View>

                                                    <View style={{flex: 1, alignItems: 'center',justifyContent: 'center',}}>

                                                    <Text style={{flex: 2, fontWeight: 'bold', fontSize: 18, color: 'white', marginTop: 50}}>{this.state.evalContact.email}</Text>

                                                    </View>

                                                </View>
                                        </View>

                            </View>          

                    </ScrollView>  
                                       
            </SafeAreaView>
        </TouchableWithoutFeedback>
      );
    }
  }
  