class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);

    this.items.sort((first, second) => {
      if (first > second) {
        return 1;
      } else if (first < second) {
        return -1;
      } else {
        return 0;
      }
    });

    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      let max = this.length - 1;
      return this.items[max];
    }
  }

  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
