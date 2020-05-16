function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

var i = 0;
var txt=[];
var speed = 60;

function type(){
  typeWriter('Thinking Tomorrow', document.getElementById('heading'));
}

function typeWriter(text, element) {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed, text, element);
  }
}

$(document).ready(function (){
    $('[data-toggle="popover"]').each( function() {
      //try doing console log out of popover.
      id = $(this).attr('id');

      if (id=='sajjad'){
        title_tag = "<h4>Sajjad Ahmed</h4>"
        content_tag = '<div><p>Studying at Don Bosco School, Park Circus (class 9). A tech geek. Love to code and in love with Java and Python. Inquisitive about electronics.</p><a href="https://github.com/sajjad006" target="_blank"><i class="fab fa-github"></i>https://github.com/sajjad006</a><br><a target="_blank" href="mailto://mailsajjad006@gmail.com"><i class="far fa-envelope-open"></i> mailsajjad006@gmail.com</a></div>'
      }else{
        title_tag = "<h4>Hrishikesh Bhanja</h4>"
        content_tag = '<div><p>Student @ Don Bosco School Park Circus - class 9(13 years old). Love Python . AI admirer . Linux fan and Open Source fanatic . Best things in life are free !</p><a href="https://github.com/Hrishikesh-coder" target="_blank"><i class="fab fa-github"></i> https://github.com/Hrishikesh-coder</a><br><a target="_blank" href="mailto://hrishipotter123@gmail.com"><i class="far fa-envelope-open"></i> hrishipotter123@gmail.com</a></div>'
      }

      
      $(this).popover({
        title: title_tag, 
        content: content_tag,
        html: true,
        placement: "top",
        animation: true,
      }); 
    });
});