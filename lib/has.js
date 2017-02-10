export default function has(list, item) {
  let p = list.head
  while (p && p.value !== item) {
    p = p.next
  }
  return !!p
}
