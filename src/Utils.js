import moment from 'moment'

export const today = () => moment().startOf('day').format('YYYY-MM-DD')
export const yesterday = () => moment().startOf('day').subtract(1, 'days').format('YYYY-MM-DD')
