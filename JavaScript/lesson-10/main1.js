let delta_w = 0; // Изменение по ширине
let delta_h = 0; // Изменение по высоте


   
block_r = document.getElementById("square-rect"); // Получаем блок для изменения размеров

document.onmouseup = clearXY; 
block_r.onmousedown = saveWH; 

  function getXY(obj_event) {
    if (obj_event) {
      x = obj_event.pageX;
      y = obj_event.pageY;
    }
    else {
      x = window.event.clientX;
      y = window.event.clientY;
      if (ie) {
        y -= 2;
        x -= 2;
      }
    }
    return new Array(x, y);
  }
  function saveWH(obj_event) {
    let point = getXY(obj_event);
    w_block = ball.clientWidth; 
    h_block = ball.clientHeight; 
    delta_w = w_block - point[0]; 
    delta_h = h_block - point[1]; 
    document.onmousemove = resizeBlock;
    if (op || ff) document.addEventListener("onmousemove", resizeBlock, false);
    return false; 
  }
 
  function clientWidth() {
    return image.width;
  }
 
  function clientHeight() {
    return image.height;
  }

  function clearXY() {
    document.onmousemove = null;
  }
  function resizeBlock(obj_event) {
    let point = getXY(obj_event);
    new_w = delta_w + point[0]; 
    new_h = delta_h + point[1];
    ball.style.width = new_w + "px";
    ball.style.height = new_h + "px"; 
    if (ball.offsetLeft + ball.clientWidth > clientWidth()) 
      ball.style.width = (clientWidth() - ball.offsetLeft)  + "px";
    if (ball.offsetTop + ball.clientHeight > clientHeight())
      ball.style.height = (clientHeight() - ball.offsetTop) + "px";
  }            