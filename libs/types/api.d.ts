// API common response structure
export type ApiResponse<T> = {
  code: number
  data: T
  message?: string
}
