
export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other'; // Union type
}

export enum Role {
  Doctor = 'doctor',
  Patient = 'patient',
}


let patients: Patient[] = [];

export function addPatient(
  patientData: Omit<Patient, 'id'>
): Patient {
  const newPatient: Patient = {
    id: generateId(),
    ...patientData,
  };

  patients.push(newPatient);
  return newPatient;
}

export function updatePatient(
  id: string,
  updatedData: Partial<Omit<Patient, 'id'>>
): Patient | null {
  const patient = findPatientById(id);
  if (!patient) return null;

  Object.assign(patient, updatedData);
  return patient;
}

export function deletePatient(id: string): boolean {
  const index = patients.findIndex(p => p.id === id);
  if (index === -1) return false;

  patients.splice(index, 1);
  return true;
}

export function searchPatient(keyword: string): Patient[] {
  return patients.filter(p =>
    p.name.toLowerCase().includes(keyword.toLowerCase())
  );
}

export function getPatientInfo(patient: Patient): string {
  return `${patient.name} - ${patient.age} tuổi - ${patient.gender}`;
}


function findPatientById(id: string): Patient | undefined {
  return patients.find(p => p.id === id);
}

function generateId(): string {
  return Date.now().toString();
}
