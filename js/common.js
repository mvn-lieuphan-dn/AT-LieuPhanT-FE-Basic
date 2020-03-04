var currentTab = 0;
showTab(currentTab);
function showTab(n) {
  $tabs[n].style.display = 'block';
  if (n === 0) {
    $btnSwitch4.style.display = 'none';
    $btnSwitch5.style.display = 'none';
    $btnBack.style.display = 'none';
    $btnList.style.width = '40%';
  } else {
    $btnSwitch4.style.display = 'flex';
    $btnSwitch5.style.display = 'flex';
    $btnBack.style.display = 'inline';
    $btnList.style.width = '77%';
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

function ramdomSMS() {
  return (
    Math.floor(Math.random() * 10).toString() +
    Math.floor(Math.random().toString() * 10) +
    Math.floor(Math.random() * 10).toString() +
    Math.floor(Math.random() * 10).toString()
  );
}

var arrInfo = [];
var userInfo = {};
function showInfo() {
  var $fName = document.getElementById('js-first-name');
  var $lName = document.getElementById('js-last-name');
  document.getElementById("js-c-fname").innerHTML =
    '<span class="info-detail" id="js-c-pass">' + $fName.value + '</span>';
  document.getElementById("js-c-lname").innerHTML =
    '<span class="info-detail" id="js-c-pass">' + $lName.value + '</span>';
  document.getElementById("js-c-email").innerHTML =
    '<span class="info-detail" id="js-c-pass">' + $emailValue.value + '</span>';
  document.getElementById("js-c-password").innerHTML =
    '<span class="info-detail" id="js-c-pass">' + $passConf.value + '</span>';
  userInfo = {
    fistName: $fName.value,
    lastName: $lName.value,
    email: $emailValue.value,
    password: $passConf.value,
    phone: phone
  };
}

function nextTab(n) {
  var $errorPhone= document.getElementById('js-error-phone');
  
  if (n === 1) {
    if (currentTab === 0 && validateInfo()) {
      $tabs[currentTab].style.display = 'none';
      currentTab = currentTab + 1;
      showTab(currentTab);
    }
    else if (currentTab === 1) {
      if (validatePhone()) {
        $tabs[currentTab].style.display = 'none';
        currentTab = currentTab + 1;
        showTab(currentTab);
        console.log(ramdom)
        alert('CODE SMS: ' + ramdom);
        $errorPhone.style.display = 'none';
      } else {
        console.log($errorPhone)
        $errorPhone.style.display = 'inline';
      }
    }
    else if (currentTab === 2) {
      if (validateCode()) {
        $tabs[currentTab].style.display = 'none';
        currentTab = currentTab + 1;
        showTab(currentTab);
        showInfo();
        $btnNext.value = 'submit';
        $errorCode.style.display = 'none';
      } else {
        $errorCode.style.display = 'inline';
      }
    } else if (currentTab === 3) {
      arrInfo.push({ userInfo });
      $tabs[currentTab].style.display = 'none';
      currentTab = currentTab + 1;
      showTab(currentTab);
      $btnBack.style.display = 'none';
      $btnNext.style.display = 'none';
      console.log(arrInfo);
    }
  } else {
    $tabs[currentTab].style.display = 'none';
    currentTab = currentTab + n;
    showTab(currentTab);
  }
}

function autoTab(current, to) {
  if (current.getAttribute && current.value.length == current.getAttribute('maxlength')) {
    to.focus();
  }
}
