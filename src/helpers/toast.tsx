import React from 'react';
import Toast, { BaseToast } from 'react-native-toast-message';
import { colors } from '../const/colors';

const toastStyle = {
  marginTop: 50,
  paddingHorizontal: 15,
};

const successToastStyle = {
  ...toastStyle,
  borderLeftColor: colors.success,
};

const errorToastStyle = {
  ...toastStyle,
  borderLeftColor: colors.danger,
};

const toastConfig = {
  success: ({ ...rest }) => <BaseToast {...rest} style={successToastStyle} />,
  error: ({ ...rest }) => <BaseToast {...rest} style={errorToastStyle} />,
};

const ToastConfig = () => (
  <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
);

export default ToastConfig;