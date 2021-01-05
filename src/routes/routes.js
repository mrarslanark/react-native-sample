import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Tabs from '../pages/container/tabs';
import ReportError from '../pages/report/report';
import { THEME } from '../shared/exporter';
import { navigationRef } from '../shared/services/nav.service';

const Stack = createStackNavigator();

const Routes = () => {
  const screenOpts = {
    headerBackTitleVisible: false,
    headerTitleStyle: {
      color: THEME.colors.light,
    },
    headerTintColor: THEME.colors.light,
    headerStyle: {
      backgroundColor: THEME.colors.primary,
    },
    headerBackTitle: '',
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Tabs"
            component={Tabs}
          />
          {/* <Stack.Screen options={{
                        title: 'My Favorites',
                        headerLeft: () => (
                            <AsTouch style={{ paddingLeft: 10, }} press={() => {
                                DeviceEventEmitter.emit('open-menu');
                            }}>
                                <I name={'menu'} style={{ fontSize: WP(5), color: '#fff' }} />
                            </AsTouch>
                        ),
                        ...screenOpts
                    }} name="Favourites" component={Favourites} /> */}
          <Stack.Screen
            options={{
              title: 'Feedback',
              ...screenOpts,
            }}
            name="ReportError"
            component={ReportError}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
