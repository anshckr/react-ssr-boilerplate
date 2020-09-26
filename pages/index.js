import React from 'react';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

import Layout from '../src/components/Layout';
import ErrorBoundary from '../src/components/ErrorBoundary';

const App = ({ posts }) => {
  return (
    <ErrorBoundary>
      <Layout posts={posts} />
    </ErrorBoundary>
  );
};

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

App.getInitialProps = async () => {
  const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsResponse.json();

  return {
    posts,
  };
};

export default App;
