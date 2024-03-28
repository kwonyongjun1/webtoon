import { webtoonInfo } from '@/types';
import { atom } from 'recoil';

const initialWebtoonInfo: webtoonInfo = {
  totalWebtoonCount: 0,
  naverWebtoonCount: 0,
  kakaoWebtoonCount: 0,
  kakaoPageWebtoonCount: 0,
  updatedWebtoonCount: 0,
  createdWebtoonCount: 0,
  lastUpdate: null,
  webtoons: [],
};

export const weekWebtoon = atom({
  key: 'weekWebtoon',
  default: initialWebtoonInfo,
});

export const service = atom({
  key: 'service',
  default: 'naver',
});

export const updateDay = atom({
  key: 'updateDay',
  default: 'mon',
});

export const loading = atom({
  key: 'loading',
  default: false,
});

export const searchValue = atom({
  key: 'searchValue',
  default: '',
});

export const searchService = atom({
  key: 'searchService',
  default: 'ALL',
});

export const naverWebtoonCount = atom({
  key: 'naverWebtoon',
  default: 0,
});

export const kakaoWebtoonCount = atom({
  key: 'kakaoWebtoon',
  default: 0,
});

export const kakaoPageWebtoonCount = atom({
  key: 'kakaoPageWebtoon',
  default: 0,
});

export const darkMode = atom({
  key: 'darkMode',
  default:
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches),
});
