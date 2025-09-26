export interface Validator {
  validate: (value: string) => true | never;
}
