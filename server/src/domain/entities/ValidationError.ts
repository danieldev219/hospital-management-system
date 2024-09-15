import { StatusCode } from "../../types";

export default class ValidationError extends Error {
  public statusCode: StatusCode
  constructor(message: string, statusCode: StatusCode) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = statusCode
  }
}
