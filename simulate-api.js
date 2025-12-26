function fetchPatients(shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Failed to fetch patients"));
      } else {
        resolve([
          { id: '1', name: 'Nguyễn Văn A', age: 30 },
          { id: '2', name: 'Trần Thị B', age: 25 },
        ]);
      }
    }, 1000);
  });
}
async function displayPatients() {
  try {
    console.log("Fetching patients...");
    const patients = await fetchPatients(false);

    console.log("Danh sách bệnh nhân:");
    console.log(patients);
  } catch (error) {
    console.error("❌ Lỗi:", error.message);
  } finally {
    console.log("Done.");
  }
}
displayPatients();
