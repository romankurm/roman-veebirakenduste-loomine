
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
        increaseLikes: state => {
            state.postList.forEach(product => {
                product.price += 1;
            })
        },
        
    },
  actions: {

    }
})