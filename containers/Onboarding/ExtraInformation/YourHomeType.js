import React from 'react';
import { StyleSheet, ScrollView, Text, TextInput, Image,  View, ActivityIndicator, Alert, Modal, TouchableHighlight } from 'react-native';
import DefaultHeader from '../../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import QuandlURLGenerator from '../../../utils/quandlpricefetcher';
import CheckBox from 'react-native-check-box';
import firebase from 'firebase';
import '@firebase/firestore';

import Csmallhome from '../../../assets/image/Csmallhome.png'
import Unsmallhome from '../../../assets/image/Unsmallhome.png'
import Capartment from '../../../assets/image/Capartment.png'
import Unapartment from '../../../assets/image/Unapartment.png'
import Clargehome from '../../../assets/image/Clargehome.png'
import Unlargehome from '../../../assets/image/Unlargehome.png'
import Cmobilehouse from '../../../assets/image/Cmobilehouse.png'
import Unmobilehouse from '../../../assets/image/Unmobilehouse.png'

export default class YourHomeTypeScreen extends React.Component {
  _isMounted = false;

  
  constructor(props) {
    super(props);
    this.state = {
      homeWanted: '',
      price:'',
      bedrooms: '',
      bathrooms: '',
      zipCode: '',
      submitting: false,
      isChecked1: false,
      isChecked2: false,
      isChecked3: false,
      isChecked4: false,
      modalVisible: false
    };
  }
  static navigationOptions = {
    header: () => <DefaultHeader />
  }

  componentDidMount() {
    this._isMounted = true;
  }

  setModalVisible(visible) { 
    this.setState({modalVisible: visible});
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  _submit = () => {
    console.log('UPDATING ACCOUNT');
    this.setState({submitting: true});

    fetch(QuandlURLGenerator(this.state.homeWanted, this.state.zipCode, this.state.bedrooms))
    .then(res => res.text())
    .then(text => JSON.parse(text))
    .then(object => {
      // console.log('QUANDL RESPONSE:');
      // console.log(object);
      if (object['quandl_error']) {
        
        
          this.setModalVisible(true); 
        // ---------------- PROMPT USER TO INPUT TARGET PRICE BELOW ----------------
        throw Error('Not Quandl price found. Please input price');

       

        // ---------------- PROMPT USER TO INPUT TARGET PRICE ABOVE ----------------
      }
      else return object['dataset']['data'][0][1]
    })
    .then(price => firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).update({
        homeWanted: this.state.homeWanted,
        bedrooms: this.state.bedrooms,
        bathrooms: this.state.bathrooms,
        zipCode: this.state.zipCode,
        medianPriceFound: price.toFixed(0)  
    }))
    .then(() => {
      console.log('USER YOUR HOME INFORMATION ADDED');
      if(this._isMounted) this.setState({submitting: false});
      this.props.navigation.navigate('YourCreditScreen');
    })
    .catch(error => {
      // Handle Errors here.
      console.group();
      console.log('Create account error:');
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

  render() { 
    return(

      <ScrollView style={styles.container}>
      <Text style={styles.HeaderText}>Step 2: Your Home</Text>
      <Text style={styles.SubHeaderText}>Now we'll get an idea of the type of home you want to live in.</Text>


      <View style={styles.IconBox}>
        <View style={styles.FIconInnerBox} > 
          <CheckBox
                onClick={()=>{
                  this.setState({ 
                      homeWanted: 'smallHome',
                      isChecked1: !this.state.isChecked1,
                      isChecked2: false,
                      isChecked3: false,
                      isChecked4: false,
                  })
                }}
                isChecked={this.state.isChecked1}
                checkedImage={<Image style={{width:60, height:60 }} source={Csmallhome} />}
                unCheckedImage={<Image style={{width:60, height:60 }} source={Unsmallhome}/>}
            />
            <Text style={styles.IconBoxText}>Small Home</Text>
        </View>
        <View style={styles.SIconInnerBox} > 
        <CheckBox
                onClick={()=>{
                  this.setState({
                    homeWanted: 'apartment',
                    isChecked1: false,
                    isChecked2: !this.state.isChecked2,
                    isChecked3: false,
                    isChecked4: false,
                  })
                }}
                isChecked={this.state.isChecked2}
                checkedImage={<Image style={{width:60, height:60 }} source={Capartment} />}
                unCheckedImage={<Image style={{width:60, height:60 }} source={Unapartment}/>}
            />
          <Text style={styles.IconBoxText} >Apartment</Text>
        </View>
      </View>

      <View style={styles.IconBox}>
        <View style={styles.FIconInnerBox} > 
          <CheckBox
                onClick={()=>{
                  this.setState({
                    homeWanted: 'mobileHome',
                    isChecked1: false,
                    isChecked2: false,
                    isChecked3: !this.state.isChecked3,
                    isChecked4: false,
                  })
                }}
                isChecked={this.state.isChecked3}
                checkedImage={<Image style={{width:60, height:60 }} source={Cmobilehouse} />}
                unCheckedImage={<Image style={{width:60, height:60 }} source={Unmobilehouse}/>}
            />
            <Text style={styles.IconBoxText}>Mobile Home</Text>
        </View>
        <View style={styles.SIconInnerBox} > 
        <CheckBox
                onClick={()=>{
                  this.setState({
                    homeWanted: 'largeHome',
                    isChecked1: false,
                    isChecked2: false,
                    isChecked3: false,
                    isChecked4: !this.state.isChecked4,
                  })
                }}
                isChecked={this.state.isChecked4} 
                checkedImage={<Image style={{width:60, height:60 }} source={Clargehome} />}
                unCheckedImage={<Image style={{width:60, height:60 }} source={Unlargehome}/>}
            />
          <Text style={styles.IconBoxText} >Large Home</Text>
        </View>
      </View>
      <TextInput
        style={styles.Input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType='next'
        placeholder="Bedrooms"
        value={this.state.bedrooms}
        onChangeText={bedrooms => this.setState({bedrooms})}
      />
      <TextInput
        style={styles.Input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType='next'
        placeholder="Bathrooms"
        value={this.state.bathrooms}
        onChangeText={bathrooms => this.setState({bathrooms})}
      />
      <TextInput
        style={styles.Input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType='next' 
        placeholder="Zip Code"
        value={this.state.zipCode}
        onChangeText={zipCode => this.setState({zipCode})}
      />


{/* <TouchableOpacity  style={styles.Rectangle }
          onPress={() => this.props.navigation.navigate('YourCreditScreen')}
      >
        <Text style={styles.Next }>Nextdd</Text> 
      </TouchableOpacity>  */}

      <TouchableOpacity  style={styles.Rectangle }
        onPress={this._submit}
      >
        <Text style={styles.Next }>Next</Text>
      </TouchableOpacity>
       
      <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible} 
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View>
               <View style={{backgroundColor:'#0DBBF4',padding:15,color:'#fff'}}> 
                    <Text style={{color:'#fff',fontSize:18, fontWeight:'600',textAlign:'center'}}>Target Price</Text>
              </View>
            <View style={styles.ModalContainer}>
              
                <TextInput
                    style={styles.Input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType='next'
                    placeholder="Price"
                    value={this.state.price} 
                    onChangeText={price => this.setState({price})}
                />
               <TouchableHighlight style={styles.Rectangle }
                onPress={this._submit}
               >
                <Text style={styles.Next }>Next</Text>
              </TouchableHighlight> 

 


            </View>
          </View>
      </Modal>
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
  ModalContainer:{
  flexDirection:'column',
    paddingLeft:30,
    paddingRight:30,
    paddingTop:15,
    backgroundColor:'#fff'
  },
  IconBox:{
    flex: 1, 
    flexDirection: 'row', 
    marginTop:20
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
  FIconInnerBox:{
    width: '45%', 
    padding:20, 
    borderWidth:1, 
    borderColor: '#ECECEC', 
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  SIconInnerBox:{
    width: '45%', 
    padding:20, 
    borderWidth:1, 
    borderColor: '#ECECEC', 
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:20
  },
  IconBoxText:{
    paddingTop:2,	
    color: '#232528',
    fontFamily: "open-sans-Regular",
    fontSize: 10,
    letterSpacing: -0.16,	
    lineHeight: 14
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