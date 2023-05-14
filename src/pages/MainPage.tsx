import React, { useEffect} from 'react';
import { WeekList } from '../components/WeeksList';
import { WebtoonList } from '../components/WebtoonList';
import { useAppDispatch } from '../features/hooks';
import {fetchWebtoonList} from '../features/webtoon/webtoonActions'
import { searchParam } from '../features/webtoon/webtoonSlice'
import { useSelector } from "react-redux";

const Main = () => {

  const dispatch = useAppDispatch();
  const param = useSelector(searchParam)
  useEffect(()=>{
    dispatch(fetchWebtoonList(param))
  },[]);


  return (
    <div>
      <div>
        <div>
            슬라이드 
        </div>
        <div>
          <WeekList/>
        </div>
        <div>
          <WebtoonList/>
        </div>
      </div>
    </div>
  );
}

export default Main;
