import { map } from 'ramda'; 
import { all, fork } from "redux-saga/effects";
import articleSaga from "./sagas/articleSaga";
import boardSaga from "./sagas/boardSaga";
import commentSaga from "./sagas/commentSaga";
import codeSaga2 from "./sagas/codeSaga2";

 let combineSagas = {};
 combineSagas = Object.assign(combineSagas, { articleSaga, boardSaga, commentSaga, codeSaga2 });//board saga는 객체형태로 줘야함
 
 export default function* rootSaga() { 
     yield all(map(fork, combineSagas));
     }
