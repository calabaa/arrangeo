export const API_ERRORS = {
  INVALID_PARAMS: { code: 40001, msg: 'Invalid parameters' },
  AUTH_EXPIRED: { code: 40101, msg: 'Authorization expired' },
} as const

export type ErrorKey = keyof typeof API_ERRORS
export type ErrorPayload<T extends ErrorKey = ErrorKey> = (typeof API_ERRORS)[T]
// type ErrorCode = ErrorPayload['code'] // 40001 | 40101
// type ErrorMessage = ErrorPayload['msg'] // "Invalid parameters" | "Authorization expired"
