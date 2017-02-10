import test from 'ava'
import LinkedList from '../index'

test.beforeEach(t => {
  t.context.list = new LinkedList()
})

test.only('insert an item', t => {
  let { list } = t.context
  list.insert('foo')
  t.is(list.size, 1)
  t.is(list.head.value, 'foo')
  t.is(list.tail.value, 'foo')
})

test('insert an item at the end', t => {
  let { list } = t.context
  list.insert('foo')
  list.insert('bar')
  list.insert('baz')
  t.is(list.size, 3)
  t.is(list.head.value, 'foo')
  t.is(list.head.next.value, 'bar')
  t.is(list.tail.value, 'baz')
})
