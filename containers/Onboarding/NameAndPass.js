import React from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput, CheckBox, ActivityIndicator, Alert } from 'react-native';
import DefaultHeader from '../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import '@firebase/firestore';
import DatePicker from 'react-native-datepicker'
export default class NameAndPassScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      submitting: false,
      date:'',
      _isMounted: false
    };
 
  }

  UNSAFE_componentDidMount() {
    //this.state._isMounted = true;
    this.setState({_isMounted: true});
  }

  UNSAFE_componentWillMount () {
    //this.state._isMounted = false;
    this.setState({_isMounted: false});
  }

  setDate=(newDate)=> {
    this.setState({chosenDate: newDate});
  }


  static navigationOptions = {
    header: () => <DefaultHeader color='#fff'/>
  }


  _submit = () => {
    console.log('CREATING ACCOUNT');
    this.setState({submitting: true});
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(token => {
        return firebase.firestore().collection('users').doc(token.user.uid).set({
          name: this.state.name,
          uid: token.user.uid
        });
      })
      .then(() => {
        console.log('USER GENERATED AND DATATBASE SEEDED');
        if(this.state._isMounted) this.setState({submitting: false});
        this.props.navigation.navigate('YourHomeScreen');
      })
      .catch(error => {
        // Handle Errors here.
        if(this.state._isMounted) this.setState({submitting: false});
        console.group();
        console.log('Create account error:');
        console.log(error.code);
        console.log(error.message);
        console.groupEnd();
        Alert.alert(error.message);
      })
      .finally(() => {
      });
  }

  render() {
    return(

  
        <ScrollView style={styles.container}>
        <Text style={styles.HeaderText}>Register</Text>
        <Text style={styles.SubHeaderText}>Homi is costs nothing to use and never will. You will be able to </Text>
        <TextInput
          value={this.state.name} 
          style={styles.Input}
          onChangeText={name => this.setState({name})}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType='next'
          placeholder="Name"
        />
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
     <DatePicker
          style={styles.DatepickerInput}
          date={this.state.date}
          mode="date"
          placeholder="Date of birth"
          format="YYYY-MM-DD"
          minDate="1920-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false} 
          customStyles={{
            dateInput: {
              marginLeft: -210,
              borderWidth:0,
              top:25,
              textAlign:'left',
              left:0,
              fontFamily: "open-sans-Regular",
              lineHeight: 22
            },
            dateText:{
              fontFamily: "open-sans-Regular",
              letterSpacing: -0.26,
              fontSize: 15,
              lineHeight: 22,
            },
            placeholderText:{
              fontFamily: "open-sans-Regular",
              letterSpacing: -0.26,
              fontSize: 15,
              lineHeight: 22,
              height: 61,
            }
          
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
  
        <View style={styles.Term}>
        <TouchableOpacity>
        <CheckBox style={styles.TermBox}  />
        </TouchableOpacity>
         
          <Text style={styles.IAcceptTheTermsO}> I accept the <Text onPress={() => this.props.navigation.navigate('TermOfServiceScreen')} style={styles.LinkText}>terms of service</Text> and the <Text onPress={() => this.props.navigation.navigate('PrivacyPolicyScreen')} style={styles.LinkText}>privacy policy</Text>.</Text>
        </View>
  
        
  
         <TouchableOpacity  style={styles.Rectangle }
          onPress={this._submit}
        >
          <Text style={styles.Next }>Register</Text>
        </TouchableOpacity> 
  
        
        {this.state.submitting &&
          <View style={styles.loading}>  
            <ActivityIndicator size='large' />
          </View>}
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft:30,
    paddingRight:30,
    paddingTop:15,
    backgroundColor:'#fff'
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  LinkText:{
    textDecorationLine: 'underline',
    color:'#00DB8A'
  },
  HeaderText: {
    color: '#232528',	
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: -0.39,
    lineHeight: 33,
   	fontFamily: "open-sans-SemiBold",
  },
  HeaderTextSub: {
    color: '#232528',	
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: -0.39,
    lineHeight: 33,
   	fontFamily: "open-sans-SemiBold",
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
    marginTop:25

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
    marginTop:4,
    marginLeft:0,
    height: 38,
    width:290,
    color: '#232528',
    fontFamily: "open-sans-Regular",
    fontSize: 16,
    letterSpacing: -0.26,
    lineHeight: 19
  },
  DatepickerInput:{
    borderBottomWidth: 1,
    height: 61,
    fontFamily: "open-sans-Regular",
    fontSize: 16,
  	letterSpacing: -0.26,
  	lineHeight: 22,
    marginTop:25,
    width:'100%'
  },
  ButtonView:{
    marginTop:50
  },
  ContentText:{
    color: '#232528',
    fontFamily: "open-sans-Regular",
    fontSize: 14,	
    letterSpacing: -0.26,	
    lineHeight: 22,
    marginTop:15,
    marginBottom:15
  }
});