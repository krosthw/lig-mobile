import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lig.mobile',
  appName: 'lig-mobile',
  webDir: 'out',
  server: {
    url: 'http://192.168.43.29:3000',
    cleartext: true
  },
};

export default config;
