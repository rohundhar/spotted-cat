
export type ServerResponse<T> = Promise<{
  success: boolean;
  error?: any;
  data: T
}>