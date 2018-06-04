import { Injectable } from "@angular/core";

@Injectable()
export class AuthErrorsService {

  private MESSAGES = {
    'userExists': 'Użytkownik z podanym numerem telefonu jest już zarejestrowany',
    'You have invalid credentials': 'Nieprawidłowe hasło',
    'emailExists': 'Użytkownik z tym e-mail jest już zarejestrowany',
    'userNotExists': 'Użytkownik z podanym numerem telefonu nie jest  zarejestrowany',
    'smsIsNotValid': 'podany niepoprawny kod z SMS',
    'amountIsNotValid': 'Nieprawidłowy format sumy. Wprowadź pełną liczbę (np. 200) albo liczbę z groszami rozdzielając kropką (np. 200.11).'
  };

  public getMessage(error) {
    return this.MESSAGES[error];
  }

}
