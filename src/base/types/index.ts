export type RequireLeastOne<
  T extends object,
  K extends keyof T = keyof T,
> = T & { [P in K]: T[K] };

export type Values<T> = T[keyof T];
