// BT1: TINH LUONG
let btnTinhLuong = document.querySelector('#btnTinhLuong');

btnTinhLuong.addEventListener('click', function () {
    let luongMotNgay = Number(document.querySelector('#luongMotNgay').value);
    let soNgayLam = Number(document.querySelector('#soNgayLam').value);
    let tongLuong = document.querySelector('#tongLuong');

    let luongThang = luongMotNgay * soNgayLam;

    tongLuong.innerHTML = luongThang.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
    });
});

// BT2: TINH TRUNG BINH
let btnTinhTB = document.querySelector("#btnTinhTB");

btnTinhTB.addEventListener('click', function () {
    let soThu1 = Number(document.querySelector('#soThu1').value);
    let soThu2 = Number(document.querySelector('#soThu2').value);
    let soThu3 = Number(document.querySelector('#soThu3').value);
    let soThu4 = Number(document.querySelector('#soThu4').value);
    let soThu5 = Number(document.querySelector('#soThu5').value);
    let trungBinh = document.querySelector('#trungBinh');

    let kqTInhTrungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;

    trungBinh.innerHTML = kqTInhTrungBinh.toFixed(2);
});

// BT3: QUY DOI TIEN
let btnDoiTien = document.querySelector('#btnDoiTien');

btnDoiTien.addEventListener('click', function () {
    let soUSD = Number(document.querySelector('#soUSD').value);
    let tienViet = document.querySelector('#tienViet');

    let kqDoiTien = soUSD * 23500;

    tienViet.innerHTML = kqDoiTien.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
    });;
});

// BT4: TINH DIEN TICH - TINH CHU VI HÌNH CHU NHAT
let btnBT4 = document.querySelector('#btnBT4');

btnBT4.addEventListener('click', function () {
    let chieuDai = Number(document.querySelector('#chieuDai').value);
    let chieuRong = Number(document.querySelector('#chieuRong').value);
    let dienTich = document.querySelector('#dienTich');
    let chuVi = document.querySelector('#chuVi');

    let kqDienTich = chieuDai * chieuRong;
    let kqChuVi = (chieuDai + chieuRong) * 2;

    dienTich.innerHTML = `Diện tích là: ${kqDienTich}`;
    chuVi.innerHTML = `Chu vi là: ${kqChuVi}`;
});

// TINH TONG 2 KY SO
let btnBT5 = document.querySelector('#btnBT5');

btnBT5.addEventListener('click', function () {
    let numberInput = Number(document.querySelector('#numberInput').value);
    let tongKySo = document.querySelector('#tongKySo');
    
    let kySo1 = Math.floor(numberInput % 10);
    let kySo2 = Math.floor(numberInput / 10);

    tongKySo.innerHTML = kySo1 + kySo2;

});