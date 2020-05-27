import Constants from 'expo-constants';
import { Platform } from 'react-native';

import { firebaseConfigDev } from './env/dev/firebaseAccount';
import { firebaseConfigProd } from './env/prod/firebaseAccount';
// const localhost =
//  Platform.OS === "ios" ? "localhost:8080" : "10.0.2.2:8080";

const ENV = {
  dev: {
    firebaseConfig: firebaseConfigDev,
    quandlApiKey: 'WYe3SX316Ax1mYL9ZKUj'
  },
  staging: {
    firebaseConfig: firebaseConfigProd,
    quandlApiKey: 'WYe3SX316Ax1mYL9ZKUj'
  },
  prod: {
  }
  };

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
 if (__DEV__) {
   return ENV.dev;
 } else if (env === 'staging') {
   return ENV.staging;
 } else if (env === 'prod') {
   return ENV.prod;
 }
};

export default getEnvVars;