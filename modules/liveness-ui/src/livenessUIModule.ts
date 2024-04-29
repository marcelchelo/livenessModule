//This file imports the native modue using requireNativeModule from expo-modules-core and exports it.
import { requireNativeModule } from 'expo-modules-core';

// It loads the native module object from the JSI or falls back to
// the bridge module (from NativeModulesProxy) if the remote debugger is on.
export default requireNativeModule('livenessUI');
