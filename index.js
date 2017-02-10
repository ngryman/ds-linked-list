import insert from './lib/insert'
import insertAfter from './lib/insert-after'
import insertAt from './lib/insert-at'
import remove from './lib/remove'
import has from './lib/has'
import at from './lib/at'
import entries from './lib/entries'
import inspect from './lib/inspect'
import iterator from './lib/iterator'

export default class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  /**
   * Insert an item at the end of the list.
   *
   * @example
   * list.insert(1)
   * list.insert('foo')
   * list.insert({ foo: 'bar' })
   *
   * @param {*} item
   */
  insert(item) {
    insert(this, item)
  }

  /**
   * Insert an item after another one.
   *
   * @example
   * list.insertAfter(1, 2)
   * list.insert('foo', 'bar')
   * list.insert(ref, { baz: 'qux' })
   *
   * @param {*} ref
   * @param {*} item
   */
  insertAfter(ref, item) {
    insertAfter(this, ref, item)
  }

  /**
   * Insert an item at the given index.
   *
   * @example
   * list.insertAt(1, 2)
   * list.insert(1, 'bar')
   * list.insert(1, { baz: 'qux' })
   *
   * @param {Number} k
   * @param {*} item
   */
  insertAt(k, item) {
    insertAt(this, k, item)
  }

  /**
   * Remove an item.
   *
   * @example
   * list.remove(1)
   * list.remove('foo')
   * list.remove({ foo: 'bar' })
   *
   * @param {*} item
   */
  remove(item) {
    remove(this, item)
  }

  /**
   * Return `true` if the item is in the list.
   *
   * @example
   * list.has(1)
   * // => true
   * list.has('foo')
   * // => true
   * list.has(null)
   * // => false
   *
   * @param {*} item
   * @return {Boolean}
   */
  has(item) {
    return has(this, item)
  }

  /**
   * Return the item at the given index or `-1`.
   *
   * @example
   * list.at(0)
   * // => 1
   * list.at(1)
   * // => 'foo'
   * list.at(1337)
   * // => undefined
   *
   * @param {Number} k
   * @return {*}
   */
  at(k) {
    return at(this, k)
  }

  /**
   * Return an array containing all the items.
   *
   * @example
   * list.entries()
   * // => [ 1, 'foo', { foo: 'bar' }]
   *
   * @return {Array}
   */
  entries() {
    return entries(this)
  }

  /**
   * Return a string representation of the list.
   *
   * @example
   * list.entries()
   * // => [ 1, 'foo', { foo: 'bar' }]
   *
   * @return {String}
   */
  inspect() {
    return inspect(this)
  }

  /**
   * Return the number of items in the list.
   *
   * @example
   * list.length()
   * // => 3
   *
   * @return {Number}
   */
  get length() {
    return this.size
  }

  /**
   * Iterate over the list.
   *
   * @example
   * for (let item of list) {
   *   console.log(item)
   * }
   * // => 1
   * // => 'foo'
   * // => { foo: 'bar' }
   */
  * [Symbol.iterator]() {
    yield* iterator(this)
  }
}