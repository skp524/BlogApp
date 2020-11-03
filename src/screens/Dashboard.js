import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Context } from '../context/BlogContext';

const Dashboard = ({ navigation }) => {

  const { state, deleteBlogPost } = useContext(Context);
  return (
    <>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ShowBlogPost', { id: item.id })}>
              <View style={styles.container}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Icon name='trash' style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>);
}

Dashboard.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('CreateBlogPost')}>
      <Icon name='plus' size={30} />
    </TouchableOpacity>
  };
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    marginLeft: 10
  },
  icon: {
    fontSize: 50,
    marginRight: 10
  }
});

export default Dashboard;