import React from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
export default class DefaultHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    
    const { color, iconColor, humburger, home } = this.props;
        const styles = {
            container: {
              flexDirection: 'row',  
              justifyContent: 'space-between',
              paddingTop:30,
              paddingLeft:10,
              paddingRight:10,
              paddingBottom:20,
              backgroundColor: color 
            }
        };

    return( 
      <View>  
        <KeyboardAvoidingView style={styles.container}> 
            { this.props.home ? (
              <Icon  color={iconColor} size={35} type='material-community' onPress={() => { this.props.navigation.navigate('LandingScreen') }} name='home-outline' />
            ):(
              <Icon  color={iconColor} size={45} type='material-community' onPress={() => { this.props.navigation.navigate('LandingScreen') }}  name='chevron-left' />
            )
            }
           
           {this.props.humburger ? (
              <Icon  color={iconColor} size={35} type='material-community' onPress={() => this.props.navigation.toggleDrawer()} name='menu' />
           ): (
              <Icon  color={iconColor} size={35} type='material-community' name='' />
           )
           }

           </KeyboardAvoidingView>
      </View>
    );  
  }
}  
 
// const styles = StyleSheet.create({ 
//   container: {
//     flexDirection: 'row', 
//     justifyContent: 'space-between',
//     paddingTop:30,
//     paddingLeft:30,
//     paddingRight:30,
//     paddingBottom:20,
//     backgroundColor:'#fff'
//   }
// })