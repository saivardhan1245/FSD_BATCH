// Basic contact form handling
document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
      if(!name||!email||!message){
        showAlert('Please fill required fields.','danger');
        return;
      }
      // Here you'd normally send the data to server or email API
      showAlert('Thanks '+name+" — your message has been received.",'success');
      form.reset();
    });
  }
});

// Show a Bootstrap-style alert in the contact area
function showAlert(message,type='info'){
  let container = document.getElementById('contactAlert');
  if(!container){
    const col = document.querySelector('#contact .col-md-8');
    container = document.createElement('div');
    container.id = 'contactAlert';
    col.prepend(container);
  }
  container.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show alert-custom" role="alert">${message}<button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert"></button></div>`;
}

// Cursor sprinkle effect: create small sparks on mouse move
(function cursorSparks(){
  let last = 0;
  window.addEventListener('mousemove', (e)=>{
    const now = Date.now();
    if(now - last < 40) return; // throttle
    last = now;
    const spark = document.createElement('span');
    spark.className = 'spark';
    // random color near accent
    const colors = ['#6ef',' #9ff','#c8f'];
    spark.style.left = e.clientX + 'px';
    spark.style.top = e.clientY + 'px';
    spark.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(13,110,253,0.9))';
    const scale = 0.6 + Math.random()*1.4;
    document.body.appendChild(spark);
    requestAnimationFrame(()=>{
      spark.style.transform = `translate(-50%,-50%) scale(${scale})`;
      spark.style.opacity = '0';
    });
    setTimeout(()=>spark.remove(),800);
  });
})();
