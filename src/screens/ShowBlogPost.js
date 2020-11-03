import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Context } from '../context/BlogContext';

const ShowBlogPost = ({ navigation }) => {

  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
}

ShowBlogPost.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => <TouchableOpacity onPress={() =>
      navigation.navigate('EditBlogPost',
        { id: navigation.getParam('id') })}>
      <Icon name='pencil' size={30} />
    </TouchableOpacity>
  };
};
export default ShowBlogPost;