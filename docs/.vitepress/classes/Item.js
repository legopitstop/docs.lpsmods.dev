import { Identifier } from "./Identifier";
import { renderFormatting, getLink } from "../theme/mcui";
export class Item {
  constructor(A, t, i, e, n = [], p = {}) {
    (this.id = A),
      (this.name = t),
      (this.link = e),
      (this.texture =
        i ||
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAt1BMVEX/AP//AP//AP/9AP0fAB8AAAABAAEAAAD/AP/9AP0fAB8BAAH/AP/+AP4YABgBAAH/AP/+AP4WABYBAAH+AP4XABcBAAH+AP4XABf/AP//AP/+AP4YABgBAAEAAAD/AP/+AP4ZABkDAAP+AP4SABL+AP4UABT+AP7+AP7+AP7+AP7+AP70APRXAFcUABQYABgXABcXABcXABceAB4VABUXABcSABJYAFj0APT+AP7+AP7+AP79AP2J1Tm8AAAAAWJLR0QF+G/pxwAAAAd0SU1FB+EJDhcOFGEzO8MAAAAJdnBBZwAAACIAAAAiAPgEXxQAAADzSURBVDjL1dDZkoIwEAXQy3IBBQVFUVHcd8d9G5f//64pCy0yqQrv3n5LnaTTDWTRdMAwSctmFojAAQpF0lUCDyiVSV8JAqBSJcM8UKuTUR5oNL8SaFlaMdDukEnXzgLd8YJ34h7QH5DDJEoT+q4FKaMx/0cGk6kMjMKsMm8sXtVejlY/681429k1X7WvHoomzGP5VE8PzoPL9Po7ufXv6YXao/Q0IL24WclNJXC5ycBy/fA9VTIkt0ugF38G9xwdwk66CXm+A3FL2J7Ywo7I3QIINMUfvgbs53kgJE+PPOCThxngKYFLHp+AowQWaRqALoI/Q50gLzlZBxIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDktMTVUMDE6MTQ6MjArMDI6MDDBw4POAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA5LTE1VDAxOjE0OjIwKzAyOjAwsJ47cgAAAABJRU5ErkJggg=="),
      (this.lore = n),
      (this.properties = p);
  }

  static unknown() {
    return new Item(
      Identifier.fromString("unknown"),
      "Unknown",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACdQTFRFuYVclmxKeVU6WT0pRywbQDcwKxkPOiMVWDYhbGxsMywnh4eHdFhECa/XGwAAAL9JREFUeJxtkWEVgzAMhA8JZ+Es1AIWNguVABKYhCEBLGChFmIhFpbwcyF9zev72l56zQTGsEx0mGwqQC6HGHGZUagAAseCvHASQxVw68twT1m1D/kA6IvF4dDexi6vQLQQFOCYecIqiLL4dhhkm+/0ChTrtOYvG5FRASPTmbqWBiq47RMzTqTyI2CWnLWjGY5eQYrezlaQdtv/A2GOSXCH4QE4cby9tWu0/MgKokND9FlrbvkjyA58e74/Jgv4AT2kq1H8sjU9AAAAAElFTkSuQmCC"
    );
  }

  static fromJson(A) {
    return new Item(
      Identifier.fromString(A.id),
      A.name,
      A.texture,
      A.link,
      A.lore,
      A.properties
    );
  }

  match(A) {
    return A instanceof Item && this.id.match(A.id);
  }

  hasProperty(id) {
    return this.properties != undefined || id in this.properties;
  }

  getProperty(id, defaultValue = undefined) {
    const v = this.properties[id];
    if (v === undefined) {
      return defaultValue;
    }
    return v;
  }

  toString() {
    return this.id.toString();
  }

  cleanName() {
    return (
      this._cleanName || (this._cleanName = this.name.replace(/§./g, "")),
      this._cleanName
    );
  }

  getDisplayName() {
    return (
      this.displayName || (this.displayName = renderFormatting(this.name)),
      this.displayName
    );
  }

  getMinetip() {
    if (!this.minetip) {
      this.minetip = this.getDisplayName() + "<br>";
      var A = [];
      if (this.lore) for (const t of this.lore) A.push(renderFormatting(t));
      A.push('<span class="format-8">' + this.id.toString() + "</span>"),
        (this.minetip += A.join("<br>"));
    }
    return this.minetip;
  }

  getLink() {
    if (!this.link) {
      var A = getLink(this);
      this.link = A || "#" + this.id.path;
    }
    return this.link;
  }

  getLinkTarget() {
    return (
      this.linkTarget ||
        (this.linkTarget = this.getLink().startsWith("http")
          ? "_blank"
          : "_self"),
      this.linkTarget
    );
  }
}
