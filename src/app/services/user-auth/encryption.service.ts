import * as JSEncrypt from 'node-jsencrypt';
import { Injectable } from "@angular/core";

@Injectable()
export class EncryptionService {
  private publicKey = `
        -----BEGIN PUBLIC KEY-----
        MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIPo7I6xl23QYfacGDq/
        wuJjKQJjBbiWEClbGcUk28mfzBSQddHgqFHV7NcUJ/
        Rhv5oACI5Qt2C1fAiI45Zdim8CAwEAAQ==
        -----END PUBLIC KEY-----`;

  private encrypt(str: string): string {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(this.publicKey);
    return encrypt.encrypt(str)
  }

  public encryptPassword(password: string): string {
    return this.encrypt(password);
  }
}
