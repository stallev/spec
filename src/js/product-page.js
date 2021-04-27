'use strict'
//счетчик товаров
let countBox = document.querySelectorAll('.count-box');
if(countBox){
  countBox.forEach(
    counter => {
      let minusBtn = counter.querySelector('.count-box__minus');
      let plusBtn = counter.querySelector('.count-box__plus');
      let countField = counter.querySelector('.count-box__value');
      let countStr = countField.value;
      let countValue = Number(countStr);
      minusBtn.addEventListener('click', function(e){
        e.preventDefault();
        if(countValue > 1){
          countValue--;
          countStr = String(countValue);
          countField.value = countStr;
        }
      });
      plusBtn.addEventListener('click', function(e){
        e.preventDefault();
        if(countValue < 100000){
          countValue++;
          countStr = String(countValue);
          countField.value = countStr;
        }
      });
    }
  )
}

//быстрый просмотр
let quickviewBtns = document.querySelectorAll('.perf-item__quick-view');
let quickviewCloseBtn = document.querySelector('.product-quickview__icon-close-wrap');
let productQuickviewOverlay = document.querySelector('.product-quickview__overlay');
if(quickviewBtns){
  quickviewBtns.forEach(
    btn => {
      btn.addEventListener('click', function(e){
        e.preventDefault();
        document.body.classList.add('quickview');
      })
    }
  )
}
if(quickviewCloseBtn){
  quickviewCloseBtn.addEventListener('click', function(){
    document.body.classList.remove('quickview');
  });
}
if(productQuickviewOverlay){
  productQuickviewOverlay.addEventListener('click', function(){
    document.body.classList.remove('quickview');
  });
}
