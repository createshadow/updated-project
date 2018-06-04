import { Injectable } from "@angular/core";

@Injectable()
export class PasswordGeneratorService {

  public generate(length) {
    length = length - 1;
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890";
    let pass = "";

    for (let x = 0; x < length; x++) {
      let i = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(i);
    }

    return pass + '4';
  }

}
