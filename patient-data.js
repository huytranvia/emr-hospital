
let patients = [
  { id: '1', name: 'Nguyễn Văn A', age: 30 }
];

console.log('Danh sách bệnh nhân:', patients);


function testVar() {
  if (true) {
    var x = 10;
  }
  console.log('var x =', x); 
}

function testLet() {
  if (true) {
    let y = 20;
    console.log('let y trong block =', y);
  }

}
function testConst() {
  const z = 30;
  console.log('const z =', z);
}

testVar();
testLet();
testConst();
