/** Example output "id-m52go7rr-h5a" */
export function randomId() {
  const timestamp = Date.now().toString(36)
  const randomPart = Math.random().toString(36).substring(2, 5)
  const result = `id-${timestamp}-${randomPart}`

  return result
}
