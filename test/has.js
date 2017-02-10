import test from 'ava'
import LinkedList from '../index'

test.beforeEach(t => {
  t.context.list = new LinkedList()
})

test('return true if the item is in the list', t => {
  let { list } = t.context
  list.insert('foo')
  let res = list.has('foo')
  t.true(res)
})

test('return false if the item is not in the list', t => {
  let { list } = t.context
  list.insert('foo')
  let res = list.has('bar')
  t.false(res)
})

test('return false on empty list', t => {
  let { list } = t.context
  let res = list.has('foo')
  t.false(res)
})
