var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});




$("#cv").click(function(){
    
    open('./soy.html')

  });

  
  $("#correo").click(function(){
    
    alert("Su correo ha sido enviado en forma exitosa...");

  });