import moment from 'moment'

export const today = () => moment().startOf('day')
export const yesterday = () => moment().startOf('day').subtract(1, 'days')
