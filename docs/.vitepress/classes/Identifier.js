export class Identifier {
  constructor(t, e) {
    (this.namespace = t), (this.path = e);
  }
  static fromString(t, e) {
    var i, n;
    return null == e
      ? t instanceof Identifier
        ? t
        : (([i, n] = t.toString().split(":")), n ? new Identifier(i, n) : new Identifier("minecraft", t))
      : new Identifier(t, n);
  }
  match(t) {
    return t instanceof Identifier
      ? this.namespace === t.namespace && this.path === t.path
      : this.match(Identifier.fromString(t));
  }
  toString() {
    return this.namespace + ":" + this.path;
  }
}
