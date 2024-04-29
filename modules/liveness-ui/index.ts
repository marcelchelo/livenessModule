//Makes the native module available to the JS layer.
// It also exports the livenessUIView component and the ChangeEventPayload type.


import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to livenessUI.web.ts
// and on native platforms to livenessUI.ts
import livenessUIModule from './src/livenessUIModule';
import livenessUIView from './src/livenessUIView';
import { ChangeEventPayload, livenessUIViewProps } from './src/livenessUI.types';

// Get the native constant value.
export const PI = livenessUIModule.PI;

export function hello(): string {
  return livenessUIModule.hello();
}

export async function setValueAsync(value: string) {
  return await livenessUIModule.setValueAsync(value);
}

const emitter = new EventEmitter(livenessUIModule ?? NativeModulesProxy.livenessUI);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { livenessUIView, livenessUIViewProps, ChangeEventPayload };
