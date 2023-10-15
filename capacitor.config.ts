import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lig.mobile',
  appName: 'lig-mobile',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
