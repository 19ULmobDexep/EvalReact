import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Button,
    Text,
    Keyboard,
  } from 'react-native';

  import styles from '../../styles';

  export default class LoginScreen extends Component {

    state={
        login : '',
        pass : '',
    };

    onSignIn () {
    //  if (
    //       !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.login)
    //  ) {
    //      return alert('unvalid login email');
    //  }
    //  if (
    //      !/^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])))(?=.{8,})/.test(this.state.pass)
    //  ) {
    //      return alert('Le mot de passe doit être composé de 8 caractères minimum dont un minuscule, un majuscule et un chiffre');
    //  }
     this.props.navigation.navigate('Loading', {userToken: 'identified'});
    }

    render () {
        return (
            <>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex:1}}>
                    <SafeAreaView style={{flex:1, backgroundColor: 'black'}}>

                        <ScrollView style={{flex:1, backgroundColor: 'black'}}>
                               
                                <View style={{flex: 1,}}>
                                        <View style={{ alignItems: 'center',justifyContent: 'center',flex: 1,}}>
                                                <Image source={require('../../image/logoa.jpg')} style={{width: 250, height: 150}} resizeMode='contain'/>
                                                <Text style={styles.title}>Login</Text>
                                        </View>
                                        <View style={{flex: 1, paddingHorizontal: 50,}}>
                                                <View style={{flex: 1,}}>
                                                    <Text style={styles.label}>Email</Text>
                                                    <TextInput style={styles.textInput} autoCapitalize={'none'} onChangeText={login => this.setState({login})} value={this.state.login}/>
                                                    <Text style={styles.label}>Mot de passe</Text>
                                                    <TextInput style={styles.textInput} onChangeText={pass => this.setState({pass})} value={this.state.pass} secureTextEntry={true}/>
                                                </View>
                                                <View style={{flex: 0,height: 80,}}>
                                                    <TouchableOpacity style={styles.validButton} onPress={this.onSignIn.bind(this)}>
                                                        <Text style={[styles.label, styles.textButton]}>
                                                            Connexion
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                        </View>
                                </View>
                        </ScrollView>
        
                    </SafeAreaView>
                </TouchableWithoutFeedback>  
            </>
        );
    }
}
