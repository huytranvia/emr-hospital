// Danh sách bệnh nhân ban đầu
let patients = [
  { id: '1', name: 'Nguyễn Văn A', age: 30 }
];

console.log('Danh sách bệnh nhân:', patients);

// ===== Thử nghiệm scope =====

// var: scope theo function
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log('var x =', x); // vẫn truy cập được
}

// let: scope theo block
function testLet() {
  if (true) {
    let y = 20;
    console.log('let y trong block =', y);
  }
  // console.log(y); // ❌ lỗi nếu mở dòng này
}

// const: không thay đổi giá trị
function testConst() {
  const z = 30;
  // z = 40; // ❌ lỗi
  console.log('const z =', z);
}

testVar();
testLet();
testConst();
