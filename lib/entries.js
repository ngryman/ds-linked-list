export default function entries(list) {
  let p = list.head, array = []
  while (p) {
    array.push(p.value)
    p = p.next
  }
  return array
}
