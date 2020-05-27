import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Slider, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ToggleSwitch from 'toggle-switch-react-native'
import DefaultHeader from '../../components/Header'; 

export default class SettingScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOnBlueToggleSwitch: false,
            value: 50,
        };
     
      }

  static navigationOptions = {
    header: () => <DefaultHeader hide='1' />
  }
 
  onToggle(isOn) {
    console.log("Changed to " + isOn);
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }

  render() {
    const {value} = this.state;
    return(
      <ScrollView style={styles.container}>
               <View style={styles.ViewsStyle}>
                 <Text style={styles.HeaderText}>Settings</Text>
               </View>

               <View style={styles.ViewsStyle}>
                 <Text style={styles.SubHeaderText}>Account Owner</Text>
                 <Text style={styles.contentText}>Christopher Carter</Text>
               </View>

               <View style={styles.ViewsStyle}>
                 <Text style={styles.SubHeaderText}>Communication Settings</Text>

                 
                        <ToggleSwitch 
                            label="Allow Push Notifications" 
                            onColor="#2196F3"
                            offColor="#AEB8C0"
                            labelStyle={{ color: "#AEB8C0", fontWeight: "600", fontSize:13, width:'80%', lineHeight:40}}
                            isOn={this.state.isOnBlueToggleSwitch}
                            onToggle={isOnBlueToggleSwitch => {
                                this.setState({ isOnBlueToggleSwitch });
                                this.onToggle(isOnBlueToggleSwitch);
                            }}
                            style={styles.ToggleBox}
                        />

                        <ToggleSwitch 
                            label="Allow Emails" 
                            onColor="#2196F3"
                            offColor="#AEB8C0"
                            labelStyle={{ color: "#AEB8C0", fontWeight: "600", fontSize:13, width:'80%', lineHeight:40}}
                            isOn={this.state.isOnBlueToggleSwitch}
                            onToggle={isOnBlueToggleSwitch => {
                                this.setState({ isOnBlueToggleSwitch });
                                this.onToggle(isOnBlueToggleSwitch);
                            }}
                        />

                        <ToggleSwitch 
                            label="Allow Text Messaging" 
                            onColor="#2196F3"
                            offColor="#AEB8C0"
                            labelStyle={{ color: "#AEB8C0", fontWeight: "600", fontSize:13, width:'80%', lineHeight:40}}
                            isOn={this.state.isOnBlueToggleSwitch}
                            onToggle={isOnBlueToggleSwitch => {
                                this.setState({ isOnBlueToggleSwitch });
                                this.onToggle(isOnBlueToggleSwitch);
                            }}
                            
                        />
               </View>


               <View style={styles.ViewsStyle}>
                 <Text style={styles.SubHeaderText}>Home Location</Text>

                       <TextInput
                          autoCapitalize="none"
                          autoCorrect={false}
                          returnKeyType='next'
                          placeholder="Salisbury, Maryland"
                          style={styles.locationBox}
                        />
                        <ToggleSwitch 
                            label="Automatic Location" 
                            onColor="#2196F3"
                            offColor="#AEB8C0"
                            labelStyle={{ color: "#AEB8C0", fontWeight: "600", fontSize:13, width:'80%', lineHeight:40}}
                            isOn={this.state.isOnBlueToggleSwitch}
                            onToggle={isOnBlueToggleSwitch => {
                                this.setState({ isOnBlueToggleSwitch });
                                this.onToggle(isOnBlueToggleSwitch);
                            }}
                            style={styles.ToggleBox}
                        />

               </View>

               <View style={styles.ViewsStyle}>
                 <Text style={styles.SubHeaderText}>Language</Text>
                        <Text style={styles.freqText1}>English (United Kingdom)</Text>
                        <Text style={styles.freqText1}>+ Add Language</Text>
               </View>

               <View style={styles.ViewsStyle}>   
                 <Text style={styles.SubHeaderText}>Updating Privacy</Text> 
                 <View style={styles.contentText}>
                     <View style={styles.contentTextright}>
                        <Text style={styles.freqText1}>Frequency:</Text>
                        <Text style={styles.freqText2}>70%</Text>   
                     </View> 
                      
                </View>
                 <Slider
                    step={1} 
                    maximumValue={100}  
                    onValueChange={this.change.bind(this)}
                    value={value}
                />

                <View style={styles.contentText}>
                     <View style={styles.contentTextright}>
                        <Text style={styles.freqText1}>Week Interval:</Text>
                        <Text style={styles.freqText2}>Mon - Sun</Text>   
                     </View> 
                      
                </View>
               </View>

               <TouchableOpacity  style={styles.Rectangle }>
                  <Text style={styles.Next }>Next</Text>
                </TouchableOpacity> 
      </ScrollView>
    ); 
  } 
}  
 
const styles = StyleSheet.create({ 

  container: {
    flex: 1,  
    // paddingLeft:30,
    // paddingRight:30, 
    // paddingTop:30,
    backgroundColor:'#fff'
  },
  ViewsStyle:{ 
      borderBottomColor:'#979797',
      borderBottomWidth: 1,
      padding:15
  },
  HeaderText: {
    color: '#232528',	
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: -0.39,
    lineHeight: 33,
   	fontFamily: "open-sans-SemiBold",
  },
  locationBox:{
    borderWidth: 0,
    borderColor:'#979797',
    padding:5,
    marginTop:15 
  },
  SubHeaderText: {
    color: '#58504F',
    fontSize: 15,
    fontWeight:'600',  
    letterSpacing: -0.26, 
    lineHeight: 20,
    fontFamily: "open-sans-SemiBold",
},
contentText:{ 
    color: '#AEB8C0',
    fontFamily: "open-sans-SemiBold",
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
    paddingTop:15
},
ToggleBox:{
    marginTop:20,
    padding:20
},
contentTextright:{
  flexDirection: 'row', 
  justifyContent: 'space-between',
  marginBottom:10
},
freqText1:{
    textAlign:'left',
    color: '#AEB8C0',
    fontFamily: "open-sans-SemiBold",
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
    paddingTop:15
},
freqText2:{
    textAlign:'right',
    color: '#AEB8C0',
    fontFamily: "open-sans-SemiBold",
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
    paddingTop:15
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
}

})