import util from 'util'
import entries from './entries'

export default function inspect(list) {
  return util.inspect(entries(list))
}
