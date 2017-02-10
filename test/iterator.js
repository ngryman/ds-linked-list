import test from 'ava'
import LinkedList from '../index'

test.beforeEach(t => {
  t.context.list = new LinkedList()
})

test('iterate over a list', t => {
  let { list } = t.context
  list.insert('foo')
  list.insert('bar')
  list.insert('baz')
  let p = list.head
  for (let val of list) {
    t.is(p.value, val)
    p = p.next
  }
})
