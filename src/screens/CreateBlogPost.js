import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import BlogPostFrom from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';


const CreateBlogPost = ({ navigation }) => {

  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostFrom onSubmit={(title, content) => {
      addBlogPost(title, content, () => navigation.navigate('Dashboard'));
    }} />
  );
}
const styles = StyleSheet.create({
  inputField: {
    borderWidth: 2,
    margin: 5,
    fontSize: 16
  }
});

export default CreateBlogPost;