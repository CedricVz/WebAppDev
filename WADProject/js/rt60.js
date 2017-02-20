var Volume;
var freq_index;

function clear_input() {
  document.room.units[0].checked = 1;
  for (i = 0; i <= 2; i++) {
    document.room.elements[i].value = ""
  }
  for (i = 1; i <= 6; i++) {
    document.surface.wind_l[i - 1].value = 0;
    document.surface.wind_h[i - 1].value = 0;
    document.surface.howmany[i - 1].value = 0;
  }
  document.surface.rt60.value = 0;
}

function feet_meter() {
  var u;
  if (document.room.units[0].checked) {
    u = 0.161;
  } else {
    u = 0.049073;
  }
  return u;
}

function freq() {
  var freq_index, f;
  for (i = 0; i <= 5; i++) {
    if (document.surface.freq[i].checked) f = document.surface.freq[i].value;
  }
  freq_index = "f" + f;
  return freq_index;
}

function Calculate() {
  if (checkinput()) {
    engage();
    var RT60 = (feet_meter() * (Volume / Sa_total())) * 100;
    RT60 = (Math.round(RT60)) / 100;
    document.surface.rt60.value = RT60;
  }
}

function checkinput() {
  for (i = 0; i <= 2; i++) {
    if (document.room.elements[i].value == null ||
      document.room.elements[i].value.length == 0) {
      alert("All fields must be completed");
      return false;
    }
  }
  return true;
}
// Sa for a single wall
function Sa_single(surface, coeff1, length, height, coeff2, number) {
  var Sa;
  var add_surface;
  add_surface = height * length;
  Sa = surface * coeff1 - number * add_surface * coeff1 + number * add_surface * coeff2;
  return Sa;
}

function Sa_total() {
  var Stotal = 0;
  freq_index = freq();
  for (i = 1; i <= 6; i++) {
    option_number1 = document.surface.materials[i - 1].options.selectedIndex;
    option_number2 = document.surface.materials_w[i - 1].options.selectedIndex;
    if (freq_index == "f125") {
      coeff1 = ac_List[option_number1 + 1].f125;
      coeff2 = ac_List[option_number2 + 1].f125;
    }
    if (freq_index == "f250") {
      coeff1 = ac_List[option_number1 + 1].f250;
      coeff2 = ac_List[option_number2 + 1].f250;
    }
    if (freq_index == "f500") {
      coeff1 = ac_List[option_number1 + 1].f500;
      coeff2 = ac_List[option_number2 + 1].f500;
    }
    if (freq_index == "f1000") {
      coeff1 = ac_List[option_number1 + 1].f1000;
      coeff2 = ac_List[option_number2 + 1].f1000;
    }
    if (freq_index == "f2000") {
      coeff1 = ac_List[option_number1 + 1].f2000;
      coeff2 = ac_List[option_number2 + 1].f2000;
    }
    if (freq_index == "f4000") {
      coeff1 = ac_List[option_number1 + 1].f4000;
      coeff2 = ac_List[option_number2 + 1].f4000;
    }
    window_l = parseFloat(document.surface.wind_l[i - 1].value);
    window_h = parseFloat(document.surface.wind_h[i - 1].value);
    window_number = parseFloat(document.surface.howmany[i - 1].value);
    Si = Sa_single(wall_area[i], coeff1, window_l, window_h, coeff2, window_number);
    Stotal += Si;
  }
  return Stotal;
}
// Absorption Coefficients Object
function coeff(freq_1, freq_2, freq_3, freq_4, freq_5, freq_6) {
  this.f125 = freq_1;
  this.f250 = freq_2;
  this.f500 = freq_3;
  this.f1000 = freq_4;
  this.f2000 = freq_5;
  this.f4000 = freq_6;
}
var ac_List = new Array(20);
ac_List[1] = new coeff(0.36, 0.44, 0.31, 0.29, 0.39, 0.25);
ac_List[2] = new coeff(0.10, 0.05, 0.06, 0.07, 0.09, 0.08);
ac_List[3] = new coeff(0.03, 0.03, 0.03, 0.04, 0.05, 0.07);
ac_List[4] = new coeff(0.14, 0.10, 0.06, 0.05, 0.04, 0.03);
ac_List[5] = new coeff(0.28, 0.22, 0.17, 0.09, 0.10, 0.11);
ac_List[6] = new coeff(0.03, 0.04, 0.11, 0.17, 0.24, 0.35);
ac_List[7] = new coeff(0.14, 0.35, 0.55, 0.72, 0.70, 0.65);
ac_List[8] = new coeff(0.01, 0.01, 0.02, 0.02, 0.02, 0.02);
ac_List[9] = new coeff(0.15, 0.11, 0.10, 0.07, 0.06, 0.07);
ac_List[10] = new coeff(0.02, 0.06, 0.14, 0.37, 0.60, 0.65);
ac_List[11] = new coeff(0.08, 0.24, 0.57, 0.69, 0.71, 0.73);
ac_List[12] = new coeff(0.76, 0.93, 0.83, 0.99, 0.99, 0.94);
ac_List[13] = new coeff(0.14, 0.20, 0.76, 0.79, 0.58, 0.37);
ac_List[14] = new coeff(0.29, 0.10, 0.05, 0.04, 0.07, 0.09);
ac_List[15] = new coeff(0.05, 0.03, 0.02, 0.02, 0.03, 0.02);
ac_List[16] = new coeff(0.10, 0.05, 0.04, 0.03, 0.03, 0.03);
ac_List[17] = new coeff(0.01, 0.01, 0.01, 0.01, 0.02, 0.02);
ac_List[18] = new coeff(0.01, 0.01, 0.01, 0.01, 0.02, 0.03);
ac_List[19] = new coeff(0.014, 0.018, 0.02, 0.036, 0.035, 0.028);
ac_List[20] = new coeff(0.13, 0.26, 0.39, 0.46, 0.43, 0.41);
ac_List[21] = new coeff(0.27, 0.4, 0.56, 0.65, 0.64, 0.56);
//end of coefficient stuff
var wall_area = new Array(6)

function engage() {
  varW,
  L,
  H;
  W = parseFloat(document.room.width.value);
  L = parseFloat(document.room.length.value);
  H = parseFloat(document.room.height.value);
  wall_area[1] = W * H; // front
  wall_area[2] = W * H; // back
  wall_area[3] = L * H; // left
  wall_area[4] = L * H; // right
  wall_area[5] = L * W; // ceiling
  wall_area[6] = L * W; // floor
  Volume = L * W * H;
}
// end RT60 calculation Sabine formula -->


  
  
  