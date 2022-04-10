/**
 * Simple util fn to do a tiny bit of math
 */
export function getBoundaries (offset: number, max: number): [number, number] {
  const start = (offset - 1) * max
  const end = offset * max

  return [start, end]
}
