/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-escape */
import moment from 'moment';

export function nestedObjectStrToValue(str: string, scope: any) {
  const keys = str.split(/[\.\[\]'"]/).filter((e) => e);
  let storage = scope;
  try {
    keys.forEach((key: string) => (storage = storage[key]));
    if (
      storage === undefined ||
      (Object.keys(storage).length === 0 && storage.constructor === Object)
    ) {
      return 'undefinedGlobal.formated';
    } else if (Object.prototype.toString.call(storage) === '[object Object]') {
      return 'undefinedGlobal.formated';
    } else {
      return valueFormated(keys, storage);
    }
  } catch (e) {
    return 'undefinedGlobal.formated';
  }
}

function valueFormated(keys: Array<string>, storage: any) {
  switch (`${keys}`) {
    case 'createdAt':
      return moment(storage).format('DD MMM YYYY');
    case 'cost':
    case 'budget,cost':
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(storage);
    default:
      return storage;
  }
}
