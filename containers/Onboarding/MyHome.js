import React from 'react';
import { StyleSheet, ScrollView, Text, TextInput, Image,  View, ActivityIndicator, Alert, Modal, TouchableHighlight } from 'react-native';
import DefaultHeader from '../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CheckBox from 'react-native-check-box';
import firebase from 'firebase';
import '@firebase/firestore';

import Csmallhome from '../../assets/image/Csmallhome.png'
import Unsmallhome from '../../assets/image/Unsmallhome.png'
import Capartment from '../../assets/image/Capartment.png'
import Unapartment from '../../assets/image/Unapartment.png'
import Clargehome from '../../assets/image/Clargehome.png'
import Unlargehome from '../../assets/image/Unlargehome.png'
import Cmobilehouse from '../../assets/image/Cmobilehouse.png'
import Unmobilehouse from '../../assets/image/Unmobilehouse.png'

export default class MyHomeScreen extends React.Component {
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

 
  componentWillUnmount() {
    this._isMounted = false;
  }



  render() { 
    return(

      <ScrollView style={styles.container}>    
      <Text style={styles.HeaderText}>My Home</Text>

      <View style={styles.fieldBox}>
        <Text style={styles.fieldLable}>Approximate Price</Text>
        <TextInput
          style={styles.InputPrice}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType='next'
          value="$230,000"
        />
      </View>
      
      <Text style={styles.fieldLable}>Home Type</Text>
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

      <View style={styles.fieldBox}>
      <Text style={styles.fieldLableAll}>Bedrooms</Text>
      <TextInput
        style={styles.Input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType='next'
        placeholder="Bedrooms"
        value="3"
      />
      </View>
      <View style={styles.fieldBox}>
        <Text style={styles.fieldLableAll}>Bathrooms</Text>
      <TextInput
        style={styles.Input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType='next'
        placeholder="Bathrooms"
        value="2"
      />
      </View>
       <View style={styles.fieldBox}>
       <Text style={styles.fieldLableAll}>Zip Code</Text>
      <TextInput
        style={styles.Input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType='next' 
        placeholder="Zip Code"
        value="21801"
      />
</View>
     <TouchableOpacity  style={styles.Rectangle }
          onPress={() => this.props.navigation.navigate('YourCreditScreen')}
      >
        <Text style={styles.Next }>Save</Text> 
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
    height: 40,
    color: '#474747',
    fontFamily: "open-sans-Regular",
    fontSize: 16,
  	letterSpacing: -0.26,
  },
  fieldBox:{
    marginTop:40,
    marginBottom:40
  },
  fieldLableAll:{
    color: '#232528',
    fontFamily: "open-sans-Regular",
    fontSize: 8,
    letterSpacing: -0.23,
    lineHeight: 19
  },
  fieldLable:{
    color: '#232528',
    fontFamily: "open-sans-Regular",
    fontSize: 14,
    letterSpacing: -0.23,
    lineHeight: 19
  },
  InputPrice:{
    borderBottomWidth: 2,
    borderBottomColor:'#979797',  
    height: 80,
    color: '#00DB8A',
    fontFamily: "open-sans-bold",  
    fontSize: 45,
  	letterSpacing: -0.26,
    textAlign:'center'
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