import React from 'react'
import PropTypes from 'prop-types';

PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: []
};

function PostList(props) {
  const {posts}  = props;
  console.log('PostList:', posts);
  return (
    <ul className="post-list">
      {posts.map(post => {
          return <li key={post.id}>{post.title}</li>
        })}
    </ul>
  )
}

export default PostList