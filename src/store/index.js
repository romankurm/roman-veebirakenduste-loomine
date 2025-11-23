
import { createStore } from 'vuex'

export default createStore({
    strict: true,
    
    state: {
           postList:[],
    },
    getters: {
        postsList: state => {
        var postsList = state.postList.map(post => {
                    return {
                        accountName: post.accountName,
                        accountPicture: post.accountPicture,
                        postDate: post.postDate,
                        postImage: post.postImage,
                        postText: post.postText,
                        id: post.id,
                        likes: post.likes,
                    }
                });
                return postsList;
            },
        },
        
    mutations: {
        setData(state, newData) {
            state.postList = newData;
        },
        
    },
  actions: {
    
    }
})