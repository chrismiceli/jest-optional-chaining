import {cGetter} from '../app';

test('gets c', () => {
  expect(cGetter({c: 'hi'})).toEqual('hi');
});
