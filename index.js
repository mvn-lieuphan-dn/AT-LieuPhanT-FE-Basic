var $tabs = document.getElementsByClassName('js-tab');
var $btnSwitchs = document.getElementsByClassName('btn-switch');
var $btnBack = document.getElementById('js-back');
var $btnNext = document.getElementById('js-next');
var $btnSwitch4 = document.getElementById('js-switch4');
var $btnSwitch5 = document.getElementById('js-switch5');
var currentTab = 0;
showTab(currentTab);
function showTab(n) {
  $tabs[n].style.display = 'block';
  if (n === 0) {
    $btnSwitch4.style.display = 'none';
    $btnSwitch5.style.display = 'none';
    $btnBack.style.display = 'none';
  } else {
    $btnSwitch4.style.display = 'block';
    $btnSwitch5.style.display = 'block';
    $btnBack.style.display = 'inline';
  }
  if (n == $tabs.length - 1) {
    $btnNext.innerHTML = 'Submit';
  } else {
    $btnNext.innerHTML = 'Next';
  }
  fixBtnSwitch(n);
}

function fixBtnSwitch(n) {
  var i;
  for (i = 0; i < $btnSwitchs.length; i++) {
    $btnSwitchs[i].className = $btnSwitchs[i].className.replace(' active', '');
  }
  $btnSwitchs[n].className += ' active';
}

var ramdom = ramdomSMS();

var $errorInfo = document.getElementsByClassName('error-info');
var $emailValue = document.getElementById('js-email');
var $pass = document.getElementById('js-pass');
var $passConf = document.getElementById('js-pass-conf');
var $errorPass = document.getElementById('js-error-pass');
var $errorEmail = document.getElementById('error-email');

function validateInfo() {
  var valid = false;
  var y = $tabs[currentTab].getElementsByTagName('input');
  for (var i = 0; i < y.length; i++) {
    if (y[i].value === '') {
      $errorInfo[i].style.display = 'block';
      valid = false;
    }
    if (i === 2) {
      var checkMail = validateEmail($emailValue.value);
      if (checkMail === false && y[i].value !== '') {
        $errorEmail.style.display = 'inline';
        valid = false;
      }
      else if (checkMail === false && y[i].value) {
        $errorInfo[i].style.display = 'inline';
        $errorEmail.style.display = 'none';
        valid = false;
      }
       else {
        valid = true;
        $errorEmail.style.display = 'none';
        $errorInfo[i].style.display = 'none';
      }
    }
    if (i === 4) {
      if ($pass.value !== $passConf.value) {
        if ($pass.value !== $passConf.value) {
          valid = false;
          $errorPass.style.display = 'block';
        } else {
          valid = true;
          $errorPass.style.display = 'none';
        }
      }
      //
    //   if ($pass.value !== $passConf.value && !$passConf) {
    //     valid = false;
    //     $errorInfo[i].style.display = 'none';
    //     $errorPass.style.display = 'inline';
    //   }
    //   else if($pass.value !== $passConf.value && $passConf) {
    //     valid = false;
    //     $errorPass.style.display = 'none';
    //     $errorInfo[i].style.display = 'inline';
    //   }
    //   else if($pass.value === $passConf.value && $passConf) {
    //     console.log('hdhdgh');
    //     $errorPass.style.display = 'none';
    //     $errorInfo[i].style.display = 'inline';
    //     valid = false;
    //   }
    //   else if ($pass.value === $passConf.value && !$passConf){
    //     console.log('aaaaaaaaaao')
    //     valid = true;
    //     $errorPass.style.display = 'none';
    //   }
    // }
    // console.log(valid);
      //
    }
  }

  return valid;
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

var $phoneNumber = document.getElementsByClassName('input-phone');
var $errorPhone = document.getElementById('js-error-phone');
var checkPhone = false;
var phone = '';
function validatePhone() {
  var i;
  var arrTemp;
  var lengthNumber = 0;
  for (i = 0; i < $phoneNumber.length; i++) {
    phone += $phoneNumber[i].value;
    if (isNaN($phoneNumber[i].value)) {
      checkPhone = false;
    } else {
      var temp = $phoneNumber[i].value;
      arrTemp = temp.split('');
      lengthNumber += arrTemp.length;
    }
  }

  if (lengthNumber === 10) {
    checkPhone = true;
    console.log(checkPhone);
    $errorPhone.style.display = 'none';
  } else {
    checkPhone = false;
  }
  return checkPhone;
}

function ramdomSMS() {
  return (
    Math.floor(Math.random() * 10).toString() +
    Math.floor(Math.random().toString() * 10) +
    Math.floor(Math.random() * 10).toString() +
    Math.floor(Math.random() * 10).toString()
  );
}

var $sms = document.getElementsByClassName('input-sms');
var inputCode = '';

function validateCode() {
  console.log(ramdom);
  var checkCode = false;
  for (var i = 0; i < $sms.length; i++) {
    console.log($sms[i].value);
    inputCode += $sms[i].value;
  }
  console.log(inputCode);
  if (inputCode === ramdom) {
    checkCode = true;
  } else checkCode = false;
  return checkCode;
}

var $fName = document.getElementById('js-first-name');
var $lName = document.getElementById('js-last-name');
var arrInfo = [];
var userInfo = {};
function showInfo() {
  console.log($passConf.value);
  document.getElementById("js-c-fname").innerHTML =
    '<span class="info-detail" id="js-c-pass">' + $fName.value + '</span>';
  document.getElementById("js-c-lname").innerHTML =
    '<span class="info-detail" id="js-c-pass">' + $lName.value + '</span>';
  document.getElementById("js-c-email").innerHTML =
    '<span class="info-detail" id="js-c-pass">' + $emailValue.value + '</span>';
  document.getElementById("js-c-password").innerHTML =
    '<span class="info-detail" id="js-c-pass">' + $passConf.value + '</span>';
  document.getElementById("js-c-phone").innerHTML = phone;
  '<span class="info-detail" id="js-c-pass">' + phone + '</span>';

  userInfo = {
    fistName: $fName.value,
    lastName: $lName.value,
    email: $emailValue.value,
    password: $passConf.value,
    phone: phone
  };
  console.log(userInfo);
}

var $errorCode = document.getElementById('js-error-sms');

function nextTab(n) {
  console.log(n);
  console.log(currentTab);
  if (n === 1) {
    if (currentTab === 0 && validateInfo()) {
      $tabs[currentTab].style.display = 'none';
      currentTab = currentTab + 1;
      showTab(currentTab);
    } else if (currentTab === 1) {
      if (validatePhone()) {
        $tabs[currentTab].style.display = 'none';
        currentTab = currentTab + 1;
        showTab(currentTab);
        alert('CODE SMS: ' + ramdom);
      } else {
        $errorPhone.style.display = 'inline';
      }
    } else if (currentTab === 2) {
      if (validateCode()) {
        $tabs[currentTab].style.display = 'none';
        currentTab = currentTab + 1;
        showTab(currentTab);
        console.log(currentTab);
        showInfo();
        $btnNext.value = 'submit';
      } else {
        $errorCode.style.display = 'inline';
      }
    } else if (currentTab === 3) {
      getData();
      console.log(arrInfo);
      console.log(userInfo);
      arrInfo.push({ userInfo });
      localStorage.setItem('ARRINFO', JSON.stringify(arrInfo));
      $tabs[currentTab].style.display = 'none';
      currentTab = currentTab + 1;
      showTab(currentTab);
      $btnBack.style.display = 'none';
      $btnNext.style.display = 'none';
    }
  } else {
    console.log(currentTab);
    $tabs[currentTab].style.display = 'none';
    currentTab = currentTab + n;
    showTab(currentTab);
  }
}

function getData() {
  arrInfo = JSON.parse(localStorage.getItem('ARRINFO')) || [];
}
