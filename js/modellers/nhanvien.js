function NhanVien(
  _taikhoan,
  _hoTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCB,
  _chucVu,
  _soGioLam
) {
  this.taiKhoan = _taikhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCB = parseFloat(_luongCB);
  this.chucVu = _chucVu;
  this.soGioLam = parseFloat(_soGioLam);
  this.tongLuong = 0;
  this.loaiNhanVien = "";

  this.tinhTongLuong = function (selection) {
    if (selection.selectedIndex == 1) {
      this.tongLuong = this.luongCB * 3;
    } else if (selection.selectedIndex == 2) {
      this.tongLuong = this.luongCB * 2;
    } else {
      this.tongLuong = this.luongCB;
    }
  };

  this.xepLoaiNhanVien = function () {
    if (this.soGioLam >= 192) {
      this.loaiNhanVien = "Nhân viên xuất sắc";
    } else if (this.soGioLam >= 176) {
      this.loaiNhanVien = "Nhân viên giỏi";
    } else if (this.soGioLam >= 160) {
      this.loaiNhanVien = "Nhân viên khá";
    } else {
      this.loaiNhanVien = "Nhân viên trung bình";
    }
  };
}
