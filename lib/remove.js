export default function remove(list, item) {
  if (!list.head) return
  let p = list.head
  if (p.value === item) {
    list.head = p.next
    if (p === list.tail) {
      list.tail = p.next
    }
    else {
      p.next = null
    }
    list.size--
  }
  else {
    while (p.next && p.next.value !== item) {
      p = p.next
    }
    if (p.next) {
      let found = p.next
      p.next = found.next
      if (found === list.tail) {
        list.tail = p
      }
      else {
        found.next = null
      }
      list.size--
    }
  }
}
