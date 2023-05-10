class Storage
{
  /**
   * 
   * @param {string} storage_name - custom name of the current storage
   */
  constructor(storage_name) {
    this.storage_name = storage_name;

    this.data = {
      last_id: 0,
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

  /**
   * 
   * @param {object} entry - Example {size: "M", color: "black", "type_number": 2318512}
   * @returns - newly created entry ID
   */
  create (entry) {
    const id = ++this.data.last_id;
    this.data.entries[id] = entry;
    this.save();

    return id;
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