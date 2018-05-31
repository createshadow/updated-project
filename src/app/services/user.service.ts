import { Inject, Injectable, Optional } from "@angular/core";

@Injectable()
export class UserService {
  constructor() { }

  public
}

function encryptCredentials(user) {
  return {
    login: user.phone,
    encodedPassword: encryptionService.encrypt(user.password)
  }
}
