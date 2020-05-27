import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image , ActivityIndicator} from 'react-native';
import DefaultHeader from '../../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import bankingHolder from '../../../assets/image/banking-holder.png';
import PlaidAuthenticator from 'react-native-plaid-link';
import firebase from 'firebase';
import '@firebase/firestore';

export default class YourSavingsScreen extends React.Component {
  _isMounted = false;
  
  constructor(props) {
    super(props);
    this.state = {
      selectedOption:'',
      data: {},
      status: 'LOGIN_BUTTON',
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

  renderButton = () => {
    return <ScrollView style={styles.container}>
    <Text style={styles.HeaderText}>Step 4: Your Savings</Text>
    <Text style={styles.SubHeaderText}>Lastly, to create your plan we need to get an idea of your savings. </Text>
    <TouchableOpacity  style={styles.Rectangle } onPress={() => this.setState({status: ''})} >
      <Text style={styles.Next }>Next</Text>  
    </TouchableOpacity>

    {/* <TouchableOpacity  style={styles.Rectangle } onPress={() => this.props.navigation.navigate('LenderDetailsScreen')} >
      <Text style={styles.Next }>Next</Text>  
    </TouchableOpacity> */}
    
 </ScrollView>
  }

  onLoadStart = props => {
    console.log('onLoadStart', props);
  };

  onLoad = props => {
    console.log('onLoad', props); 
  };

  onLoadEnd = props => {
    console.log('onLoadEnd', props);
  };

  renderLogin() {
    return (
      <PlaidAuthenticator
        onMessage={this.onMessage}
        publicKey="eecc6d6382543dbee6478afbc5879b"
        env="sandbox"
        product="auth,transactions"
        onLoad={this.onLoad}
        onLoadStart={this.onLoadStart}
        onLoadEnd={this.onLoadEnd}
      />
    );
  } 

  renderDetails() {
    return (

 <ScrollView style={styles.container}>
    <Text style={styles.HeaderText}>Step 4: Your Savings</Text>
    <Text style={styles.SubHeaderText}>Lastly, to create your plan we need to get an idea of your savings. </Text>
       <View style={styles.ResponseView}>
        <Text style={styles.paragraph}>Institution</Text>
        <Text style={styles.value}>
          {this.state.data.metadata.institution.name}
        </Text>
        <Text style={styles.paragraph}>Institution ID</Text>
        <Text style={styles.value}>
          {this.state.data.metadata.institution.institution_id} 
        </Text>
        <Text style={styles.paragraph}>Token</Text>
        <Text style={styles.value}>
          {this.state.data.metadata.public_token}
        </Text>
        </View>
    <TouchableOpacity  style={styles.Rectangle }  onPress={this.submit} >
      <Text style={styles.Next }>Lets Go</Text>  
    </TouchableOpacity>
    {this.state.submitting &&
          <View style={styles.loading}>
            <ActivityIndicator size='large' />
          </View>}
 </ScrollView>

    );
  }

  submit = () => {
    this.setState({submitting: true});
    console.log('SAVING PLAID INFORMATION TO FIREBASE');
    firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).update({
      plaidData: this.state.data
    })
    .then(() => {
      if(this._isMounted) this.setState({submitting: false});
      this.props.navigation.navigate('LenderDetailsScreen');
    })
    .catch(error => {
      // Handle Errors here.
      console.group();
      console.log('Saving Plaid information error');
      console.log(error);
      console.log(error.code);
      console.log(error.message);
      console.groupEnd();
      Alert.alert(error.message);
      if(this._isMounted) this.setState({submitting: false});
    })
    .finally(() => {
    });

  }

  onMessage = data => {
    this.setState({ data, status: data.action.substr(data.action.lastIndexOf(':') + 1).toUpperCase() });
  };



  render() {
    console.log(this.state.status)

    switch(this.state.status) {
      case 'CONNECTED':
        console.log('connected')
        return this.renderDetails() 
      case 'LOGIN_BUTTON':
      case 'EXIT':
        return this.renderButton();
      default:
        return this.renderLogin();
    }
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
  TopImage:{ 
    marginBottom:15,
    marginTop:30
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
  Rectangle: {
    height: 61,
    borderWidth: 1,
    borderColor: '#0DBBF4',
    borderRadius: 30.5,
    textAlign: 'center',
    marginTop:30,
    marginBottom:30,
    backgroundColor: '#0DBBF4'
  },
  Next: {	
    color: '#fff',	
    fontFamily: "open-sans-bold",	
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: -0.26,
    lineHeight: 55,
    textAlign: 'center',
   
  },
  ResponseView:{
       marginTop:30,
       marginBottom:30
  },
  paragraph:{
    color: '#232528',	
    fontSize: 16, 
    fontWeight: '600',
    letterSpacing: -0.39,
    lineHeight: 33,
   	fontFamily: "open-sans-SemiBold",
  }

});