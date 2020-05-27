import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView  } from 'react-native';
import InsightHeader from '../../components/InsightHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class InvestmentScreen extends React.Component {

  static navigationOptions = {
    header: () => <InsightHeader  color='#FFA400'/>
  }
   
  render() { 
    var self = this;
    return(
      <ScrollView style={styles.container}>
            <View style={styles.ContentHeaderArea}>
                <Text style={styles.HeaderText}>Now that you’ve {'\n'}established savings, {'\n'}we need to grow them {'\n'}a little. </Text>
            </View>
            <View style={styles.ContentArea}>
                 <Text style={styles.SubHeading}>Steps: </Text>
                 <Text style={styles.Content}>1. There are tools we can use to grow your savings faster and ultimately have more leverage when you meet your loan officer.</Text>
            </View>

            <View style={styles.ContentArea}>
                 <Text style={styles.SubHeading}>Why?  </Text>
                 <Text style={styles.Content}>1. The higher the downpayment up-front, the cheaper the house ultimately will be.  </Text>
            </View>

            {/* <Text onPress={() => this.props.navigation.navigate('LenderDetailsScreen')}>..next</Text> */}
            <View style={styles.ActionArea}>
                <TouchableOpacity  style={styles.Rectangle } onPress={() => this.props.navigation.navigate('LandingScreen')} >
                    <Text style={styles.Next }>Take Action</Text>  
                </TouchableOpacity>
                <Text style={styles.NextThanks }>No, Thanks.</Text>  
            </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'#fff',

  },
  HeaderText:{
    color: '#FFFFFF',
    fontFamily: "open-sans-bold",
    fontSize: 24,	
    fontWeight: 'bold',
    letterSpacing: -0.39,	
    lineHeight: 33,
    marginBottom:53,
    marginTop:20
  },
  ContentHeaderArea:{
        backgroundColor:'#FFA400',
        paddingLeft:30,
        paddingRight:30,
        paddingTop:25
  },
  ContentArea:{
        marginBottom:50,
        paddingLeft:30,
        paddingRight:30,
        paddingTop:25
  },
  SubHeading:{
    color: '#505050',	
    fontFamily: "open-sans-bold",	
    fontSize: 17,	
    fontWeight: 'bold',
    letterSpacing: -0.39,	
    lineHeight: 23,
    marginBottom:20
  },
  Content:{
    color: '#505050',	
    fontFamily: "open-sans-Regular",
    fontSize: 14,	
    letterSpacing: -0.39,	
    lineHeight: 19,
  },
  ActionArea:{
    paddingLeft:30,
    paddingRight:30,
  },
  Rectangle: {
    height: 61,
    borderWidth: 1,
    borderColor: '#AEAEAE',
    borderRadius: 30.5,
    textAlign: 'center',
    marginTop:30,
    marginBottom:30,
    backgroundColor:'#FFFFFF'
  },
  Next: {	 
    color: '#000',	
    fontFamily: "open-sans-bold",	
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: -0.26,
    lineHeight: 55,
    textAlign: 'center', 
  },
  NextThanks:{
    color: '#505050',	
    fontFamily: "open-sans-Regular",
    fontSize: 14,	
    letterSpacing: -0.39,	
    lineHeight: 19,
    textAlign:'center',
    marginBottom:30,
  }

}); 