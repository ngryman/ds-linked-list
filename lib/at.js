export default function at(list, k) {
  let p = list.head, i = 0
  while (p && i < k) {
    i++
    p = p.next
  }
  return (p ? p.value : undefined)
}
