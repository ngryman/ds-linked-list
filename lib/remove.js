export default function remove(list, item) {
  let p = list.head, prev = null
  while (p && p.value !== item) {
    prev = p
    p = p.next
  }
  if (p) {
    if (!prev) {
      list.head = p.next
    }
    else {
      prev.next = p.next
    }
    if (!p.next) {
      list.tail = prev
    }
    else {
      p.next = null
    }
    list.size--
  }
}
