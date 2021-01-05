import React from 'react';
import { Text, View } from 'react-native';
import * as J from '../../../store/actions/exporter';
const Login = () => {
  const dispatch = useDispatch();
  dispatch(J.login());

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Login;
