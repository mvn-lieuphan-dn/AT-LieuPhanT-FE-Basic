function validateInfo() {
  var validInfo = false;
  var validMail = false;
  var validPass = false;
  var y = $tabs[currentTab].getElementsByTagName('input');
  for (var i = 0; i < y.length; i++) {
    if (y[i].value === '') {
      $errorInfo[i].style.display = 'block';
      validInfo = false;
    } else {
      validInfo = true;
      $errorInfo[i].style.display = 'none';
    }
    if (i === 2) {
      var checkMail = validateEmail($emailValue.value);
      if (checkMail === false && y[i].value !== '') {
        $errorEmail.style.display = 'inline';
        validMail = false;
      }
      else if (checkMail === false && y[i].value === '') {
        $errorEmail.style.display = 'none';
        validMail = false;
      }
      else {
        validMail = true;
        $errorEmail.style.display = 'none';
        $errorInfo[i].style.display = 'none';
      }
    }
    if (i === 4) {
        if ($pass.value !== $passConf.value) {
          if($passConf.value !== '') {
          validPass = false;
          $errorPass.style.display = 'block';
          }
          else {
          $errorPass.style.display = 'none';            
          $errorInfo[i].style.display = 'block';
          }
        }        
         else {
           if($passConf.value === '') {
             validPass = false;
           }
          else {
          validPass = true;
          $errorPass.style.display = 'none';
          }
        }
    }
  }
  return validInfo * validMail * validPass;
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

var phone = '';
function validatePhone() {
  var checkPhone = true;
  var i;
  phone = '' + document.getElementById('js-phone1').value + ' ' + document.getElementById('js-phone2').value + ' ' + document.getElementById('js-phone3').value;
  var x = document.getElementsByClassName('js-tab')[1];
  var y = x.getElementsByTagName('input');
  for (i = 0; i < y.length; i++) {
    if (y[i].value.length < y[i].getAttribute('maxlength') || isNaN(y[i].value)) {
      checkPhone = false;
    }
    else {
      document.getElementById('js-c-phone').innerHTML = phone;
    }
  }
  return checkPhone;
}
