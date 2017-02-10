import test from 'ava'
import LinkedList from '../index'

test.beforeEach(t => {
  t.context.list = new LinkedList()
})

test.only('return the number of items', t => {
  let { list } = t.context
  list.insert('foo')
  list.insert('bar')
  list.insert('baz')
  t.is(list.length, list.size)
  t.is(list.length, 3)
})
