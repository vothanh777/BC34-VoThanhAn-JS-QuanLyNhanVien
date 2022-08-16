var danhsachNV = new DanhSachNhanVien();

var validation = new Validation();

getLocalStorage();

function getEleId(id) {
  return document.getElementById(id);
}

function layThongTinNV(isAdd) {
  var taiKhoan = getEleId("tknv").value;
  var hoTen = getEleId("name").value;
  var email = getEleId("email").value;
  var matKhau = getEleId("password").value;
  var ngayLam = getEleId("datepicker").value;
  var luongCB = getEleId("luongCB").value;
  var chucVu = getEleId("chucvu").value;
  var soGioLam = getEleId("gioLam").value;

  var isValid = true;
  //check Tài khoản
  if (isAdd) {
    isValid &=
    validation.kiemTraRong(taiKhoan, "tbTKNV", "Vui lòng nhập tài khoản") &&
    validation.kiemTraDoDaiKyTu(
      taiKhoan,
      "tbTKNV",
      "Vui lòng nhập từ 4-6 ký tự số",
      4,
      6
    ) &&
    validation.kiemTraKyTuSo(taiKhoan, "tbTKNV", "Vui lòng nhập ký tự số")&&
    validation.kiemTraDuyNhat(taiKhoan, "tbTKNV", "Tài khoản đã tồn tại", danhsachNV.arrNV);
  }
  
  //check Họ tên
  isValid &=
    validation.kiemTraRong(hoTen, "tbTen", "Vui lòng nhập họ tên") &&
    validation.kiemTraKyTuChu(hoTen, "tbTen", "Vui lòng nhập ký tự chữ");
  //check Email
  isValid &=
    validation.kiemTraRong(email, "tbEmail", "Vui lòng nhập email") &&
    validation.kiemTraEmail(
      email,
      "tbEmail",
      "Vui lòng nhập đúng cú pháp email"
    );
  //Check mật khẩu
  isValid &=
    validation.kiemTraRong(matKhau, "tbMatKhau", "Vui lòng nhập mật khẩu") &&
    validation.kiemTraDoDaiKyTu(
      matKhau,
      "tbMatKhau",
      "Vui lòng nhập mật khẩu từ 6-10 ký tự",
      6,
      10
    ) &&
    validation.kiemTraMatKhau(
      matKhau,
      "tbMatKhau",
      "Mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)"
    );
  //check ngày làm
  isValid &=
    validation.kiemTraRong(ngayLam, "tbNgay", "Vui lòng nhập ngày vào làm") &&
    validation.kiemTraNgayThangNam(
      ngayLam,
      "tbNgay",
      "Vui lòng nhập ngày vào làm đúng định dạng mm/dd/yyyy"
    );
  //check lương cơ bản
  isValid &=
    validation.kiemTraRong(
      luongCB,
      "tbLuongCB",
      "Vui lòng nhập lương cơ bản"
    ) &&
    validation.kiemTraKhoanGiaTri(
      luongCB,
      "tbLuongCB",
      "Vui lòng nhập lương cơ bản từ 1000000 - 20000000",
      1000000,
      20000000
    );
  //check chức vụ
  isValid &= validation.kiemTraSelection(
    "chucvu",
    "tbChucVu",
    "Vui lòng chọn chức vụ"
  );
  //check số giờ làm
  isValid &=
    validation.kiemTraRong(soGioLam, "tbGiolam", "Vui lòng nhập số giờ làm") &&
    validation.kiemTraKhoanGiaTri(
      soGioLam,
      "tbGiolam",
      "Vui lòng nhập số giờ làm trong tháng từ 80-200 giờ",
      80,
      200
    );
  if (!isValid) return null;

  var nhanVien = new NhanVien(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCB,
    chucVu,
    soGioLam
  );
  nhanVien.tinhTongLuong(getEleId("chucvu"));
  nhanVien.xepLoaiNhanVien();

  return nhanVien;
}

//Render TABLE Danh sách Nhân viên
function renderTableNhanVien(dsnv) {
  var content = "";
  dsnv.forEach(function (nv) {
    content += `
      <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.loaiNhanVien}</td>
        <td>
        <button onclick=suaNV(${nv.taiKhoan}) class="btn btn-primary" id="btnThem" data-toggle="modal" data-target="#myModal">
                    Sửa
                  </button>
        </td>
        <td>
        <button class="btn btn-danger" onclick=xoaNV(${nv.taiKhoan})>Xoá</button>
        </td>
      </tr>
    `;
  });
  getEleId("tableDanhSach").innerHTML = content;
}

getEleId("btnThemNV").addEventListener("click", function () {
  var nhanVien = layThongTinNV(true);
  if (nhanVien) {
    danhsachNV.themNV(nhanVien);
    renderTableNhanVien(danhsachNV.arrNV);
    setLocalStorage();
  }
});

//Xoá Nhân viên
function xoaNV(taiKhoanNV) {
  danhsachNV.xoaNV(taiKhoanNV);
  renderTableNhanVien(danhsachNV.arrNV);
  setLocalStorage();
}
//Sửa nhân viên
function suaNV(taiKhoanNV) {
  var nv = danhsachNV.layNhanVien(taiKhoanNV);
  if (nv) {
    getEleId("tknv").value = nv.taiKhoan;
    getEleId("tknv").disabled = true;
    getEleId("name").value = nv.hoTen;
    getEleId("email").value = nv.email;
    getEleId("password").value = nv.matKhau;
    getEleId("datepicker").value = nv.ngayLam;
    getEleId("luongCB").value = nv.luongCB;
    getEleId("chucvu").value = nv.chucVu;
    getEleId("gioLam").value = nv.soGioLam;
  }
}

//Cập nhật Nhân viên
getEleId("btnCapNhat").addEventListener("click", function(){
  var nhanVien = layThongTinNV();
  danhsachNV.capNhatNhanVien(nhanVien);
  setLocalStorage();
  renderTableNhanVien(danhsachNV.arrNV);
});

//tìm kiếm nhân viên theo loại nhân viên
getEleId("searchName").addEventListener("keyup", function(){
  var keyword = getEleId("searchName").value;
  var mangKQTimKiem = danhsachNV.timKiemNhanVien(keyword);
  renderTableNhanVien(mangKQTimKiem);
});

//Lưu data tại Local Storage (browser)
function setLocalStorage() {
  var dataString = JSON.stringify(danhsachNV.arrNV);
  localStorage.setItem("DSNV", dataString);
}

//Get data từ Local Storage
function getLocalStorage() {
  var dataString = localStorage.getItem("DSNV");
  if (dataString) {
    var dataJson = JSON.parse(dataString);
    danhsachNV.arrNV = dataJson;
    renderTableNhanVien(dataJson);
  }
}
