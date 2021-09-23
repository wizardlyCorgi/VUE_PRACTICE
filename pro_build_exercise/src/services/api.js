/* *做api的封装
 * @param https 导入封装好的axios
 *
 */

import https from '../utils/https'
export const getData = function (params) {
  return https.get('/mode2/DataOne', { params })
}
