export default function * iterator(list) {
  let p = list.head
  while (p) {
    yield p.value
    p = p.next
  }
}
