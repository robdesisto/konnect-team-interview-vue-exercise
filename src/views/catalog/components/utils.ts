/**
 * Defined a standalone function for portability and testability
 */
export function truncate (input: string, max: number): string {
  return input.length <= max ? input : `${input.substr(0, max)}...`
}
