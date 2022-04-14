/**
 * Simple util fn to do a tiny bit of math.
 * Use -1 as a default total so that I don't have to deal with 0 being falsy
 */
export function getBoundaries (offset: number, per: number, total = -1): [number, number] {
  const start = (offset - 1) * per
  const end = offset * per

  return [start, total > -1 && end > total ? total : end]
}
