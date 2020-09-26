import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Layout />
    </ErrorBoundary>
  );
};

export default App;

const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
