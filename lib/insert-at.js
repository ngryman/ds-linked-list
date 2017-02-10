import Node from './node'

export default function insertAt(list, k, item) {
  let p = list.head, i = 0
  while (p && i < k - 1) {
    i++
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
