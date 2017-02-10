import test from 'ava'
import LinkedList from '../index'

test.beforeEach(t => {
  t.context.list = new LinkedList()
})

test('return an item at the given index', t => {
  let { list } = t.context
  list.insert('foo')
  list.insert('bar')
  let res = list.at(1)
  t.is(res, 'bar')
})

test('do nothing if the item is not present', t => {
  let { list } = t.context
  list.insert('foo')
  t.notThrows(() => list.at(1))
  t.is(list.at(1), undefined)
})

test('do nothing on empty list', t => {
  let { list } = t.context
  t.notThrows(() => list.at(0))
})
