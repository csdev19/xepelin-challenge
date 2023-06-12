import { LoginPayload } from "@/types/login/login.interface";

export class LocalStorageService {
  setPerson(person: LoginPayload) {
    localStorage.setItem('person', JSON.stringify(person));
  }

  getPerson(): LoginPayload {
    return JSON.parse(localStorage.getItem('person') || '{}');
  }
}