export default function removeAt(list, k) {
  let p = list.head, prev = null, i = 0
  while (p && i < k) {
    i++
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
