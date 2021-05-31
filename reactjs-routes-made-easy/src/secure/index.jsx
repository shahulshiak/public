import React from 'react';

import SECURE_ROUTES from './secure.routes';
import RouteRenderer from '../shared/components/RouteRenderer';

export default function SecureLanding(props) {
  return (
    <>
      <h2>Secure</h2>
      <RouteRenderer routes={SECURE_ROUTES} />
    </>
  );
}