/* Add to @destruc7i0n/three-mcmodel */
import * as THREE from "three";
export class BedrockGeometry extends THREE.Group {
  constructor() {
    super();
  }
  rotateBone(e, t) {
    const r = this.getObjectByName(e);
    r &&
      r.rotation.set(
        t.x * (Math.PI / 180),
        t.y * (Math.PI / 180),
        t.z * (Math.PI / 180)
      );
  }
}
export class BedrockGeoLoader extends THREE.Loader {
  constructor(e) {
    super(e), (this.textures = {});
  }
  load(e, t, r, s, o, i) {
    const n = this,
      a = new THREE.FileLoader(n.manager);
    a.setPath(n.path),
      a.setRequestHeader(n.requestHeader),
      a.setWithCredentials(n.withCredentials),
      a.load(
        e,
        function (o) {
          try {
            s(n.parse(JSON.parse(o), t, r));
          } catch (t) {
            i && i(t), n.manager.itemError(e);
          }
        },
        o,
        i
      );
  }
  parse(e, t, r) {
    const s = this.getGeometry(e, t);
    return (
      (this.texture = new THREE.TextureLoader().load(r)),
      (this.texture.colorSpace = THREE.SRGBColorSpace),
      (this.texture.magFilter = THREE.NearestFilter),
      { scene: this.parseGeometry(s), name: t }
    );
  }
  getGeometry(e, t) {
    switch (e.format_version) {
      case "1.12.0":
        return e["minecraft:geometry"].find(
          (e) => e.description.identifier === t
        );
      default:
        throw new Error(`Geometry schema '${e.format_version}' not found!`);
    }
  }
  getParent(e) {
    return this.geo.bones.find((t) => t.name === e);
  }
  parseGeometry(e) {
    this.geo = e;
    const t = new BedrockGeometry();
    t.name = e.description.identifier;
    for (const r of e.bones) t.add(this.parseBone(r));
    return t;
  }
  parseBone(e) {
    const t = new THREE.Group();
    if (((t.name = e.name), e.cubes))
      for (const r of e.cubes) {
        const s = this.parseCube(r, e);
        t.add(s);
      }
    const r = e.pivot
      ? new THREE.Vector3().fromArray(e.pivot)
      : new THREE.Vector3(0, 0, 0);
    for (const e of t.children) e.position.set(r.x, -r.y, -r.z);
    return t.position.set(-r.x, r.y, r.z), t;
  }
  getUV(e, t) {
    if (Array.isArray(e.uv)) {
      var r = e.size[0],
        s = e.size[1],
        o = e.size[2],
        i = e.uv[0],
        n = e.uv[1];
      switch (t) {
        case "north":
          return { uv: [i + o, n + o], uv_size: [r, s] };
        case "east":
          return { uv: [i, n + o], uv_size: [o, s] };
        case "south":
          return { uv: [i + r + o + o, n + o], uv_size: [r, s] };
        case "west":
          return { uv: [i + r + o, n + o], uv_size: [o, s] };
        case "up":
          return { uv: [i + o, n], uv_size: [r, o] };
        case "down":
          return { uv: [i + r + o, n], uv_size: [r, o] };
      }
      return {
        uv: [i, n],
        uv_size: [
          this.geo.description.texture_width,
          this.geo.description.texture_height,
        ],
      };
    }
    return { uv: e.uv[t].uv, uv_size: e.uv[t].uv_size };
  }
  parseTexture(e, t) {
    var r = this.texture.clone(),
      s = this.geo.description.texture_width,
      o = this.geo.description.texture_height,
      i = this.getUV(e, t),
      n = i.uv_size[0],
      a = i.uv_size[1],
      u = i.uv[0],
      h = i.uv[1];
    r.center = new THREE.Vector2(0, 0);
    var c = n / s,
      p = a / o;
    r.repeat.set(c, p), (r.center = new THREE.Vector2(0, 1));
    var E = u / s,
      d = -h / o;
    return (r.offset = new THREE.Vector2(E, d)), r;
  }
  parseCube(e, t) {
    const r = new THREE.BoxGeometry(e.size[0], e.size[1], e.size[2]),
      s = new THREE.MeshPhongMaterial({ map: this.parseTexture(e, "up") }),
      o = new THREE.MeshPhongMaterial({ map: this.parseTexture(e, "down") }),
      i = new THREE.MeshPhongMaterial({ map: this.parseTexture(e, "north") }),
      n = new THREE.MeshPhongMaterial({ map: this.parseTexture(e, "south") }),
      a = new THREE.MeshPhongMaterial({ map: this.parseTexture(e, "east") }),
      u = new THREE.MeshPhongMaterial({ map: this.parseTexture(e, "west") }),
      h = new THREE.Mesh(r, [a, u, s, o, n, i]);
    if (t.pivot) {
      var c = e.size[0] / 2 - (e.origin[0] + e.size[0]),
        p = e.size[1] / 2 + e.origin[1],
        E = e.size[2] / 2 + e.origin[2];
      return r.translate(c, p, E), h;
    }
  }
}
