import fetch from '../utils/utils'

export const getData = (crad_no = '', name = '') => fetch('POST', '/libmg/core/listCardInfor.action', {
  crad_no: crad_no,
  name: name
})
