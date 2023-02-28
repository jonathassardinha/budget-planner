export type ClassListParam = string | string[] | Record<string, boolean>;

export class ClassList {
  private classes: Set<string>;

  constructor(classString: ClassListParam, condition?: boolean) {
    this.classes = new Set();
    if (classString) {
      this.add(classString, condition);
    }
    return this;
  }

  add(newClasses: ClassListParam, condition = true) {
    if (Array.isArray(newClasses)) {
      newClasses.forEach((newClass) => this.add(newClass));
    } else if (newClasses instanceof Object) {
      Object.entries(newClasses).forEach(([newClass, condition]) => this.add(newClass, condition));
    } else if (condition) {
      newClasses.split(' ').forEach((newClass) => this.classes.add(newClass));
    }

    console.debug(newClasses, condition);
    return this;
  }

  remove(removableClasses: ClassListParam, condition = true) {
    if (Array.isArray(removableClasses)) {
      removableClasses.forEach((removableClass) => this.remove(removableClass));
    } else if (removableClasses instanceof Object) {
      Object.entries(removableClasses).forEach(([removableClass, condition]) => this.remove(removableClass, condition));
    } else if (condition) {
      removableClasses.split(' ').forEach((removableClass) => this.classes.delete(removableClass));
    }

    return this;
  }

  private toClassString() {
    return Array.from(this.classes).join(' ');
  }

  toString() {
    return this.toClassString();
  }
}
