export const debounce = (functionRef: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => functionRef.apply(this, args), delay)
  }
}
