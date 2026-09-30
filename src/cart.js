export function cartTotal(items, options) {
  // Without this, an empty cart would still be charged shipFee.
  if (items.length === 0) return 0

  let subtotal = 0
  for (const item of items) {
    assertValidItem(item)
    subtotal += item.price * item.qty
  }

  const { vatRate, freeShipFrom, shipFee } = options
  const vat = subtotal * vatRate
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee

  // Rounding only the final sum keeps per-step rounding errors from adding up.
  return Math.round(subtotal + vat + shipping)
}

function assertValidItem({ name, price, qty }) {
  if (price < 0) {
    throw new RangeError(
      `Item "${name}": price must not be negative, got ${price}`,
    )
  }
  if (!Number.isInteger(qty) || qty <= 0) {
    throw new RangeError(
      `Item "${name}": qty must be a positive integer, got ${qty}`,
    )
  }
}
