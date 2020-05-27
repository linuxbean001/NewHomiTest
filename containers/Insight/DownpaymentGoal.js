import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView  } from 'react-native';
import InsightHeader from '../../components/InsightHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class DownpaymentGoalScreen extends React.Component {

  static navigationOptions = {
    header: () => <InsightHeader  color='#0DBBF4'/>
  }
   
  render() { 
    var self = this;
    return(
      <ScrollView style={styles.container}>
            <View style={styles.ContentHeaderArea}>
    <Text style={styles.HeaderText}>To meet your {'\n'}downpayment goals, {'\n'}you need to save more.</Text>
            </View>
            <View style={styles.ContentArea}>
                 <Text style={styles.SubHeading}>Steps: </Text>
                 <Text style={styles.Content}>1. We can see that you don’t have a savings account. We can start one for you or walk you though creating one with your bank.</Text>
            </View>

            <View style={styles.ContentArea}>
                 <Text style={styles.SubHeading}>Why?  </Text>
                 <Text style={styles.Content}>1. You have savings but we need to create an isolated account that will be for your down payment. </Text>
            </View>

            {/* <Text onPress={() => this.props.navigation.navigate('LenderDetailsScreen')}>..next</Text> */}
            <View style={styles.ActionArea}>
                <TouchableOpacity  style={styles.Rectangle } onPress={() => this.props.navigation.navigate('InvestmentScreen')} >
                    <Text style={styles.Next }>Action Completed</Text>  
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
        backgroundColor:'#0DBBF4',
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