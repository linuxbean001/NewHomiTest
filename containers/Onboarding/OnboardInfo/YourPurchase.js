import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView  } from 'react-native';
import DefaultHeader from '../../../components/Header';
import yourPurchaseImg from '../../../assets/image/your-purchase.png'
export default class YourPurchaseScreen extends React.Component {
  static navigationOptions = {
    header: () => <DefaultHeader />
  }
  render() {
    return(
      <ScrollView style={styles.container}>
      <Image
       style={styles.TopImage}
       source={yourPurchaseImg} 
       resizeMode="contain"
     /> 
      <View style={styles.ContentContainer}>
         <Text style={styles.SubToptext}>What to expect</Text>
         <Text style={styles.HeaderText}>4. Your Mortgage</Text>
         <Text style={styles.ContentText}>
           When you’re ready, we will introduce you to one or more loan officers to compete over your business. We even do the application for you! 
         </Text>
         <TouchableOpacity  style={styles.Rectangle }
            onPress={() => this.props.navigation.navigate('BasicsScreen')} >
            <Text style={styles.Next }>Let's Go</Text> 
         </TouchableOpacity>
     </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  TopImage:{ 
    width: '100%', 
    height: 250,
    marginBottom:15
  },
  SubToptext: {
    textAlign: 'left',
    color: '#747474',	
    fontFamily: "open-sans-Regular", 
    fontSize: 13,
    letterSpacing: -0.21,
    lineHeight: 18,
    marginBottom:15
  },
  HeaderText:{
    textAlign: 'left',
    color: '#000000',
    fontFamily: "open-sans-SemiBold",	
    fontSize: 24,	
    fontWeight: '600',
    letterSpacing: -0.39,
    lineHeight: 33,
    marginBottom:15
  },
  ContentText:{
    color: '#232528',
    fontFamily: "open-sans-Regular",
    fontSize: 16,
    letterSpacing: -0.26,
    lineHeight: 22
  },
  ContentContainer:{
    paddingLeft:30,
    paddingRight:30,
    paddingTop:15,
    paddingBottom:15
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
  container: {
    flex: 1,
    backgroundColor:'#fff'
  }
});