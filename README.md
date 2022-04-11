# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @itsyurika/lotide`

**Require it:**

`const _ = require('@itsyurika/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual`: Asserts strict equality of actual array and expected array
- `assertEqual`: Asserts strict equality of actual and expected primitive value
- `assertObjectsEqual`: Asserts strict equality of actual and expected
- `countLetters`: Counts occurances of each alphabet in a given string
- `countOnly`: Counts occurances of specific element(s)
- `eqArrays`: Checks strict equality of two arrays
- `eqObjects`: Checks strict equality of two objects
- `findKey`: Returns the first key for which the callback returns a truthy value from an object
- `findKeyByValue`: Searches for a key on an object that matches a given value
- `flatten`: Given a single nested array, flattens into a single-level array
- `head`: Retrieves the first element of argument array
- `letterPositions`: Returns all the indices of each character in string
- `map`: Iterates over given array and applies given callback function
- `middle`: Retrieves middle element of an array, two elements if even number of elements
- `tail`: Retrieves every element except the head of the array
- `takeUntil`: Collects itesm from a provided array until the callback provided returns a truthy value
- `without`: Returns an array after removing unwanted elements
