import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import BlogPostFrom from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditBlogPost = ({ navigation }) => {

  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost = state.find(blogPost => blogPost.id === id)

  return <BlogPostFrom
    initialValues={{
      title: blogPost.title,
      content: blogPost.content
    }}
    onSubmit={(title, content) => editBlogPost(id, title, content, () => navigation.pop())}
  />;
}

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 2,
    margin: 5,
    fontSize: 16
  }
});

export default EditBlogPost;