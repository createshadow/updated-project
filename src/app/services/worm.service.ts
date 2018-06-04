import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import * as JSEncrypt from 'node-jsencrypt';

@Injectable()
export class WormService {
  constructor(
    private _http: HttpClient,
    private applicationType,
  ) {
    this.applicationType = applicationType;
}

  private token: string = '';
  private publicKey: string =
    '    -----BEGIN PUBLIC KEY-----' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA49BM8p3tbAG36XhSke3z' +
    'K11DR0OSMb/xMR0fuOMg9PplwaWOJp2RrJchbwlrvZhslc2GTNaXWaMaefXhgSbw' +
    'FUxBEx2RaLFoageJ98WGmYv3VtYMMU9wxjbjFPH/fZC8mI+kBaqCdpADuSPA5YkO' +
    'TMH1Kl2QcL2Y/vu4TgjVRm9x+xWlwhDX3y4PWg0rky9i5CUkSFE8eA3X+YAWKzoM' +
    'EYQSk0K1YPsVmx/21a5/5XoH8yzzYkV27oLrLGT4dWwyyh/VaSsHekZkcrz4/6yZ' +
    'KWFFGm/KUUN0M2ySGfyONKHERPr4WN02H8558V6G1h0faoG/8QmYAvZ8SVZBjgXC' +
    'FQIDAQAB' +
    '-----END PUBLIC KEY-----';

  private encryptor = new JSEncrypt().setPublicKey(this.publicKey);

  private credentials = {
    username: 'ekassa',
    password: this.encryptor.encrypt('ekassa')
  };


    private API_ROOT_URL: string = 'https://wurmie.com';

    public login(){
      const credentials = this.credentials;
      this._http.post(this.API_ROOT_URL + '/auth/login', { credentials })
        .subscribe(res => {
          this.token = res.data.token;
      })
    };


    public loginBank(user) {
      const headers = {
        'Authorization': 'Bearer ' + this.token,
        'bank-type': user['selectedBank'].type,
        'environment': this.applicationType,
        "type": "pesel",
        "id": user.pesel
      };
      const data = {
        "number": user.number,
        "password": user.password
      };
      this._http.post(this.API_ROOT_URL + '/bank/login',{ data, headers: headers }).subscribe(res => {
          console.log('worm login result');
          console.log(res);
          return res;
        },
        (error) => error);
    }

    public getSupportedBanks() {
      const headers = { 'Authorization': 'Bearer ' + this.token };
      this._http.get(this.API_ROOT_URL + '/bank/info', { headers: headers }).subscribe(res => res.data);
    }


    public getSchema(bankType) {
      const headers = {
        'Authorization': 'Bearer ' + this.token,
        'bank-type': bankType
      };
      this._http.get(this.API_ROOT_URL + '/bank/schema',{ headers: headers }).subscribe(schema => schema.data);
    }

    public verifyBank(user) {
      const headers = {
        'Authorization': 'Bearer ' + this.token,
          'bank-type': user['selectedBank'].type,
          'environment': this.applicationType
      };
      const data = {
        "number": user.number,
        "password": user.password,
        "type": "pesel",
        "id": user.pesel,
        "source": "ekassa.pl",
        "accounts": [
          user.account
          ],
        "nameToVerify": user.firstName + " " + user.lastName,
        "misc": {
          "firstName": user.firstName,
          "lastName": user.lastName,
          "account": user.account,
          "businessKey": user.businessKey,
          "user_identification": user.pesel
        },
        "instantorView": true
      };
      this._http.post(this.API_ROOT_URL + '/bank/defer',{ data, headers }).subscribe(res => {
          console.log('worm verification result');
          console.log(res);
          return res;
        },
        (error) => error);
    }

}
