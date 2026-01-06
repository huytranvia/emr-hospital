<<<<<<< HEAD
// patients.js

// Thêm bệnh nhân mà không thay đổi mảng gốc
function addPatient(patients, newPatient) {
  return [...patients, newPatient];
}

// Cập nhật bệnh nhân theo id
const updatePatient = (patients, id, updates) => {
  return patients.map(p => p.id === id ? { ...p, ...updates } : p);
};

// ===== TEST =====
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
=======
let patients = [];

function addPatient(patient) {
  patient.id = Date.now().toString();
  patients.push(patient);
  return patient;
}

function updatePatient(id, updatedData) {
  const index = patients.findIndex(p => p.id === id);
  if (index === -1) return null;
  patients[index] = { ...patients[index], ...updatedData };
  return patients[index];
}

function deletePatient(id) {
  const index = patients.findIndex(p => p.id === id);
  if (index === -1) return false;
  patients.splice(index, 1);
  return true;
}

function searchPatient(keyword) {
  return patients.filter(p =>
    p.name.toLowerCase().includes(keyword.toLowerCase())
  );
}

// Đây là phần export quan trọng
module.exports = {
  addPatient,
  updatePatient,
  deletePatient,
  searchPatient
};
>>>>>>> a50207b4ccc9c32fd74806a812f28d25fadb5f9d
