import clsx from "clsx"
import type { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const jn = (...parts: string[]) => ({ className: parts.join(" ") })
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
export const ccn = (...inputs: ClassValue[]) => ({ className: cn(inputs) })

type CCNSSInput = Record<string, ClassValue | ClassValue[]>

export class CCNStyleSheet {
  [x: string]: { className: string }

  constructor(styleSheet: CCNSSInput) {
    for (const rule in styleSheet) {
      const value = styleSheet[rule]
      const isArray = Array.isArray(value)

      this[rule] = isArray ? ccn(...value) : ccn([value])
    }
  }
}

export class CNStyleSheet {
  [x: string]: string

  constructor(styleSheet: CCNSSInput) {
    for (const rule in styleSheet) {
      const value = styleSheet[rule]
      const isArray = Array.isArray(value)

      this[rule] = isArray ? cn(...value) : cn([value])
    }
  }
}

type JNSSInput = Record<string, string | string[]>

export class JNStyleSheet {
  [x: string]: { className: string }

  constructor(styleSheet: JNSSInput) {
    for (const rule in styleSheet) {
      const value = styleSheet[rule]
      const isArray = Array.isArray(value)

      this[rule] = isArray ? jn(...value) : jn(value)
    }
  }
}
