import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions  } from 'react-native';
import DefaultHeader from '../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Tabs from 'react-native-tabs';
import { LineChart } from 'react-native-chart-kit';
const LineData=[];
export default class WelcomePageScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      currentPage: 0 ,
      page:'all',
      dataSource:[]
    }
  }

  static navigationOptions = {
    header: () => <DefaultHeader />
  }
  
  componentDidMount(){
    fetch("https://www.quandl.com/api/v3/datasets/ZILLOW/Z21801_ZHVI2B.json?api_key=winL5yh_fxrPa_mHssgo&start_date=2018-10-31")
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

  render() {

    return(
      <ScrollView style={styles.container}> 
      <Text style={styles.PageTitle}>Congrats David!</Text>
      <View style={styles.BoxSpace}>
    <Text style={styles.HeaderText}>You’re ready to buy a <Text style={styles.HeaderTextIn}> $230,000 home </Text> {'\n'}<Text style={{textDecorationLine: 'underline'}}>this month! </Text> </Text>
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
      <TouchableOpacity  style={styles.Rectangle } onPress={() => this.props.navigation.navigate('ImproveCreditScreen')} >
           <Text style={styles.Next }>Next Step</Text>  
      </TouchableOpacity>

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
                  Congrats! We're ready to collect documentation
                  </Text>
                  <Text style={styles.TabContent}>
                  A small improvement on your credit score could lower your monthly payments by $200/mo
                  </Text>
                  <Text style={styles.ContentLink}>Take Action</Text>
               </View>

               <View style={styles.ContentBoxColor}>
                    <View style={styles.ContentBoxGreen}>
                        <Text style={styles.ContentBoxText}>Move Savings to Higher Yeild Account</Text>
                    </View>
                    <View style={styles.ContentBoxBlue}>
                        <Text style={styles.ContentBoxText}>Established Credit Accounts</Text>
                    </View>
                    <View style={styles.ContentBoxOrange}>
                        <Text style={styles.ContentBoxText}>Collected Documentation</Text>
                    </View>
                </View>

          </View>
      ):<Text></Text>}


        { this.state.page =='completed' ? (
          <View style={styles.welcome}> 

          <View style={styles.ContentBox}>
            <Text style={styles.TabContentHeading}>
            Congrats! We're ready to collect documentation
            </Text>
            <Text style={styles.TabContent}>
            A small improvement on your credit score could lower your monthly payments by $200/mo
            </Text>
            <Text style={styles.ContentLink}>Take Action</Text>
         </View>
    </View>
        ):<Text></Text>  }

    
      </View> 
</View>
    </ScrollView>
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
    color: '#232528',
    fontFamily: "open-sans-SemiBoldItalic",
    fontSize: 14,
    fontStyle: 'italic',	
    fontWeight: '600',
    letterSpacing: -0.39,	
    lineHeight: 19,
    marginBottom:10,
    paddingLeft:30,
    paddingRight:30
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
  }
});