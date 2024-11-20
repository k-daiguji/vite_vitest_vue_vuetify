import type { Component } from "vue";

export class Detail {
  private readonly _title;
  private readonly _body;

  private constructor(title: string, body: Component) {
    this._title = title;
    this._body = body;
  }

  public static create(title: string, body: Component) {
    return new Detail(title, body);
  }

  public get title() {
    return this._title;
  }

  public get body() {
    return this._body;
  }
}
