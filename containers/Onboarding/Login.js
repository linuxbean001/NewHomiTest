import React from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, ActivityIndicator, CheckBox } from 'react-native';
import DefaultHeader from '../../components/Header';
import firebase from 'firebase';
import '@firebase/firestore';

export default class LoginScreen extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitting: false
    };
  }


  static navigationOptions = {
    header: () => <DefaultHeader />
  }

  componentDidMount() {
    this._isMounted = true;
  }

  _submit = () => {
    console.log('SIGNING INTO ACCOUNT');
    this.setState({submitting: true});
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(user => {
      console.log('USER:', user);
      return firebase.firestore().collection('users').doc(user.user.uid).get();
    })
      .then((userDoc) => {
        console.log('LOGIN USERDOC', userDoc.data());
        if (this._isMounted) this.setState({submitting: false});
        this.props.navigation.navigate('MainDashboardScreen');
      })
      .catch(error => {
        // Handle Errors here.
        console.group();
        console.log('Sign In Error:');
        console.log(error.code);
        console.log(error.message);
        console.groupEnd();
        Alert.alert(error.message);
        if (this._isMounted) this.setState({submitting: false});
      })
      .finally(() => {
      })
  }

  render() {
    return(
      <View style={styles.container}>
      <Text style={styles.HeaderText}>Welcome Back!</Text> 
      <Text style={styles.SubHeaderText}> We’ll help you choose the type of home you want, and a few options of where you’d like to live.</Text>
      <TextInput 
        value={this.state.email}
        style={styles.Input}
        onChangeText={email => this.setState({email})}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="emailAddress"
        keyboardType="email-address"
        returnKeyType='next'
        placeholder="Email"
      />
      <TextInput
        value={this.state.password}
        style={styles.Input}
        onChangeText={password => this.setState({password})}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType='next'
        secureTextEntry={true}
        placeholder="Password"
      />

      <Text style={styles.forgotLink}>I forgot my password. </Text>
            
      <View style={styles.Term}>
        <CheckBox style={styles.TermBox} />
        <Text style={styles.IAcceptTheTermsO}> Save passwords </Text>
      </View>

      <TouchableOpacity  style={styles.Rectangle }
        onPress={this._submit} >
        <Text style={styles.Next }>Login</Text>
      </TouchableOpacity> 

      {/* <TouchableOpacity  style={styles.Rectangle }
          onPress={() => this.props.navigation.navigate('YourSwipeScreen')}
      > 
        <Text style={styles.Next }>Next</Text>
      </TouchableOpacity>      */}
      
    
      {this.state.submitting &&
        <View style={styles.loading}>
          <ActivityIndicator size='large' />
        </View>}
    </View>
    )
  }
}
const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  HeaderText: {
    color: '#000000',
    fontFamily: "open-sans-SemiBold",	
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: -0.39,
    lineHeight: 33
  }, 
  SubHeaderText: {
    color: '#232528',
    fontSize: 16,
    letterSpacing: -0.26,
    lineHeight: 22,
    fontFamily: "open-sans-Regular",
    marginTop:15
},
  Input: {
    borderBottomWidth: 1,
    height: 61,
    color: '#474747',
    fontFamily: "open-sans-Regular",
    fontSize: 16,
  	letterSpacing: -0.26,
  	lineHeight: 22,
    marginTop:30
  },
  forgotLink:{
    color: '#232528',
    fontSize: 16,
    letterSpacing: -0.26,
    lineHeight: 22,
    fontFamily: "open-sans-Regular",
    marginTop:25,
    textDecorationLine: 'underline',

  },
  Rectangle: {
    height: 61,
    borderWidth: 1,
    borderColor: '#AEAEAE',
    borderRadius: 30.5,
    textAlign: 'center',
    marginTop:30,
    marginBottom:30
  },
  Next: {	
    color: '#000000',	
    fontFamily: "open-sans-bold",	
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: -0.26,
    lineHeight: 55,
    textAlign: 'center',
  },
  Term:{
    flexDirection: 'row',
    paddingTop:15,
    marginTop:15
  },
  IAcceptTheTermsO:{
    marginTop:1, 
    marginLeft:0,
    height: 38,
    width:290,
    color: '#232528',
    fontFamily: "open-sans-Regular",
    fontSize: 16,
    letterSpacing: -0.26,
    lineHeight: 29

  },
  container: {
    flex: 1,
    paddingLeft:30,
    paddingRight:30,
    paddingTop:30,
    backgroundColor:'#fff'
  }
});