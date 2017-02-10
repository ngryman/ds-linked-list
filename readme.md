<p align="center">
  <img alt="ds-linked-list" src="https://raw.githubusercontent.com/ngryman/artworks/master/ds-linked-list/heading/ds-linked-list@2x.png" width="500">
</p>

<p align="center">
  A simply linked list data structure in JavaScript.
</p>

<p align="center">
  <a href="//travis-ci.org/ngryman/ds-linked-list">
    <img alt="Build Status" src="https://img.shields.io/travis/ngryman/ds-linked-list.svg">
  </a>
  <a href="//codecov.io/github/ngryman/ds-linked-list">
    <img alt="Coverage" src="https://img.shields.io/codecov/c/github/ngryman/ds-linked-list.svg">
  </a>
</p>

* * *

## Install

```bash
yarn add ds-linked-list
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### LinkedList

Class

#### insert

Insert an item at the end of the list.

**Parameters**

-   `item` **any** 

**Examples**

```javascript
list.insert(1)
list.insert('foo')
list.insert({ foo: 'bar' })
```

#### insertAfter

Insert an item after another one.

**Parameters**

-   `ref` **any** 
-   `item` **any** 

**Examples**

```javascript
list.insertAfter(1, 2)
list.insert('foo', 'bar')
list.insert(ref, { baz: 'qux' })
```

#### insertAt

Insert an item at the given index.

**Parameters**

-   `k` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `item` **any** 

**Examples**

```javascript
list.insertAt(1, 2)
list.insert(1, 'bar')
list.insert(1, { baz: 'qux' })
```

#### remove

Remove an item.

**Parameters**

-   `item` **any** 

**Examples**

```javascript
list.remove(1)
list.remove('foo')
list.remove({ foo: 'bar' })
```

#### has

Return `true` if the item is in the list.

**Parameters**

-   `item` **any** 

**Examples**

```javascript
list.has(1)
// => true
list.has('foo')
// => true
list.has(null)
// => false
```

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

#### at

Return the item at the given index or `-1`.

**Parameters**

-   `k` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

**Examples**

```javascript
list.at(0)
// => 1
list.at(1)
// => 'foo'
list.at(1337)
// => undefined
```

Returns **any** 

#### entries

Return an array containing all the items.

**Examples**

```javascript
list.entries()
// => [ 1, 'foo', { foo: 'bar' }]
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

#### inspect

Return a string representation of the list.

**Examples**

```javascript
list.entries()
// => [ 1, 'foo', { foo: 'bar' }]
```

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### length

Return the number of items in the list.

**Examples**

```javascript
list.length()
// => 3
```

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

#### iterator

Iterate over the list.

**Examples**

```javascript
for (let item of list) {
  console.log(item)
}
// => 1
// => 'foo'
// => { foo: 'bar' }
```

## License

MIT © [Nicolas Gryman](http://ngryman.sh)
