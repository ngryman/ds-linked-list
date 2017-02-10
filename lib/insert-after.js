import Node from './node'

export default function insertAfter(list, ref, item) {
  let p = list.head
  while (p && p.value !== ref) {
    p = p.next
  }
  if (p) {
    let node = new Node(item)
    if (p === list.tail) {
      list.tail.next = node
      list.tail = node
    }
    else {
      node.next = p.next
      p.next = node
    }
    list.size++
  }
}
