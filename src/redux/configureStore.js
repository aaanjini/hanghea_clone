import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user"; //user의 리듀서
import Post from "./modules/post"; //image의 리듀서
import Image from "./modules/image"; //image의 리듀서

export const history = createBrowserHistory();
const rootReducer = combineReducers({ //우리가 만든 리듀서 뭉치기
    user:User,
    post:Post,
    image:Image,
    router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({history: history})]; //내가 사용할 미들웨어 넣기위해 배열형태

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === "development") { //개발환경일 때
  const { logger } = require("redux-logger"); //require : 패키지 가져오는 거
  middlewares.push(logger);
}

//redux davTools 설정
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

//미들웨어 묶기
const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
);

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();