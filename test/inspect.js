import test from 'ava'
import LinkedList from '../index'

test.beforeEach(t => {
  t.context.list = new LinkedList()
})

test('inspect a list', t => {
  let { list } = t.context
  list.insert('foo')
  list.insert('bar')
  let res = list.inspect()
  t.is(res, "[ 'foo', 'bar' ]")
})
