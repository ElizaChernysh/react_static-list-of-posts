import React from 'react';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Post } from './types/post';
import { PostList } from './components/PostList/PostList';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId) || null,
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <>
    <h1 className="main-title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </>
);

export default App;
