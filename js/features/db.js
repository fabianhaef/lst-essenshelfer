let db;
const request = window.indexedDB.open("restaurants", 4);


request.onerror = (event) => {
  console.error("Error", event.target.errorCode);
};

request.onsuccess = (event) => {
  db = event.target.result;
};


request.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.innerHTML += '<li>Error loading database.</li>';
  };

  // Create an objectStore for this database using
  // IDBDatabase.createObjectStore

  const objectStore = db.createObjectStore("restaurants", { keyPath: "name" });

  // define what data items the objectStore will contain

  objectStore.createIndex("name", "name", { unique: true });
  objectStore.createIndex("category", "category", { unique: false });
  objectStore.createIndex("address", "address", { unique: false });
  objectStore.createIndex("city", "city", { unique: false });
  objectStore.createIndex("zip", "zip", { unique: false });
  objectStore.createIndex("notified", "notified", { unique: false });
};


export { db };