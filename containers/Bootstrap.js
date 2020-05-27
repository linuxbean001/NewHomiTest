import React from 'react';
import { ActivityIndicator, View, StyleSheet, Easing, Animated } from 'react-native';
console.disableYellowBox = true; 
console.disableYellowBox = ['Failed prop type: Invalid props.style'];
import { Icon } from 'react-native-elements'; 
// Signup and Onboard information screens
import NameAndPassScreen from './Onboarding/NameAndPass';
import LandingScreen from './Landing';
import SettingScreen from './Onboarding/Setting';
import MyHomeScreen from './Onboarding/MyHome';
import LoginScreen from './Onboarding/Login';
import DefaultHeader from './../components/Header';  
import InsightHeader from './../components/InsightHeader';
import PrivacyPolicyScreen from './Onboarding/PrivacyPolicy';   
import TermOfServiceScreen from './Onboarding/TermofService'; 
import Custom_Side_Menu from './sideMenu'; 
import { YourHomeScreen, YourPlanScreen, YourProgressScreen, YourPurchaseScreen, YourSwipeScreen } from './Onboarding/OnboardInfo/index';
import { BasicsScreen, YourCreditScreen, YourHomeTypeScreen, YourSavingsScreen } from './Onboarding/ExtraInformation/index';
import { MainDashboardScreen, LenderDetailsScreen,DashboardLineGraphScreen, DashboardCreditScreen, WelcomePageScreen, OntrackScreen,MeetLenderScreen } from './Dashboard/index';
import { HomeOwnershipNotificationScreen, PlanReadyNotificationScreen, NotificationApprovalScreen} from './Notification/index';
import { ImproveCreditScreen, DownpaymentGoalScreen, InvestmentScreen } from './Insight/index';
 
import firebase from 'firebase'; 
import ENV from '../environment'; 
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { enableScreens } from 'react-native-screens';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';  
// import '@firebase/firestore';   
import * as Font from 'expo-font';
const firebaseConfig = ENV().firebaseConfig; 
if (!firebase.apps.length) { 
  firebase.initializeApp(firebaseConfig);
}

export default  class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assetsLoaded: false,
    };
    this._bootStrapAsync();
  }

  _bootStrapAsync = async () => {
      firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log('Authenticated with Firebase');
      } else {
      }
      // this.props.navigation.navigate('SignUp');
    });
  }

  
  render() {
      return(
        <AppContainer /> 
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})


const SignUp = createStackNavigator({ 

  LandingScreen: {
    screen: LandingScreen,
    navigationOptions: ({ navigation }) => ({ 
      title: 'Screen 1 with Button',
      header: <DefaultHeader humburger={false} home={true}  iconColor='#617FCF' color='#fff' navigation={navigation} />,  
      gesturesEnabled: false,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  NameAndPassScreen: {
    screen: NameAndPassScreen,
    navigationOptions: ({ navigation }) => ({ 
      title: 'Screen 1 with Button',
      header: <DefaultHeader  humburger={false} home={false} iconColor='#00DB8A' color='#fff' navigation={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader humburger={false} home={false} iconColor='#00DB8A' color='#fff' navigation={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  PrivacyPolicyScreen: {
    screen: PrivacyPolicyScreen,  
    navigationOptions: ({ navigation }) => ({ 
      title: 'Screen 1 with Button',
      header: <DefaultHeader humburger={false} home={false} iconColor='#00DB8A' color='#fff' navigation={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800',
      }, 
      headerTintColor: '#fff',
    }),
  },
  TermOfServiceScreen: {
    screen: TermOfServiceScreen,  
    navigationOptions: ({ navigation }) => ({    
      title: 'Screen 1 with Button',
      header: <DefaultHeader humburger={false} home={false} iconColor='#00DB8A' color='#fff' navigation={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800',
      }, 
      headerTintColor: '#fff',
    }),
  }
});

const Setting = createStackNavigator({ 
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader  humburger={true} home={true} iconColor='#617FCF' color='#fff' navigation={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff', 
    }),
  }
});

const MyHome = createStackNavigator({ 
  MyHomeScreen: {
    screen: MyHomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader  humburger={true} home={true} iconColor='#617FCF' color='#fff' navigation={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff', 
    }),
  } 
});



const Onboarding = createStackNavigator({

  YourHomeScreen: {
    screen: YourHomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader humburger={false} home={true} iconColor='#617FCF' color='#fff' navigation={navigation} />,  

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  YourPlanScreen: {
    screen: YourPlanScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader humburger={false} home={true} iconColor='#617FCF' color='#fff' navigation={navigation} />,  

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  YourProgressScreen: {
    screen: YourProgressScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader humburger={false} home={true} iconColor='#617FCF' color='#fff' navigation={navigation} />,  

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  YourPurchaseScreen: {
    screen: YourPurchaseScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader humburger={false} home={true} iconColor='#617FCF' color='#fff' navigation={navigation} />,  

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  }, 
  YourSwipeScreen: {
    screen: YourSwipeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader humburger={false} home={true} iconColor='#617FCF' color='#fff' navigation={navigation} />,  

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  }, 
});

const ExtraInfo = createStackNavigator({
  BasicsScreen: {
    screen: BasicsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader humburger={true} home={true} iconColor='#617FCF' color='#fff' navigation={navigation} />,  

      headerStyle: { 
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  YourHomeTypeScreen: {
    screen: YourHomeTypeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader  humburger={true} home={true} iconColor='#617FCF' color='#fff' navigation={navigation} />,  

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  YourCreditScreen: {
    screen: YourCreditScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader  humburger={true} home={true} iconColor='#617FCF' color='#fff' navigation={navigation} />,  

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  YourSavingsScreen: {
    screen: YourSavingsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader  humburger={true} home={true} iconColor='#617FCF' color='#fff' navigation={navigation} />,  

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },

});

const MainApp = createStackNavigator({

  MainDashboardScreen: {
    screen: MainDashboardScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader  humburger={true} home={true} iconColor='#617FCF' color='#fff' navigation={navigation} />,  

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  LenderDetailsScreen: {
    screen: LenderDetailsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader  humburger={true} home={true} iconColor='#617FCF' color='#fff' navigation={navigation} />,  

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  DashboardLineGraphScreen: {
    screen: DashboardLineGraphScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader  humburger={true} home={true} iconColor='#617FCF' color='#fff' navigation={navigation} />,  

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  WelcomePageScreen: {
    screen: WelcomePageScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader  humburger={true} home={true} iconColor='#617FCF' color='#fff' navigation={navigation} />,  

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  OntrackScreen: {
    screen: OntrackScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader  humburger={true} home={true} iconColor='#617FCF' color='#fff' navigation={navigation} />,  

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  MeetLenderScreen: {
    screen: MeetLenderScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader  humburger={true} home={true} iconColor='#617FCF' color='#fff' navigation={navigation} />,  

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  DashboardCreditScreen: {
    screen: DashboardCreditScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader  humburger={true} home={true} iconColor='#617FCF' color='#fff' navigation={navigation} />,  

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },

});

// const Notification = createSwitchNavigator({

//   HomeOwnershipNotificationScreen: {
//     screen: HomeOwnershipNotificationScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Screen 1 with Button',
//       header: <DefaultHeader iconColor='#617FCF' color='#fff' navigation={navigation} />,  

//       headerStyle: {
//         backgroundColor: '#FF9800',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
//   PlanReadyNotificationScreen: {
//     screen: PlanReadyNotificationScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Screen 1 with Button',
//       header: <DefaultHeader iconColor='#617FCF' color='#fff' navigation={navigation} />,  

//       headerStyle: {
//         backgroundColor: '#FF9800',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
//   NotificationApprovalScreen: {
//     screen: NotificationApprovalScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Screen 1 with Button',
//       header: <DefaultHeader iconColor='#617FCF' color='#fff' navigation={navigation} />,  

//       headerStyle: {
//         backgroundColor: '#FF9800',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

const Insight = createStackNavigator({

  ImproveCreditScreen: {
    screen: ImproveCreditScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader  humburger={true} home={true} iconColor='#fff' color='#00DB8A' navigation={navigation} />,  

      headerStyle: {
        backgroundColor: '#00DB8A',
      },
      headerTintColor: '#fff',
    }),
  },
  DownpaymentGoalScreen: {
    screen: DownpaymentGoalScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader  humburger={true} home={true} iconColor='#fff' color='#0DBBF4' navigation={navigation} />,  

      headerStyle: {
        backgroundColor: '#0DBBF4',
      },
      headerTintColor: '#fff',  
    }),
  },
  InvestmentScreen: {
    screen: InvestmentScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1 with Button',
      header: <DefaultHeader  humburger={true} home={true} iconColor='#fff' color='#FFA400' navigation={navigation} />,  

      headerStyle: {
        backgroundColor: '#FFA400',
      },
      headerTintColor: '#fff',
    }),
  }, 

});



const AppNavigator = createDrawerNavigator({

  Screen1: {
    screen: SignUp,
    navigationOptions: {
      drawerLabel: 'Dashboard',
      drawerLockMode: 'locked-closed'
    },
  },
  Screen2: {
    screen: Setting,
    navigationOptions: {
      drawerLabel: 'Setting',
    },
  },
  Screen3: {
    screen: Onboarding,
    navigationOptions: {
      drawerLabel: 'Task',
      drawerLockMode: 'locked-closed'
    },
  },
  Screen4: {
    screen: ExtraInfo,
    navigationOptions: {
      drawerLabel: 'Meet Lender',
    },
  },
  Screen5: {
    screen: MainApp,
    navigationOptions: {
      drawerLabel: 'Invite Partener',
    },
  },
  Screen6: {
    screen: MyHome,
    navigationOptions: {
      drawerLabel: 'My Home',
    },
  },
  Screen7: {
    screen: Insight,
    navigationOptions: {
      drawerLabel: () => null
    },
  }, 
},{ 
    contentComponent: Custom_Side_Menu, 
    drawerType: 'slide',
    drawerPosition: 'right',
    drawerBackgroundColor: "#fff", 
    drawerWidth: 200, 
    drawerBorderBottomWidth: 2,
    drawerBorderBottomColor: "#47315a",
    contentOptions: {
      labelStyle: { 
        color: '#232528',
        fontFamily: "open-sans-SemiBold",            
        fontSize: 16,  
        fontWeight: '600',   
        letterSpacing: -0.26,
        lineHeight: 22,          
      }, 
    } 
  }
); 


const mainStack = createStackNavigator({
  Drawer: { screen: AppNavigator, headerMode: 'float', navigationOptions: { header: null } },
  Onboarding: {
    screen: Onboarding,
    navigationOptions: { title: 'Screen External' },   
  },
});

const AppContainer = createAppContainer(mainStack) 