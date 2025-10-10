import { Identifier } from "./Identifier";
import { renderFormatting, getLink } from "../theme/mcui";
import { MISSING_TEXTURE } from "./constants.js";
export class Item {
  constructor(A, t, i, e, n = [], p = {}) {
    (this.id = A),
      (this.name = t),
      (this.link = e),
      (this.icon = i || MISSING_TEXTURE),
      (this.lore = n),
      (this.properties = p);
  }

  static unknown() {
    return new Item(
      Identifier.fromString("unknown"),
      "Unknown",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACdQTFRFuYVclmxKeVU6WT0pRywbQDcwKxkPOiMVWDYhbGxsMywnh4eHdFhECa/XGwAAAL9JREFUeJxtkWEVgzAMhA8JZ+Es1AIWNguVABKYhCEBLGChFmIhFpbwcyF9zev72l56zQTGsEx0mGwqQC6HGHGZUagAAseCvHASQxVw68twT1m1D/kA6IvF4dDexi6vQLQQFOCYecIqiLL4dhhkm+/0ChTrtOYvG5FRASPTmbqWBiq47RMzTqTyI2CWnLWjGY5eQYrezlaQdtv/A2GOSXCH4QE4cby9tWu0/MgKokND9FlrbvkjyA58e74/Jgv4AT2kq1H8sjU9AAAAAElFTkSuQmCC",
    );
  }

  static fromJson(A) {
    return new Item(Identifier.fromString(A.id), A.name, A.icon, A.link, A.lore, A.properties);
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
    return this._cleanName || (this._cleanName = this.name.replace(/§./g, "")), this._cleanName;
  }

  getDisplayName() {
    return this.displayName || (this.displayName = renderFormatting(this.name)), this.displayName;
  }

  getMinetip() {
    if (!this.minetip) {
      this.minetip = this.getDisplayName() + "<br>";
      var A = [];
      if (this.lore) for (const t of this.lore) A.push(renderFormatting(t));
      A.push('<span class="format-8">' + this.id.toString() + "</span>"), (this.minetip += A.join("<br>"));
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
      this.linkTarget || (this.linkTarget = this.getLink().startsWith("http") ? "_blank" : "_self"), this.linkTarget
    );
  }
}
