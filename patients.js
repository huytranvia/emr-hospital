function addPatient(patients, newPatient) {
  return [...patients, newPatient];
}
const updatePatient = (patients, id, updates) => {
  return patients.map(p => p.id === id ? { ...p, ...updates } : p);
};

let patients = [
  { id: '1', name: 'Nguyễn Văn A', age: 30 },
  { id: '2', name: 'Trần Thị B', age: 25 },
];

console.log("Original patients:", patients);

let newPatient = { id: '3', name: 'Lê Văn C', age: 40 };
let patientsAfterAdd = addPatient(patients, newPatient);
console.log("After add:", patientsAfterAdd);

let patientsAfterUpdate = updatePatient(patientsAfterAdd, '2', { age: 26, name: "Trần Thị BB" });
console.log("After update:", patientsAfterUpdate);

console.log("Original still unchanged:", patients);
