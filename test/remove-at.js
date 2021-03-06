import test from 'ava'
import LinkedList from '../index'

test.beforeEach(t => {
  t.context.list = new LinkedList()
})

test('remove an item at the end', t => {
  let { list } = t.context
  list.insert('foo')
  list.insert('bar')
  list.insert('baz')
  list.removeAt(2)
  t.is(list.size, 2)
  t.is(list.head.value, 'foo')
  t.is(list.head.next.value, 'bar')
  t.is(list.tail.value, 'bar')
})

test('remove an item at the begining', t => {
  let { list } = t.context
  list.insert('foo')
  list.insert('bar')
  list.removeAt(0)
  t.is(list.size, 1)
  t.is(list.head.value, 'bar')
  t.is(list.tail.value, 'bar')
})

test('remove an item in the middle', t => {
  let { list } = t.context
  list.insert('foo')
  list.insert('bar')
  list.insert('baz')
  list.removeAt(1)
  t.is(list.size, 2)
  t.is(list.head.value, 'foo')
  t.is(list.head.next.value, 'baz')
  t.is(list.tail.value, 'baz')
})

test('remove a lonely item', t => {
  let { list } = t.context
  list.insert('foo')
  list.removeAt(0)
  t.is(list.size, 0)
  t.is(list.head, null)
  t.is(list.tail, null)
})

test('do nothing if the index is out of bounds', t => {
  let { list } = t.context
  list.insert('foo')
  t.notThrows(() => list.removeAt(1337))
  t.is(list.size, 1)
  t.is(list.head.value, 'foo')
  t.is(list.tail.value, 'foo')
})

test('do nothing on empty list', t => {
  let { list } = t.context
  t.notThrows(() => list.removeAt(0))
  t.is(list.size, 0)
  t.is(list.head, null)
  t.is(list.tail, null)
})
