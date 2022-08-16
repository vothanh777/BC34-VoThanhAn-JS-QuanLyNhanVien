function DanhSachNhanVien() {
  this.arrNV = [];

  this.themNV = function (nv) {
    this.arrNV.push(nv);
  };

  this.timViTriNhanVien = function (taiKhoanNV) {
    var index = -1;
    this.arrNV.forEach(function (nv, i) {
      if (nv.taiKhoan == taiKhoanNV) {
        index = i;
      }
    });
    return index;
  };

  this.xoaNV = function (taiKhoanNV) {
    var index = this.timViTriNhanVien(taiKhoanNV);
    if (index !== -1) {
      this.arrNV.splice(index, 1);
    }
  };

  this.layNhanVien = function (taiKhoanNV) {
    var nhanVien = null;
    var index = this.timViTriNhanVien(taiKhoanNV);
    if (index !== -1) {
      nhanVien = this.arrNV[index];
    }
    return nhanVien;
  };

  this.capNhatNhanVien = function(nv){
    var index = this.timViTriNhanVien(nv.taiKhoan);
    if (index !== -1) {
      this.arrNV[index] = nv;
    }
  };

  this.timKiemNhanVien = function (keyword) {
    var mangTimKiem = [];
    this.arrNV.forEach(function (nv) {
      var keywordLowerCase = keyword.toLowerCase();
      var loaiNVLowerCase = nv.loaiNhanVien.toLowerCase();
      if (loaiNVLowerCase.indexOf(keywordLowerCase) !== -1) {
        mangTimKiem.push(nv);
      }
    });
    return mangTimKiem;
  };
}
