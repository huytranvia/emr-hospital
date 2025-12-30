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
