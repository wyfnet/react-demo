//创建store
import {
  createStore,
  combineReducers
} from 'redux';
import loginReducer from '../reducer/loginReducer';

const reducers = combineReducers({
  loginStatus: loginReducer //这里的属性名loginStatus对应于connect取出来的属性名
});

const store = createStore(reducers);

export default store;