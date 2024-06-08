
export class Identifier {
  constructor(namespace, path) {
    this.namespace = namespace;
    this.path = path;
  }

  static fromString(namespace, path) {
    if (path == undefined) {
      if (namespace instanceof Identifier) {return namespace}
      var namespace2, path2;
      [namespace2, path2] = namespace.toString().split(":");
      if (!path2) {
        return new Identifier("minecraft", namespace);
      }
      return new Identifier(namespace2, path2);
    }
    return new Identifier(namespace, path2);
  }

  match(other) {
    if (other instanceof Identifier) {
      return this.namespace === other.namespace && this.path === other.path;
    }
    return this.match(Identifier.fromString(other));
  }

  toString() {
    return this.namespace + ":" + this.path;
  }
}