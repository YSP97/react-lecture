import { exact, string, arrayOf, oneOf } from 'prop-types';
import { IMAGE_TYPES, statusMessages } from '../data/learn';

// 추가 프로퍼티에 대한 경고가 있는 객체(shape보다 엄격함)
const ItemType = exact({
  id: string,
  message: string,
});
export const ItemsType = arrayOf(ItemType);

export const ReactLibraryType = exact({
  name: string,
  author: string,
  writtenIn: string,
  type: string,
  license: string,
});

export const StatusMessagesType = arrayOf(oneOf(statusMessages));

export const ImagesTypes = oneOf(IMAGE_TYPES);
