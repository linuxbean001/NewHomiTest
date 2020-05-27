import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
export default class InsightHeader extends React.Component {
  render() {

    const { color } = this.props;
        const styles = {
            container: {
              flexDirection: 'row',  
              justifyContent: 'space-between',
              backgroundColor: color
            }
        };

    return(
      <View>
         
       
        <SafeAreaView  style={styles.container}>
           <Icon color='#617FCF' size={30} type='material-community' />
           <Icon  color='#fff' size={35} type='material-community' name='home-outline' />
           <Icon color='#617FCF' size={30} type='material-community' />
        </SafeAreaView>
      </View>
    );  
  }
}   


/*const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'green'
  }
})*/

