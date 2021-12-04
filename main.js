// Tạo object thông tin cá nhân: tên, điểm môn học...
var testScore = { 
    name: "",
    math: 0,
    physical: 0,
    chemistry: 0
};
// Lấy thông tin học sinh
function createUser() {
    var tenHocsinh = document.getElementById("name").value.trim();
    var diemToan = document.getElementById("math").value.trim();
    var diemLy = document.getElementById("physic").value.trim();
    var diemHoa = document.getElementById("chemist").value.trim();
    // Mình cần validate chỗ này, nhưng khi bấm vào đây thì dòng chưa được tạo ngay nếu nhập sai thông tin.
    if (tenHocsinh || tenHocsinh == null || tenHocsinh == "") {
        alert("Vui lòng không để trống")
    }  
    if (isNaN(diemToan, diemLy, diemHoa)) {
        alert("Bạn phải nhập số")
    }
    // Chèn ô vào bảng khi có thông tin nhập đúng, lây thông tin người nhập vào bảng
    // Ô số thứ tự cần làm số tự tăng khi có người nhập mới thêm hàng
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
}
    // Hàm tính điểm trung bình
    function average() {
    // sau khi bấm nút tính điểm trung bình thì điểm hiện ra trong bảng thay "?"
    }
    function rank() {}
    // Sau khi bấm nút xác định học sinh giỏi thì những ai có điểm trung bình >= 8.0 sẽ được bôi màu đỏ text dòng đó