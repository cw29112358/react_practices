import { request } from 'utils/request';

export function getDemo() {
  return request({
    method: 'GET',
    url: '/api/demo',
  });
}
