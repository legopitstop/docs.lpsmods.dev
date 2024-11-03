import { Identifier } from "../classes/Identifier";
import { Item } from "../classes/Item";
var ITEMS = [];
export function registerItems(e) {
  for (const t of e) t && ITEMS.push(Item.fromJson(t));
}
export function getAllItems() {
  return ITEMS;
}
export function getItem(e) {
  const t = Identifier.fromString(e);
  var r = getAllItems().find((e) => e.id.match(t));
  return r || Item.unknown();
}
export function getItems(itemId) {
  var items = [];
  itemId.split(",").forEach((item) => {
    items.push(getItem(item));
  });
  return items;
}
var LINKS = [];
export function registerLinks(e) {
  for (const t of e) t && LINKS.push(t);
}
export function getLinks() {
  return LINKS;
}
export function getLink(e) {
  const t = getLinks().find((t) => t.namespace === e.id.namespace);
  if (t)
    return t.pattern
      .replace(":name", e.cleanName().replace(/[\s-]/g, "_"))
      .replace(":id", e.id)
      .replace(":ref", e.cleanName().replace(/[\s_]/g, "-"));
}
export function renderFormatting(e) {
  return e
    ? e
        .toString()
        .replace("\n", "")
        .replace("\t", "&nbsp;")
        .split("§")
        .map((e, t) => {
          if (0 === t) return e;
          const r = e.charAt(0),
            n = e.substring(1);
          return "r" === r ? `</span>${n}` : `<span class="format-${r}">${n}`;
        })
        .join("")
    : "";
}
export function registerFile(e) {
  e.links && registerLinks(e.links), e.items && registerItems(e.items);
}
export function createRecipeId(e) {
  return e instanceof Item
    ? e.id.path.replace(/_/g, "-")
    : Identifier.fromString(e).path.replace(/_/g, "-");
}
