import { UserSafe } from '.'

export class UserDto {
  constructor(private fields: UserSafe) {}

  get id() : number {
    return this.fields.id
  }

  get email() : string {
    return this.fields.email
  }
  set email(_email : string) {
    this.fields.email = _email
  }

  get firstName() : string {
    return this.fields.firstName
  }
  set firstName(_firstName : string) {
    this.fields.firstName = _firstName
  }

  get lastName() : string {
    return this.fields.lastName
  }
  set lastName(_lastName : string) {
    this.fields.lastName = _lastName
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  get values(): UserSafe {
    return this.fields
  }
}
