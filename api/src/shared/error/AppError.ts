export class AppError {
  public readonly data?: any;
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400, data?: any) {
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
  }
}
