import { Identifier } from "../classes/Identifier";
import { Item } from "../classes/Item";

var ITEMS = [];
export function registerItems(items) {
  for (const item of items) {
    if (item) {
      ITEMS.push(Item.fromJson(item));
    }
  }
}
export function getItems() {
  return ITEMS;
}
export function getItem(id) {
  const ID = Identifier.fromString(id);
  var item = getItems().find((item) => item.id.match(ID));
  if (!item) {
    console.warn(`Unknown item '${ID}'`);
    return Item.unknown();
  }
  return item;
}

var LINKS = [];
export function registerLinks(links) {
  for (const link of links) {
    if (link) {
      LINKS.push(link);
    }
  }
}
export function getLinks() {
  return LINKS;
}
export function getLink(item) {
  const link = getLinks().find((e) => e.namespace === item.id.namespace);
  if (!link) {
    return undefined;
  }
  return link.pattern
    .replace(":name", item.cleanName().replace(/[\s-]/g, "_"))
    .replace(":id", item.id)
    .replace(":ref", item.cleanName().replace(/[\s_]/g, "-"));
}

export function renderFormatting(text) {
  if (!text) {
    return "";
  }
  return text
    .toString()
    .replace("\n", "")
    .replace("\t", "&nbsp;")
    .split("§")
    .map((part, index) => {
      if (index === 0) {
        return part;
      }
      const code = part.charAt(0);
      const content = part.substring(1);
      if (code === "r") {
        return `</span>${content}`;
      }
      return `<span class="format-${code}">${content}`;
    })
    .join("");
}
export function registerFile(obj) {
  if (obj.links) {
    registerLinks(obj.links);
  }
  if (obj.items) {
    registerItems(obj.items);
  }
}
export function createRecipeId(output) {
  if (output instanceof Item) {
    return output.id.path.replace(/_/g, "-");
  }
  return Identifier.fromString(output).path.replace(/_/g, "-");
}
