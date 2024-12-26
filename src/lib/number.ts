export function englifyNumber(number: string | number): string {
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

export function persianizeNumber(number: string | number): string {
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