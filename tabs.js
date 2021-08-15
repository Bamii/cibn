(function() {
  let currTab = 1;
  const tabButtons = document.querySelectorAll('[data-tab]');
  const dataModalButton = document.querySelectorAll('[data-modal]') // edited

  Array.from(tabButtons).forEach(tab => {
    const idx = tab.dataset.tab;
    
    tab.onclick = function() {
      document.querySelector(`[data-tab-target="${currTab}"]`).classList.remove('selected');
      document.querySelector(`[data-tab-target="${idx}"]`).classList.add('selected');
      
      document.querySelector(`[data-tab="${currTab}"]`).classList.remove('selected');
      document.querySelector(`[data-tab="${idx}"]`).classList.add('selected');
      currTab = idx;
    }
  });

  // start edited
  Array.from(dataModalButton).forEach(btn => {
    const modalTarget = btn.dataset.modal;

    btn.onclick = function () {
      currModal = modalTarget
      document.querySelector(`[data-modal-target=${modalTarget}]`).classList.toggle('visible')
    }
  })
  // end edited
})();