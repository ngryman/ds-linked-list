import test from 'ava'
import LinkedList from '../index'

test.beforeEach(t => {
  t.context.list = new LinkedList()
})

test('insert an item after another', t => {
  let { list } = t.context
  list.insert('foo')
  list.insert('bar')
  list.insertAt(1, 'baz')
  t.is(list.size, 3)
  t.is(list.head.value, 'foo')
  t.is(list.head.next.value, 'baz')
  t.is(list.head.next.next.value, 'bar')
  t.is(list.tail.value, 'bar')
})

test('insert an item at the end', t => {
  let { list } = t.context
  list.insert('foo')
  list.insertAt(1, 'bar')
  t.is(list.size, 2)
  t.is(list.head.value, 'foo')
  t.is(list.head.next.value, 'bar')
  t.is(list.tail.value, 'bar')
})

test('do nothing if the index is out of bounds', t => {
  let { list } = t.context
  list.insert('foo')
  t.notThrows(() => list.insertAt(1337, 'baz'))
  t.is(list.size, 1)
  t.is(list.head.value, 'foo')
  t.is(list.tail.value, 'foo')
})

test('do nothing on empty list', t => {
  let { list } = t.context
  t.notThrows(() => list.insertAt(0, 'bar'))
  t.is(list.size, 0)
  t.is(list.head, null)
  t.is(list.tail, null)
})
