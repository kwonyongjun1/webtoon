import { createSlice } from '@reduxjs/toolkit'
import { fetchWebtoonList, fetchSearchList} from './webtoonActions'
import { RootState } from '../store'

/**
 * 웹툰 정보 state
 */

interface initialState{
  weeks : Array<{
    key : String ,
    value : String 
  }>,
  service : Array<String>,
  webtoonList : Array<Object>,
  searchList : Array<Object>,
  error: any,
  searchParam: {
    page: number,
    perPage : number,
    service : String,
    updateDay : String
  },
  selectedWeek : String
}

const initialState: initialState = {
  weeks : [ {key: "mon" ,value : "월"}, 
            {key: "tue" ,value : "화"},
            {key: "wed" ,value : "수"},
            {key: "thu" ,value : "목"},
            {key: "fri" ,value : "금"},
            {key: "sat" ,value : "토"},
            {key: "sun" ,value : "일"}],
  service : ["naver", "kakao", "kakaoPage"],
  webtoonList : [] ,
  searchList : [],
  error : '',
  searchParam : {
    page : 1 ,
    perPage : 20,
    service : 'naver',
    updateDay : 'mon'
  },
  selectedWeek : "월"
}

/**
 * 웹툰 slice
 */
const webtoonSlice = createSlice({
  name: 'webtoon',
  initialState,
  reducers: {
    /**
     * searchParam 설정
     * @param state 
     * @param action 
     */
    setsearchParam: (state,action) =>{
      state.searchParam = action.payload;
    },
    /**
     * searchParam 서비스 설정
     * @param state 
     * @param action 
     */
    setSearchParamService: (state, action) =>{
      state.searchParam.service = action.payload;
    },
    /**
     * searchParam 요일 설정
     * @param state 
     * @param action 
     */
    setSearchParamUpdateDay: (state,action) =>{
      state.searchParam.updateDay = action.payload;
    },
    /**
     * searchParam 다음 페이지 설정
     * @param state 
     */
    setPage: (state,action) =>{
      state.searchParam.page = action.payload;
    },
    /**
     * searchParam 다음 페이지 설정
     * @param state 
     */
    setNextPage: (state) =>{
      state.searchParam.page += 1;
    },
    /**
     * 선택된 요일 설정
     * @param state 
     * @param action 
     */
    setSelectedWeek: (state,action)=>{
      state.selectedWeek = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      /**
       * 요일별 웹툰 검색 
       */
      .addCase(fetchWebtoonList.pending, (state)=>{
        
      })
      .addCase(fetchWebtoonList.fulfilled, (state, action) => {
        if(state.searchParam.page > 1){
          state.webtoonList = [...state.webtoonList, ...action.payload];
        }else{
          state.webtoonList = action.payload;
        }
      })
      .addCase(fetchWebtoonList.rejected, (state,action) => {
        state.error = action.error.message;
      })

      /**
       * 웹툰 검색 
       */
      .addCase(fetchSearchList.pending, (state)=>{
      
      })
      .addCase(fetchSearchList.fulfilled, (state, action) => {
        state.searchList = action.payload;
      })
      .addCase(fetchSearchList.rejected, (state,action) => {
        state.error = action.error.message;
      })
    
  }
})



/**
 * 웹툰 목록
 * @param state 
 * @returns 
 */
export const webtoonList = (state:RootState) => state.webtoon.webtoonList;

/**
 * 검색 목록
 * @param state 
 * @returns 
 */
export const searchList = (state:RootState) => state.webtoon.searchList;

/**
 * 요일 목록
 * @param state 
 * @returns 
 */
export const weeksList = (state:RootState) => state.webtoon.weeks;

/**
 * 서비스 목록
 * @param state 
 * @returns 
 */
export const serviceList = (state:RootState) => state.webtoon.service;

/**
 * 검색 파라미터 목록 
 * @param state 
 * @returns 
 */
export const searchParam = (state:RootState) => state.webtoon.searchParam;

/**
 * 선택된 요일
 * @param state 
 * @returns 
 */
export const selectedWeek = (state:RootState) => state.webtoon.selectedWeek;

export const webtoonActions = webtoonSlice.actions;

export default webtoonSlice.reducer
