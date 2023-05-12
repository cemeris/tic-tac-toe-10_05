class Storage
{
  /**
   * 
   * @param {string} storage_name - custom name of the current storage
   */
  constructor(storage_name) {
    this.storage_name = storage_name;

    this.data = {
      entries: {}
    };

    const json_data = localStorage.getItem(this.storage_name);
    if (json_data == null) {
      return;
    }

    this.data = JSON.parse(json_data);
  }

  getEntries () {
    return this.data.entries;
  }

  add (id, entry) {
    this.data.entries[id] = {};
    for (const key in entry) {
      this.data.entries[id][key] = entry[key];
    }

    this.save();
  }

  /**
   * 
   * @param {*} id
   * @param {*} data - Example {time: "10:12"} or {status: 1}
   */
  update (id, data) {
    for (const key in data) {
      this.data.entries[id][key] = data[key];
    }

    this.save();
  }

  delete (id) {
    delete this.data.entries[id];
    this.save();
  }

  clear () {
    this.data.entries = {};
    this.save();
  }

  save () {
    const json_data = JSON.stringify(this.data);
    localStorage.setItem(this.storage_name, json_data);
  }
}


// const json = `{
//   "firstname": "Leo",
//   "lastname": "Ozoliņš",
//   "age": 45,
//   "skils": ["html", "css", "js"]
// }`;

// const obj = {
//   firstname: "Leo",
//   lastname: "Ozoliņš",
//   age: 45,
//   skils: ["html", "css", "js"]
// };