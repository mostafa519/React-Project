import { applyMiddleware, legacy_createStore as createStore} from 'redux'  
import favoritesReducer from '../Reducers/movies'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


 const store=  createStore(favoritesReducer,composeWithDevTools(applyMiddleware(thunk)))

 export default store