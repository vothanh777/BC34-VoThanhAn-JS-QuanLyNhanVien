function Validation() {
  //Kiểm tra nhập hay chưa? hay kiểm tra rỗng
  this.kiemTraRong = function (value, errorId, message) {
    if (value === "") {
      getEleId(errorId).style.display = "block";
      getEleId(errorId).innerHTML = message;
      return false;
    }
    getEleId(errorId).style.display = "none";
    getEleId(errorId).innerHTML = "";
    return true;
  };

  //Kiểm tra độ dài ký tự
  this.kiemTraDoDaiKyTu = function (value, errorId, message, min, max) {
    var length = value.length;
    if (length < min || length > max) {
      getEleId(errorId).style.display = "block";
      getEleId(errorId).innerHTML = message;
      return false;
    }
    getEleId(errorId).style.display = "none";
    getEleId(errorId).innerHTML = "";
    return true;
  };

  //Kiểm tra dữ liệu nhập vào là ký tự số từ 0-9
  this.kiemTraKyTuSo = function (value, errorId, message) {
    var letter = /^[0-9]+$/;
    if (value.match(letter)) {
      getEleId(errorId).style.display = "none";
      getEleId(errorId).innerHTML = "";
      return true;
    }
    getEleId(errorId).style.display = "block";
    getEleId(errorId).innerHTML = message;
    return false;
  };

  //Kiểm tra dữ liệu nhập vào là ký tự chuỗi tiếng Việt a á ấ --> y
  this.kiemTraKyTuChu = function (value, errorId, message) {
    // var letter = "^[A-Za-z]+$";
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      getEleId(errorId).style.display = "none";
      getEleId(errorId).innerHTML = "";
      return true;
    }
    getEleId(errorId).style.display = "block";
    getEleId(errorId).innerHTML = message;
    return false;
  };

  //Kiểm tra dữ liệu nhập vào đúng định dạng email
  this.kiemTraEmail = function (value, errorId, message) {
    // var letter = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    // var letter =
    //   /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(letter)) {
      getEleId(errorId).style.display = "none";
      getEleId(errorId).innerHTML = "";
      return true;
    }
    getEleId(errorId).style.display = "block";
    getEleId(errorId).innerHTML = message;
    return false;
  };

  //Kiểm tra mật khẩu nhập vào đúng cú pháp
  this.kiemTraMatKhau = function (value, errorId, message) {
    // var letter = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*s).{0,}$/;
    var letter =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (value.match(letter)) {
      getEleId(errorId).style.display = "none";
      getEleId(errorId).innerHTML = "";
      return true;
    }
    getEleId(errorId).style.display = "block";
    getEleId(errorId).innerHTML = message;
    return false;
  };

  //Kiểm tra dữ liệu nhập vào đúng định dạng mm/dd/yyyy
  this.kiemTraNgayThangNam = function (value, errorId, message) {
    var letter = /^(0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])[/-]\d{4}$/;
    if (value.match(letter)) {
      getEleId(errorId).style.display = "none";
      getEleId(errorId).innerHTML = "";
      return true;
    }
    getEleId(errorId).style.display = "block";
    getEleId(errorId).innerHTML = message;
    return false;
  };

  //Kiểm tra dữ liệu nhập vào nằm trong khoản giá trị
  this.kiemTraKhoanGiaTri = function (value, errorId, message, min, max) {
    if (value >= min && value <= max) {
      getEleId(errorId).style.display = "none";
      getEleId(errorId).innerHTML = "";
      return true;
    }
    getEleId(errorId).style.display = "block";
    getEleId(errorId).innerHTML = message;
    return false;
  };

  //Kiểm tra selection
  this.kiemTraSelection = function (selectionId, errorId, message) {
    var selection = getEleId(selectionId);
    if (selection.selectedIndex == 0) {
      getEleId(errorId).style.display = "block";
      getEleId(errorId).innerHTML = message;
      return false;
    }
    getEleId(errorId).style.display = "none";
    getEleId(errorId).innerHTML = "";
    return true;
  };

  this.kiemTraDuyNhat = function(value, errorId, message, list){
    var isUnique = list.some(function (nv) {
      return nv.taiKhoan === value;
    });
    if (isUnique) {
      getEleId(errorId).style.display = "block";
      getEleId(errorId).innerHTML = message;
      return false;
    }
    getEleId(errorId).style.display = "none";
    getEleId(errorId).innerHTML = "";
    return true;
  }
}
