(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  document.addEventListener("DOMContentLoaded", () => {
    let flash = document.querySelector(".flash-msg");
  
    if (flash) {
      // Auto remove after 3 seconds
      setTimeout(() => {
        flash.classList.add("flash-hide");
        setTimeout(() => flash.remove(), 500);
      }, 3000);
  
      // Close button click
      let closeBtn = flash.querySelector(".btn-close");
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          flash.classList.add("flash-hide");
          setTimeout(() => flash.remove(), 500);
        });
      }
    }
  });