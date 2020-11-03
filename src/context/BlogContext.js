import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogPost':
      return [...state, {
        id: Math.floor(Math.random() * 9999),
        title: action.payload.title,
        content: action.payload.content
      }];
    case 'editBlogPost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost
      });
    case 'delete_blogPost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
}

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogPost', payload: { title, content } });
    callback();
  };
};

const editBlogPost = dispatch => {
  return (id, title, content, callback) => {

    console.log(id, title, content);
    dispatch({ type: 'editBlogPost', payload: { id, title, content } });
    callback();
  };
};

const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch({ type: 'delete_blogPost', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, editBlogPost, deleteBlogPost },
  []
);