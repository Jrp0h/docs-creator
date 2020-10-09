export default class Namespace {

  private _name = "";
  private _level = 0;

  // Getters and Setters
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
    this._level = this.Sublevels.length;
  }

  get level(): number {
    return this._level;
  }

  get Sublevels(): Array<string> {
    const parts = this.name.split(".");

    const sublevels = new Array<string>();

    for (let i = 0; i < parts.length; i++) {

      let currentSublevel = "";

      for (let j = 0; j <= i; j++) {
        currentSublevel += parts[j];
      }

      sublevels.push(currentSublevel);
    }

    return sublevels;
  }

  // Helper Methods
  GetFamily(namespaces: Namespace[], includeThis = true): Array<Namespace> {

    const family = new Array<Namespace>();

    for (const ns of namespaces) {
      // Get lower

      if (ns.name == this.name && ns.level == this.level && !includeThis)
        continue;

      for (const sublevels of this.Sublevels) {
        if (ns.name == sublevels) {
          family.push(ns);
          break;
        }
      }

      if (ns.name.includes(this.name))
        family.push(ns);
    }

    return family;

  }

  static AlreadyExists(newNamespace: string, namespaces: Namespace[]): boolean {

    for (let i = 0; i < namespaces.length; i++) {
      if (newNamespace == namespaces[i].name) return true;
    }

    return false;
  }

  static GetMatching(query: string, namespaces: Namespace[]): Array<Namespace> {

    const included = new Array<Namespace>()

    for (const ns of namespaces) {
      if (ns.name.includes(query))
        included.push(ns);
    }

    return included;
  }

  static IsInFamily(ns: Namespace, family: Namespace[]): boolean {
    for (const fm of family) {
      if (ns.name == fm.name && ns.level == fm.level)
        return true;
    }

    return false;
  }

  static SortByLevel(namespaces: Namespace[]): Array<Namespace> {
    return namespaces.sort((a, b) => a.level - b.level);
  }

  static SortByName(namespaces: Namespace[]): Array<Namespace> {
    return namespaces.sort((a, b) => {

      if (a.name < b.name)
        return -1;
      else if (a.name > b.name)
        return 1;

      return 0;
    });
  }
}
