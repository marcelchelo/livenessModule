import * as React from 'react';

import { livenessUIViewProps } from './livenessUI.types';

export default function livenessUIView(props: livenessUIViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
