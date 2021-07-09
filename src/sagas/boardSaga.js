import { all, call, fork, put, take } from 'redux-saga/effects';
import { boardActions } from '../slices/boardSlice';
import axios from '../utils/axios';

// api 서버 연결 주소
function apiGetBoard(boardId) {
    return axios.get('boards/$boardId');
}

function apiGetBoardList() {
    return axios.get('boards');
} 

//api서버 연결 후 action 호출
function* asyncGetBoardList() {
    try{
        const response = yield call(apiGetBoardList);
        if (response?.status === 200) {
             yield put(boardActions.getBoardListSuccess(response)); 
            } else {
                 yield put(boardActions.getBoardListFail(response)); }


    }catch(e){
        console.error(e);
        yield put(boardActions.getBoardListFail(e.response));
    }

}

function* watchGetBoardList(){
    while(true){
        yield take(boardActions.getBoardList);
        yield call(asyncGetBoardList);
    }
}

export default function* boardSaga(){
    yield all([fork(watchGetBoardList)]);
}