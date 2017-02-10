import test from 'ava'
import LinkedList from '../index'

test.beforeEach(t => {
  t.context.list = new LinkedList()
})

test('remove an item at the end', t => {
  let { list } = t.context
  list.insert('foo')
  list.insert('bar')
  list.remove('bar')
  t.is(list.size, 1)
  t.is(list.head.value, 'foo')
  t.is(list.tail.value, 'foo')
})

test('remove an item at the begining', t => {
  let { list } = t.context
  list.insert('foo')
  list.insert('bar')
  list.remove('foo')
  t.is(list.size, 1)
  t.is(list.head.value, 'bar')
  t.is(list.tail.value, 'bar')
})

test('remove a lonely item', t => {
  let { list } = t.context
  list.insert('foo')
  list.remove('foo')
  t.is(list.size, 0)
  t.is(list.head, null)
  t.is(list.tail, null)
})

test('do nothing if the item is not present', t => {
  let { list } = t.context
  list.insert('foo')
  t.notThrows(() => list.remove('bar'))
  t.is(list.size, 1)
  t.is(list.head.value, 'foo')
  t.is(list.tail.value, 'foo')
})

test('do nothing on empty list', t => {
  let { list } = t.context
  t.notThrows(() => list.remove('foo'))
  t.is(list.size, 0)
  t.is(list.head, null)
  t.is(list.tail, null)
})
