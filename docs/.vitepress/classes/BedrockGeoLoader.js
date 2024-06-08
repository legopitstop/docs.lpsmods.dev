import * as THREE from "three";

export class BedrockGeoLoader extends THREE.Loader {
  constructor(manager) {
    super(manager);
  }

  load(url) {
    const onError = () => {};
    const onProgress = () => {};
    const scope = this;
    const loader = new THREE.FileLoader(scope.manager);
    loader.setPath(scope.path);
    loader.setRequestHeader(scope.requestHeader);
    loader.setWithCredentials(scope.withCredentials);
    loader.load(
      url,
      function (text) {
        try {
            console.log(text);
          scope.parse(JSON.parse(text));
        } catch (e) {
          if (onError) {
            onError(e);
          } else {
            console.error(e);
          }

          scope.manager.itemError(url);
        }
      },
      onError,
      onProgress
    );
  }

  parse(json) {
    console.log(json);

    return undefined;
  }
}
