const request = indexedDB.open("test", 1);

request.onupgradeneeded = (e) => {
    db = e.target.result;

    let objectStore = db.createObjectStore("memo", { keyPath: "id"});
    objectStore.createIndex("name", "name", { unique: false })

        
    const memos = [
        { id: 1, name: "Lee", age: 12, text:"I don't want to go to school."},
        { id: 2, name: "Kim", age: 25, text:"I don't want to go to work." }
    ];

    var memoObjectStore = db.transaction("memo", "readwrite").objectStore("memo")
    memos.forEach(function(memo) {
        memoObjectStore.add(memo);
    });

    console.log("======")
}

request.onsuccess = e => {
	alert("success is called");
}

request.error = e => {
	alert("error is called");
}