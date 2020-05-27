import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image  } from 'react-native';
import DefaultHeader from '../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Tabs from 'react-native-tabs';
import { LineChart } from 'react-native-chart-kit' 
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
const LineData=[];

export default class OntrackScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      currentPage: 0 ,
      page:'all',
      dataSource:[]
    }
  }

  
  componentWillReceiveProps (nextProps, nextState) {
    if (nextState.currentPage != this.state.currentPage) {
      if (this.viewPager) {
        this.viewPager.setPage(nextState.currentPage)
      }
    }
  }

  componentDidMount(){
    fetch("https://www.quandl.com/api/v3/datasets/ZILLOW/Z21801_ZHVI1B.json?api_key=winL5yh_fxrPa_mHssgo&start_date=2015-10-31")
    .then(response => response.json())
    .then((responseJson)=> {
      responseJson.dataset.data.map((y) => {
        LineData.push(y[1])
      })
      this.setState({
       dataSource: LineData
      })

    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }
 

  static navigationOptions = { 
    header: () => <DefaultHeader />
  }
  
  render() {

    return(
      <ScrollView style={styles.container}> 
        <View style={styles.BoxSpace}>
          <Text style={styles.HeaderText}>You’re on track to own a <Text style={styles.HeaderTextIn}> $230,000 home </Text> by <Text style={{textDecorationLine: 'underline'}}>January, 2025</Text> </Text>
        </View>

        <View style={{marginTop:40,padding:0}}>
            <LineChart
              data={{
                datasets: [
                  {
                    data: this.state.dataSource,
                    color: (opacity = 0) => `rgba(134, 65, 244, ${opacity})`, // optional
                    strokeWidth: 5 // optional
                  },
                ],
              }}
              width={Dimensions.get('window').width} // from react-native
              height={250} 
              width={510}
              withVerticalLabels={false}  
              withDots={false}
              withShadow={false}
              withInnerLines={false}
              withOuterLines={false}
              withHorizontalLabels={false}
              chartConfig={{  
              backgroundColor: "#fff",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                width:'100%'
              },
              propsForDots: {
                  r: "1",
                }
              }} 
              bezier
              style={{
                marginLeft:-68,
                width:'100%'
              }}
            />
          </View> 
           
          <View style={styles.BoxSpace}>
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


        <TouchableOpacity  style={styles.Rectangle } onPress={() => this.props.navigation.navigate('WelcomePageScreen')} >
             <Text style={styles.Next }>First Step</Text>  
        </TouchableOpacity>

         <Text style={styles.TopTabHeading}> Future Tasks </Text>
        <View style={styles.Tcontainer}>
            <Tabs selected={this.state.page} style={{top:0, textAlign:'left',margin:0, width:180}}
                selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
                <Text name="all" style={styles.TabHeading} selectedStyle={{color:'#FFA400',fontSize:11,fontWeight:'bold',fontFamily: "open-sans-bold",letterSpacing:-0.31 }} >All</Text>
                <Text name="completed" style={styles.TabHeading} selectedStyle={{color:'#FFA400',fontSize:11,fontWeight:'bold',fontFamily: "open-sans-bold",letterSpacing:-0.31}}>Completed</Text>
            </Tabs>
          
           
            { this.state.page =='all' ? (
            <View style={styles.welcome}> 

                  <View style={styles.ContentBox}>
                    <Text style={styles.TabContentHeading}>
                    We need to establish a dedicated savings account
                    </Text>
                    <Text style={styles.TabContent}>
                    A big part of making progress towards saving a downpayment is an account dedicated to just that.
                    </Text>
                    <Text style={styles.ContentLink}>Take Action</Text>
                 </View>

                  <View style={styles.ContentBox}>
                    <Text style={styles.TabContentHeading}>
                    To meet your downpayment goals, you need to save more.
                    </Text>
                    <Text style={styles.TabContent}>
                    A small improvement on your credit score could lower your monthly payments by $200/mo
                    </Text>
                    <Text style={styles.ContentLink}>Learn More</Text>
                 </View>

                 <View style={styles.ContentBox}>
                    <Text style={styles.TabContentHeading}>
                    Improve your credit score
                    </Text>
                    <Text style={styles.TabContent}>
                    A small improvement on your credit score could lower your monthly payments by $200/mo
                    </Text>
                    <Text style={styles.ContentLink}>Learn More</Text>
                 </View>

                 <Text style={styles.CompleteTaskLink}>Your completed tasks go here</Text>
            </View>
        ):<Text></Text>}


          { this.state.page =='completed' ? (
              <View style={styles.welcome}>
                    <Text style={styles.TabContentHeading}>
                         Congrats! We're ready to collect documentation
                    </Text>
                    <Text style={styles.TabContent}>
                        A small improvement on your credit score could lower your monthly payments by $200/mo
                    </Text>
                    <Text style={styles.ContentLink}>Learn More</Text>
              </View>
          ):<Text></Text>  }

      
        </View> 
</View>
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
    paddingTop:15,
    backgroundColor:'#FFFFFF'
  },
  BoxSpace:{
    paddingLeft:30,
    paddingRight:30
  },
  PageTitle: {
    color: '#989898',
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
    color: '#00DB8A',	
    fontFamily: "open-sans-bold",	
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: -0.26,
    lineHeight: 55,
    textAlign: 'center', 
  },
  TopTabHeading:{
    color: '#505050',	
    fontFamily: "open-sans-bold",
    fontSize: 17,	
    fontWeight: 'bold',	
    letterSpacing: -0.39,	
    lineHeight: 23
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
    borderWidth:1,
    padding:20,
    borderColor:'#EAF6FF',
    marginTop:20
  },
  TabContentHeading:{
    color: '#232528',	
    fontFamily: "open-sans-bold",	
    fontSize: 17,	
    fontWeight: 'bold',	
    letterSpacing: -0.39,
    lineHeight: 23,
    marginBottom:15
  },
  TabContent:{
    color: '#505050',	
    fontFamily: "open-sans-Regular",	
    fontSize: 14,	
    letterSpacing: -0.39,	
    lineHeight: 19
  },
  ContentLink:{
    color: '#0DBBF4',	
    fontFamily: "open-sans-SemiBoldItalic",	
    fontSize: 14,	
    fontStyle: 'italic',
    fontWeight: '600',
    letterSpacing: -0.39,	
    lineHeight: 19,
    marginTop:5
  },
  CompleteTaskLink:{
    color: '#AEAEAE',	
    fontFamily: "open-sans-Regular",	
    fontSize: 14,
    letterSpacing: -0.39,
    lineHeight: 19,
    textAlign:'center',
    marginTop:30
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