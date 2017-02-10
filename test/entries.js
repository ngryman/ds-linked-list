import test from 'ava'
import LinkedList from '../index'

test.beforeEach(t => {
  t.context.list = new LinkedList()
})

test('return an array of entries', t => {
  let { list } = t.context
  list.insert('foo')
  list.insert('bar')
  let res = list.entries()
  t.deepEqual(res, ['foo', 'bar'])
})
