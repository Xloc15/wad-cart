// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options) {
  if (items.length === 0) return 0
 
  // Validate each item and accumulate the subtotal in one pass.
  let subtotal = 0
  for (const { price, qty } of items) {
    if (!Number.isFinite(price) || price < 0) {
      throw new RangeError(`Invalid price: ${price}`)
    }
    if (!Number.isInteger(qty) || qty <= 0) {
      throw new RangeError(`Invalid qty: ${qty}`)
    }
    subtotal += price * qty
  }
 
  const { vatRate, freeShipFrom, shipFee } = options
 
  const vat = subtotal * vatRate
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee
 
  // Round once, at the end, to the whole đồng.
  return Math.round(subtotal + vat + shipping)
}
