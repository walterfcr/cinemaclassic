

// Función para revelar lightbox y agregar reproducción automática de YouTube
function ejecutar(div,video_id) {
  var video = document.getElementById(video_id).src;
  //adicionar el autoplay URL
  document.getElementById(video_id).src = video+'&autoplay=1'; 
  document.getElementById(div).style.display = 'block';
}
 

// Ocultar la caja y eliminar la reproducción automática de YouTube
function ocultar(div,video_id) {
  var video = document.getElementById(video_id).src;
  //remover el autoplay URL
  var cleaned = video.replace('&autoplay=1',''); 
  document.getElementById(video_id).src = cleaned;
  document.getElementById(div).style.display = 'none';
}

function back(){
  window.history.back();
  return
};

document.querySelector("#back").addEvenetListener("click", e => {
  history.go(-1);
});