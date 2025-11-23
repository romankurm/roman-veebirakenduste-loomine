
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
                        id: post.id,
                        accountName: post.accountName,
                        accountPicture: post.accountPicture,
                        postDate: post.postDate,
                        postImage: post.postImage,
                        postText: post.postText,
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
            increaseLikes(state, postId) {
                const post = state.postList.find(post => post.id === postId)
                if(post)
                    post.likes++
            },
        decreaseLikes(state) {

            state.postList.forEach(post => {
                post.likes = 0;
            })
        },
        
    },
  actions: {

    }
})