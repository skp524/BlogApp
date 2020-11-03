import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CreateBlogPost from '../screens/CreateBlogPost';
import Dashboard from '../screens/Dashboard';
import EditBlogPost from '../screens/EditBlogPost';
import ShowBlogPost from '../screens/ShowBlogPost';

const AppRouter = createStackNavigator({
  Dashboard: {
    screen: Dashboard
  },
  ShowBlogPost: {
    screen: ShowBlogPost
  },
  CreateBlogPost: {
    screen: CreateBlogPost
  },
  EditBlogPost: {
    screen: EditBlogPost
  }
});
export default createAppContainer(AppRouter);