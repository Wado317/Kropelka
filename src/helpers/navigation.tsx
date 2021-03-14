import { NavigationContainerRef } from '@react-navigation/native';
import * as React from 'react';
import { Routes } from '../const/routes';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: Routes, params: Record<any, any>) {
  navigationRef.current?.navigate(name, params);
}
