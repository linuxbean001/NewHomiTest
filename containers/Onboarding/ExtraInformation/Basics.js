import React from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, ActivityIndicator, Alert } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import DefaultHeader from '../../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import '@firebase/firestore';



export default class BasicsScreen extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      maritalStatus: '',
      dateOfBirth: '',
      yearsOfSchool: '',
      dependents: '',
      submitting: false
    };
  }


  static navigationOptions = {
    header: () => <DefaultHeader />
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  _submit = () => {
    console.log('UPDATING ACCOUNT');
    this.setState({submitting: true});
    firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).update({
      maritalStatus: this.state.maritalStatus,
      dateOfBirth: this.state.dateOfBirth,
      yearsOfSchool: this.state.yearsOfSchool,
      dependents: this.state.dependents,
    })
    .then(() => {
      console.log('USER BASICS INFORMATION ADDED');
      if(this._isMounted) this.setState({submitting: false});
      this.props.navigation.navigate('YourHomeTypeScreen');
    })
    .catch(error => {
      // Handle Errors here.
      console.group();
      console.log('Create account error:');
      console.log(error.code);
      console.log(error.message);
      console.groupEnd();
      Alert.alert(error.message);
      if(this._isMounted) this.setState({submitting: false});
    })
    .finally(() => {
    });
  }

  render() {
    let data = [{
      value: 'Single',
    }, {
      value: 'Engaged',
    },
    {
      value: 'Married',
    },
    {
      value: "Don't want to say",
    }];

    return(
      <ScrollView style={styles.container}>
        <Text style={styles.HeaderText}>Step 1: The Basics</Text>
        <Text style={styles.SubHeaderText}>We will collect the base of your plan with some basic questions.</Text>
      
        <Dropdown
          label='Marital Status'
          data={data}
          textColor="#AEAEAE"
          fontSize={16}
          baseColor="#AEAEAE"
          dropdownOffset={{ top: 30, left: 1 }}
          itemTextStyle={{fontFamily:'open-sans-Regular'}}
          style={styles.SelectInput}
          value={this.state.maritalStatus}
          onChangeText={maritalStatus => this.setState({maritalStatus})}
        />

        <TextInput
          style={styles.Input}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType='next'
          placeholder="Date of Birth"
          value={this.state.dateOfBirth}
          onChangeText={dateOfBirth => this.setState({dateOfBirth})}
        />
        <TextInput
          style={styles.Input}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType='next'
          placeholder="Years of School"
          value={this.state.yearsOfSchool}
          onChangeText={yearsOfSchool => this.setState({yearsOfSchool})}
        />
        <TextInput
          style={styles.Input}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType='next'
          placeholder="Dependents"
          value={this.state.dependents}
          onChangeText={dependents => this.setState({dependents})}
        />
        <TouchableOpacity  style={styles.Rectangle }
          onPress={this._submit}
        >
          <Text style={styles.Next }>Next</Text>
        </TouchableOpacity>

      {/* <TouchableOpacity  style={styles.Rectangle }
          onPress={() => this.props.navigation.navigate('YourHomeTypeScreen')}
      >
        <Text style={styles.Next }>Next</Text>
      </TouchableOpacity>  */}



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
  HeaderText: { 
    color: '#232528',	   
    fontSize: 24,
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
  SelectInput:{
    color: '#474747',
    fontFamily: "open-sans-Regular",
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

  }
});