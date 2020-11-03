import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

const BlogPostFrom = ({ onSubmit, initialValues }) => {

  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text>Title</Text>
      <TextInput
        style={styles.inputField}
        value={title}
        onChangeText={value => setTitle(value)}
      />
      <Text>Content</Text>
      <TextInput
        style={styles.inputField}
        value={content}
        onChangeText={value => setContent(value)}
      />
      <Button
        title='Save Blog'
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
}

BlogPostFrom.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
}
const styles = StyleSheet.create({
  inputField: {
    borderWidth: 2,
    margin: 5,
    fontSize: 16
  }
});

export default BlogPostFrom;