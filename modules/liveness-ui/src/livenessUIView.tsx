import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { livenessUIViewProps } from './livenessUI.types';

const NativeView: React.ComponentType<livenessUIViewProps> =
  requireNativeViewManager('livenessUI');

export default function livenessUIView(props: livenessUIViewProps) {
  return <NativeView {...props} />;
}
