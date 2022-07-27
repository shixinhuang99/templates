export function loop<T>(callback: () => T, count: number): T[] {
  const data: T[] = []
  for (let i = 0; i < count; i++) {
    data.push(callback())
  }
  return data
}
