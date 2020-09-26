import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Layout.scss';

class Layout extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="layout">
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <h2>{post.title}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

Layout.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Layout;
