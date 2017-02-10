import Node from './node'

export default function insert(list, item) {
  let node = new Node(item)
  if (!list.head) {
    list.head = node
    list.tail = node
  }
  else {
    list.tail.next = node
    list.tail = node
  }
  list.size++
}
