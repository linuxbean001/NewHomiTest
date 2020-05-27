import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LoginImg from './../assets/image/login-illo.png';
import DefaultHeader from './../components/Header'; 

export default class LandingScreen extends React.Component {

  static navigationOptions = { 
   header: () => <DefaultHeader color='#000' />
  } 


  // componentDidMount() {
  //   const urls = UrlGenerator('largeHome');
  //   Promise.all(urls.map(u => fetch(u)))
  //   .then(responses => Promise.all(responses.map(res => res.text())))
  //   .then(texts => Promise.all(texts.map(txt => JSON.parse(txt)['dataset']['data'][0][1])))
  //   .then(medianPrices => medianPrices.reduce((a, b) => a+b)/medianPrices.length)
  //   .then(averagePrice => console.log(averagePrice.toFixed(0)));
  // }
 
  render() {
    const { navigate } = this.props.navigation;
    return(
      <ScrollView style={styles.container1}>  
        <View style={styles.container}>
          <Text style={styles.HeaderText1}>Welcome to </Text>
          <Text style={styles.HeaderText2}>Homi</Text>
          <Text style={styles.SubContent}>Step by step towards owning a home, together. </Text>
          <View style={styles.ButtonView}>
            <TouchableOpacity style={styles.Rectangle } onPress={() => this.props.navigation.navigate('NameAndPassScreen')}>
              <Text style={styles.Next }>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Rectangle } onPress={() => this.props.navigation.navigate('LoginScreen')}>
              <Text style={styles.Next }>Login</Text>
            </TouchableOpacity>
          </View>
        </View> 
        <Image resizeMode="contain" style={styles.LoginImage} source={LoginImg} />  
      </ScrollView>  
    ); 
  } 
} 

const styles = StyleSheet.create({
  container1:{
    backgroundColor:'#fff'
  },
  container: {
    flex: 1,
    paddingLeft:30,
    paddingRight:30,
    paddingTop:30
  },
  HeaderText1:{
    color: '#232528',	  
    fontFamily: "open-sans-Regular",
    fontSize: 45,
    letterSpacing: -0.73,	
    lineHeight: 45,
  },
  HeaderText2:{
    color: '#232528',	
    fontFamily: "open-sans-Regular",
    fontSize: 45,	
    fontWeight: 'bold',
    letterSpacing: -0.73,	  
    lineHeight: 45,
  },
  SubContent:{ 
    color: '#232528',
    fontFamily: "open-sans-Regular",
    fontSize: 16,
    letterSpacing: -0.26,
    lineHeight: 22,
    marginTop:10
  },
  ButtonView:{
         marginTop:50
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
  LoginImage:{
   width:'100%',
   height:225,
  }
})