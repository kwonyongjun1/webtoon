import React from 'react';
import { useSelector } from 'react-redux';
import { weeksList, serviceList, webtoonActions, searchParam, loading } from '@/features/webtoon/webtoonSlice';
import { fetchWebtoonList } from '@/features/webtoon/webtoonActions';
import { useAppDispatch } from '@/features/hooks';
import { week } from '@/types';
/**
 * 요일 목록 컴포넌트
 * @returns
 */
export function Weeks() {
    const dispatch = useAppDispatch();
    const weeks = useSelector(weeksList);
    const service = useSelector(serviceList);
    const param = useSelector(searchParam);

    const getServiceParam = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const service = e.target.value;
        dispatch(webtoonActions.setSearchParamService(service));
        dispatch(fetchWebtoonList());
    };

    const getWeekParam = (week: week) => {
        dispatch(webtoonActions.setSearchParamUpdateDay(week.key));
        dispatch(webtoonActions.setPage(1));
        dispatch(fetchWebtoonList());
    };

    return (
        <div className="col-span-8 space-x-8 lg:mt-0 mt-4 justify-left flex items-center text-center mx-auto h-24 p-14">
            {weeks.map((item) => (
                <div
                    className="relative text-gray-400  font-medium transition-all duration-200 hover:text-white cursor-pointer"
                    key={item.key}
                    onClick={() => getWeekParam(item)}
                    // className={`${item.key == param.updateDay ? 'active' : ''}`}
                >
                    {item.key}
                </div>
            ))}
        </div>
        // <div className="weekList">
        //     <ul>

        //     </ul>
        //     <select onChange={getServiceParam}>
        //         {service.map((item, index) => (
        //             <option key={index} value={item.toString()}>
        //                 {' '}
        //                 {item}
        //             </option>
        //         ))}
        //     </select>
        // </div>
    );
}