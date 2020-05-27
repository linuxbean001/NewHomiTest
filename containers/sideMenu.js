import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import profileImg from './../assets/image/lenderImage.png';
export default class Custom_Side_Menu extends React.Component {

 
        render() {
       
          return (
         
            <View style={styles.sideMenuContainer}> 
                    {/* <Image source={profileImg}
                    style={styles.sideMenuProfileIcon} /> */} 
                    <View style={{ width: '100%', height: 1, backgroundColor: '#00DB8A', marginTop: 15}} />
              <View style={{width: '100%'}}>        
       
                  <View style={styles.itemView}>
                    {/* <Icon style={styles.sideMenuIcon} size={25} type='material-community' name='view-dashboard' /> */}
                    <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('MainDashboardScreen') }}  > Dashboard </Text>
                  </View>
       
                  <View style={styles.itemView}>
                     {/* <Icon style={styles.sideMenuIcon} size={25} type='material-community' name='briefcase' />  */}
                     <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Third') }} > Task </Text>
                  </View>

                  <View style={styles.itemView}>
                    {/* <Icon style={styles.sideMenuIcon} size={25} type='material-community' name='account-multiple-plus' />  */}
                    <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Third') }} > Meet Lender </Text>
                  </View>

                  <View style={styles.itemView}>
                    {/* <Icon style={styles.sideMenuIcon} size={25} type='material-community' name='account-group' />  */}
                    <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Third') }} > Invite Partener </Text>
                </View>  

                  <View style={styles.itemView}>
                    {/* <Icon style={styles.sideMenuIcon} size={25} type='material-community' name='account-multiple-plus' />  */}
                    <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('MyHomeScreen') }} > My Home </Text>
                  </View>

       
                  <View style={styles.itemView}>
                    {/* <Icon style={styles.sideMenuIcon} size={25} type='material-community' name='settings-box' />  */}
                    <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('SettingScreen') }} > Settings </Text>
                  </View>

             
             </View>
            </View>
          );
        }
      

}  


const styles = StyleSheet.create({

    sideMenuContainer: {
  
      width: '100%',
      height: '100%',
      backgroundColor: '#F9F9F9',
      alignItems: 'center',
      paddingTop: 30
    },
    
  sideMenuProfileIcon:
  {
    resizeMode: 'center',
    width: 150, 
    height: 150, 
    borderRadius: 150/2
  },  
  
  sideMenuIcon:
  {
    resizeMode: 'center',
    marginRight: 10,marginLeft:10 

    
  },
    
    itemView: 
    {
     flexDirection: 'row',
     alignItems: 'center',  
     padding:15,
     borderBottomWidth:1,
     borderBottomColor:'#979797'
    },

    menuText:{ 
        color: '#232528',
        fontFamily: "open-sans-SemiBold",            
        fontSize: 16,  
        fontWeight: '600',   
        letterSpacing: -0.26,
        lineHeight: 22,   
    }
  
  });