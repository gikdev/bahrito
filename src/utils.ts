function englifyNumber(number: string | number): string {
  return String(number)
    .replaceAll("۰", "0")
    .replaceAll("۱", "1")
    .replaceAll("۲", "2")
    .replaceAll("۳", "3")
    .replaceAll("۴", "4")
    .replaceAll("۵", "5")
    .replaceAll("۶", "6")
    .replaceAll("۷", "7")
    .replaceAll("۸", "8")
    .replaceAll("۹", "9")
    .replaceAll("/", ".")
}

function persianifyNumber(number: string | number): string {
  return String(number)
    .replaceAll("0", "۰")
    .replaceAll("1", "۱")
    .replaceAll("2", "۲")
    .replaceAll("3", "۳")
    .replaceAll("4", "۴")
    .replaceAll("5", "۵")
    .replaceAll("6", "۶")
    .replaceAll("7", "۷")
    .replaceAll("8", "۸")
    .replaceAll("9", "۹")
    .replaceAll(".", "/")
}

function priceToToman(price: number | string): string {
  let _price = price
  _price = Number(_price)
  _price = Math.round(_price / 10)
  _price = persianifyNumber(_price)
  _price = addCommaToPrice(_price)

  return _price
}

function addCommaCore(basePrice: number | string): string {
  const splittedPrice = reverseString(basePrice)
    .split(/(.{3})/)
    .filter(x => x)
  const result = splittedPrice
    .map(reverseString)
    .reverse()
    .map((part, i) => (i === splittedPrice.length - 1 ? part : `${part},`))
    .join("")
  return result
}

function addCommaToPrice(price: string | number, decimalsLimit: boolean | number = false) {
  const _price = price.toString()
  // if the number has been splitted into 2 parts it means that it has decimals
  const hasDecimals = _price.split("/").length > 1
  const base = hasDecimals ? _price.split("/").at(0) : _price

  // if there's no decimal OR there's decimalLimit OR it's 0 return the base (without decimals)
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  if (!hasDecimals || decimalsLimit === true || decimalsLimit === 0) return addCommaCore(base!)

  const decimals = (() => {
    let _decimals = _price.split("/").at(-1)
    // if there's a limit, round decimals
    if (decimalsLimit) _decimals = _decimals?.slice(0, decimalsLimit)
    return _decimals
  })()
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  return `${addCommaCore(base!)}/${decimals}`
}

function reverseString(input: string | number): string {
  return input.toString().split("").reverse().join("")
}

export { persianifyNumber, englifyNumber, priceToToman }
