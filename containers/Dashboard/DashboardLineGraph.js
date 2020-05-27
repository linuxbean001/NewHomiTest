import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image  } from 'react-native';
import DefaultHeader from '../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StepProgress from 'react-native-step-progress';
import Saving from '../../assets/image/Saving.png';
import Progress from '../../assets/image/Progress.png';
import logo from '../../assets/image/logo.png';
const firstIndicatorStyles = { 
  stepIndicatorSize: 20,
  currentStepIndicatorSize: 20,      
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 4,
  stepStrokeWidth:4,
  separatorFinishedColor: '#0DBBF4',
  separatorUnFinishedColor: '#0DBBF4',
  stepIndicatorFinishedColor: '#00DB8A',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 1,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#fff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#ffffff',
  labelColor: '#00DB8A',
  labelSize: 0,
  currentStepLabelColor: '#00DB8A'
}
export default class DashboardLineGraphScreen extends React.Component {

  constructor () {
    super()
    this.state = {
      currentPage: 0 
    }
  }

  componentWillReceiveProps (nextProps, nextState) {
    if (nextState.currentPage != this.state.currentPage) {
      if (this.viewPager) {
        this.viewPager.setPage(nextState.currentPage)
      }
    }
  }

  static navigationOptions = {
    header: () => <DefaultHeader />
  }
  
  render() {

    return(
      <ScrollView style={styles.container}>
        {/* <Text style={styles.PageTitle}>Welcome, Chris!</Text> */}
        <View>
          <Text style={styles.HeaderText}>Good news! </Text>
          <Text style={styles.HeaderText}>You’re on track to own a  <Text style={styles.HeaderTextIn}> $230,000 home </Text> by January, 2025. </Text>
        </View>

            <View style={styles.stepIndicator}>
                <StepProgress
                  customStyles={firstIndicatorStyles}
                  currentPosition={this.state.currentPage}
                  labels={[{
                    key: 'Today',
                    title: '',
                    icon:''
                  },{
                    key: '1/21',
                    title: 'Establish Savings',
                    icon: Saving
                  },{
                    key: '7/23',
                    title: 'Credit Improved',
                    icon: Progress
                  },{
                    key: '1/25',
                    title: 'Meet Lender',
                    icon: logo
                  }]}
                  renderLabel={this.renderLabel}
                  onPress={this.onStepPress}
                  stepCount={4}
                />
            </View>


        <View style={styles.Tcontainer}>

            <View style={styles.welcome}> 
                <Text style={styles.ContentArea}>
                Welcome to Homi. Based on our initial calculations, you’ll be able to buy in January 2025. 
                </Text>
                  <View style={styles.ContentBox}>
                    <Text style={styles.TabContentHeading}>     
                    Q: Why in the future?
                    </Text>
                    <Text style={styles.TabContent}>
                    <Text style={styles.TabContentBold}>A:</Text>  Mortgages are long-term. So its important to enter them with your “best self”. We feel that if you do a few things, you will be in a much better position to have a positive ownership experience.
                    {"\n"} {'\n'}
                    Over the next couple years, we will give you one task at a time, each aimed at helping you get in the house you want. 
                    </Text>
                  </View>

                  <View style={styles.ContentBox}>
                    <Text style={styles.TabContentHeading}>     
                    Q: What if my goals change?
                    </Text>
                    <Text style={styles.TabContent}>
                    <Text style={styles.TabContentBold}>A:</Text>  That’s expected and completely fine. You can change what type of house you want, or where it is. You can also decide at any time that you no longer want to own. 
                    {"\n"} {'\n'}
                    Homi is completely free, and always will be. Simply cancel your account and best of luck.
                    </Text>
                  </View>

            </View>
        </View>
     
        
        <TouchableOpacity  style={styles.Rectangle } onPress={() => this.props.navigation.navigate('OntrackScreen')} >
             <Text style={styles.Next }>Lets Start my Plan!</Text>  
        </TouchableOpacity> 

      </ScrollView>
    )   
  }

   
  onStepPress = position => {
    this.setState({ currentPage: position })
    this.viewPager.setPage(position)
  }

  renderLabel = ({ position, stepStatus, label, currentPosition }) => {
    return (
      <View>
         <Image style={{ textAlign: 'center',justifyContent: 'center',width: 35,height: 35 ,marginTop:-55, marginLeft:18, width:20, height:20}} source ={label.icon} />
      <Text
        style={ 
          position === currentPosition
            ? styles.stepLabelSelected
            : styles.stepLabel
        }
      >
        {label.key} 
      </Text>
      <Text style={{color: '#787993',	fontFamily: "open-sans-Regular",	fontSize: 8,	lineHeight: 11,	textAlign: 'center'}}> 
          {label.title}
      </Text>
     
    </View>
    )
  }

} 

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    paddingLeft:30,
    paddingRight:30,
    paddingTop:15,
    backgroundColor:'#FFFFFF'
  },
  PageTitle: {
    color: '#232528',
    fontFamily: "open-sans-SemiBoldItalic",
    fontSize: 14,
    fontStyle: 'italic',	
    fontWeight: '600',
    letterSpacing: -0.39,	
    lineHeight: 19,
    marginBottom:50
  },
  HeaderText:{
    color: '#232528',	
    fontFamily: "open-sans-bold",
    fontSize: 24,	
    fontWeight: 'bold',	
    letterSpacing: -0.39,	
    lineHeight: 33,
    paddingLeft:0,
    paddingRight:15
  },
  HeaderTextIn:{
    textDecorationLine: 'underline',
    color:'#00DB8A' 
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
  Tcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:30
  },
  TabHeading:{
    color:'#505050',
    fontSize:11,
    fontWeight:'bold',
    fontFamily: "open-sans-bold",
    letterSpacing:-0.31,
    textAlign: 'left',
    width:'100%'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 60, 
    justifyContent: 'center',
    bottom:0,

  },
  ContentBox:{
    borderColor:'#EAF6FF',
    marginTop:20
  },
  TabContentHeading:{
    color: '#0DBBF4',	
    fontFamily: "open-sans-SemiBold",	
    fontSize: 17,
    letterSpacing: -0.39,
    lineHeight: 23,
    marginBottom:15
  },
  ContentArea:{ 
    color: '#232528',	
    fontFamily: "open-sans-Regular",	
    fontSize: 14,	
    letterSpacing: -0.39,	
    lineHeight: 19,
    marginBottom:20
  },
  TabContentBold:{
    fontWeight:'bold'
  },
  ContentAreaLink:{
      color:'#0DBBF4'
  },
  TabContent:{
    color: '#000000',	
    fontFamily: "open-sans-Regular",	
    fontSize: 14,	
    letterSpacing: -0.39,	
    lineHeight: 20
  },
  ContentBoxColor:{
    marginTop:37
  },
  ContentBoxGreen:{
    backgroundColor: '#00DB8A',
    padding:20,
    marginTop:20 
  },
  ContentBoxBlue:{
    backgroundColor: '#0DBBF4',
    padding:20,
    marginTop:20
  },
  ContentBoxOrange:{
    backgroundColor: '#FFA400',
    padding:20,
    marginTop:20
  },
  ContentBoxText:{
    color: '#FFFFFF',	
    fontFamily: "open-sans-bold",	
    fontSize: 17,	
    fontWeight: 'bold',	
    letterSpacing: -0.39,	
    lineHeight: 23
  },
  stepLabel: {
    color: '#787993',	
    fontFamily: "open-sans-bold",	
    fontSize: 12,
    fontWeight: 'bold',	
    letterSpacing: 0.65,	
    lineHeight: 17,
    textAlign: 'center',
    marginTop:40
  },
  stepLabelSelected: {
    color: '#787993',	
    fontFamily: "open-sans-bold",	
    fontSize: 12,
    fontWeight: 'bold',	
    letterSpacing: 0.65,	
    lineHeight: 17,
    textAlign: 'center',
    marginTop:40
  },
  stepIndicator:{
    paddingTop:70,
    paddingBottom:5
  }
});