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
    ScrollView,
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Text,
    FlatList,
    Keyboard,
  } from 'react-native';

  import {evalContact} from '../../app';
  import styles from '../../styles';

  export default class ListContactScreen extends Component {

    state={
        listContact: [],
    };

    constructor(props) {
        super(props);
        this.state.listContact = evalContact;
    }

    render () {
        console.log(this.state)
        return (
            <>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex:1}}>
                    <SafeAreaView style={{flex:1, backgroundColor: 'black'}}>

                        <ScrollView style={{flex:1, backgroundColor: 'black'}}>
                            <View>
                                <FlatList data={this.state.listContact}
                                    renderItem={({item}) => (
                                        <TouchableOpacity key={'evalContact_'+item.id} style={styles.listItem} onPress={() => { this.props.navigation.push('DetailsContact', {evalContact : item})}}>
                      
                                                <View style={{flexDirection: 'row', flex: 2, alignItems: 'center'}}>
                                                    <Text style={{flex: 2, fontWeight: 'bold', fontSize: 18, color: 'white'}}>{item.lastName}</Text>

                                                    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end'}}>
                                                      <Text style={{flex: 2, fontWeight: 'bold', fontSize: 12, color: 'white'}}>{item.mobilePhone}</Text>
                                                      
                                                      
                                                    </View>
                                                </View>

                                                <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>

                                                    <Text style={{flex: 2, fontWeight: 'bold', fontSize: 18, color: 'white'}}>{item.firstName}</Text>

                                                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>

                                                            <Text style={{flex: 2, fontWeight: 'bold', fontSize: 10, color: 'white'}}>{item.email}</Text>
                                                       
                                                    </View>
                                                </View>
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>

                           
                        </ScrollView>
        
                    </SafeAreaView>
                </TouchableWithoutFeedback>  
            </>
        );
    }
}
