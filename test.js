const { addPatient, updatePatient, deletePatient, searchPatient } = require("./patients");

// Thêm bệnh nhân
const p1 = addPatient({ name: "Nguyen Van A", age: 30 });
console.log("All patients:", searchPatient(""));

// Update
updatePatient(p1.id, { age: 31 });
console.log("After update:", searchPatient("Nguyen"));

// Delete
deletePatient(p1.id);
console.log("After delete:", searchPatient(""));
