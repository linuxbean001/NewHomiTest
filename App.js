import React from 'react';
import Bootstrap from './containers/Bootstrap';
import firebase from 'firebase';
import * as Font from 'expo-font';

// For testing purposes
firebase.auth().signOut();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assetsLoaded: false,
    };
  
  }
async componentDidMount() {
await Font.loadAsync({
'open-sans-bold': require('../homi/assets/fonts/OpenSans-Bold.ttf'),
'open-sans-BoldItalic': require('../homi/assets/fonts/OpenSans-BoldItalic.ttf'),
'open-sans-ExtraBold': require('../homi/assets/fonts/OpenSans-ExtraBold.ttf'),
'open-sans-ExtraBoldItalic': require('../homi/assets/fonts/OpenSans-ExtraBoldItalic.ttf'),
'open-sans-Italic': require('../homi/assets/fonts/OpenSans-Italic.ttf'),
'open-sans-Light': require('../homi/assets/fonts/OpenSans-Light.ttf'),
'open-sans-LightItalic': require('../homi/assets/fonts/OpenSans-LightItalic.ttf'),
'open-sans-Regular': require('../homi/assets/fonts/OpenSans-Regular.ttf'),
'open-sans-SemiBold': require('../homi/assets/fonts/OpenSans-SemiBold.ttf'),
'open-sans-SemiBoldItalic': require('../homi/assets/fonts/OpenSans-SemiBoldItalic.ttf'),
'avenir-reg': require('../homi/assets/fonts/AvenirNextLTPro-Regular.otf'),
'avenir-med': require('../homi/assets/fonts/AvenirNextLTPro-Medium.otf'),
'avenir-Demi': require('../homi/assets/fonts/AvenirNextLTPro-Demi.otf')
});
this.setState({ assetsLoaded: true });

}
render(){
return ( 

    this.state.assetsLoaded ? (
      <Bootstrap />
    ) : null
)
    }
  }