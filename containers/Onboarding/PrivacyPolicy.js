import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';
import DefaultHeader from '../../components/Header';
import firebase from 'firebase';
import '@firebase/firestore';

export default class PrivacyPolicyScreen extends React.Component {
  static navigationOptions = {
    header: () => <DefaultHeader />
  }

  render() {
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.HeaderText}>Privacy Policy</Text>
        <View style={styles.ContentArea}>
            <Text style={styles.ContentText}> Homi, Inc built the Homi app as a Commercial app. This SERVICE is provided by Homi, Inc and is intended for use as is.
{'\n'}{'\n'}
This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
{'\n'}{'\n'}
If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
{'\n'}{'\n'}
The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Homi unless otherwise defined in this Privacy Policy.
{'\n'}{'\n'}
Information Collection and Use
{'\n'}{'\n'}
For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Name, Email, Marital Status, Net Worth, PITI. The information that we request will be retained by us and used as described in this privacy policy.
{'\n'}{'\n'}
The app does use third party services that may collect information used to identify you.
{'\n'}{'\n'}
Link to privacy policy of third party service providers used by the app
{'\n'}{'\n'}
Google Play Services{'\n'}
Firebase Analytics{'\n'}
Facebook{'\n'}
Log Data
{'\n'}{'\n'}
We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
{'\n'}{'\n'}
Cookies
{'\n'}{'\n'}
Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
{'\n'}{'\n'}
This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
{'\n'}{'\n'}
Service Providers
{'\n'}{'\n'}
We may employ third-party companies and individuals due to the following reasons:
{'\n'}{'\n'}
To facilitate our Service;{'\n'}
To provide the Service on our behalf;{'\n'}
To perform Service-related services; or{'\n'}
To assist us in analyzing how our Service is used.{'\n'}
We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
{'\n'}{'\n'}
Security
{'\n'}{'\n'}
We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
{'\n'}{'\n'}
Links to Other Sites
{'\n'}{'\n'}
This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
{'\n'}{'\n'}
Children’s Privacy
{'\n'}{'\n'}
These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
{'\n'}{'\n'}
Changes to This Privacy Policy
{'\n'}{'\n'}
We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
{'\n'}{'\n'}
Contact Us
{'\n'}{'\n'}
If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at info@homi.works. </Text>

        </View>
        <TouchableOpacity  style={styles.Rectangle }
         onPress={() => this.props.navigation.navigate('YourSwipeScreen')} >
          <Text style={styles.Next }>Accept</Text>
        </TouchableOpacity>
      
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  HeaderText: {
    color: '#000000',
    fontFamily: "open-sans-SemiBold",	
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: -0.39,
    lineHeight: 33
  },
  ContentArea:{
         marginTop:30,
         marginBottom:30
  },
  ContentText:{
    color: '#232528',
    fontFamily: "open-sans-Regular",
    fontSize: 16,	
    letterSpacing: -0.26,	
    lineHeight: 22,
  },
  Rectangle: {
    height: 61,
    borderWidth: 1,
    borderColor: '#AEAEAE',
    borderRadius: 30.5,
    textAlign: 'center',
    marginTop:30,
    marginBottom:50
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
    paddingLeft:30,
    paddingRight:30,
    paddingTop:30,
    backgroundColor:'#fff'
  }
});