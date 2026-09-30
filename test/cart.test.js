import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

const OPTIONS = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }

test('the total is a number, not a string', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  assert.equal(typeof cartTotal(items, OPTIONS), 'number')
})

test('an empty cart costs 0: no VAT, no shipping', () => {
  assert.equal(cartTotal([], OPTIONS), 0)
})

test('shipping is free when the subtotal equals freeShipFrom', () => {
  const items = [{ name: 'Tai nghe', price: 500000, qty: 1 }]
  assert.equal(cartTotal(items, OPTIONS), 540000)
})

test('shipping is charged when the subtotal is 1 below freeShipFrom', () => {
  const items = [{ name: 'Tai nghe', price: 499999, qty: 1 }]
  assert.equal(cartTotal(items, OPTIONS), 569999)
})

test('a fractional VAT is rounded to the whole đồng', () => {
  const items = [{ name: 'Bút', price: 12345, qty: 1 }]
  assert.equal(cartTotal(items, OPTIONS), 43333)
})

test('a price of 0 is valid', () => {
  const items = [{ name: 'Quà tặng', price: 0, qty: 1 }]
  assert.doesNotThrow(() => cartTotal(items, OPTIONS))
})

test('a negative price throws RangeError', () => {
  const items = [{ name: 'Bút', price: -1, qty: 1 }]
  assert.throws(() => cartTotal(items, OPTIONS), RangeError)
})

test('a fractional qty throws RangeError', () => {
  const items = [{ name: 'Bút', price: 10000, qty: 1.5 }]
  assert.throws(() => cartTotal(items, OPTIONS), RangeError)
})

test('a qty of 0 throws RangeError', () => {
  const items = [{ name: 'Bút', price: 10000, qty: 0 }]
  assert.throws(() => cartTotal(items, OPTIONS), RangeError)
})

test('a negative qty throws RangeError', () => {
  const items = [{ name: 'Bút', price: 10000, qty: -1 }]
  assert.throws(() => cartTotal(items, OPTIONS), RangeError)
})
