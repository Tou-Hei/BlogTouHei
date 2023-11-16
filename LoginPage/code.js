function pulsateTitle() {
    const title = document.getElementById('title');
    title.classList.add('pulsate');
  }
  
  
  pulsateTitle();

// 获取星星元素
const icon = document.getElementById('icon1');

// 设置星星的初始位置和速度
let posX = 0;
let posY = 0;
let speedX = 0.5;
let speedY = 0.5;

// 获取屏幕尺寸
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// 定义移动函数
function moveStar() {
  posX += speedX;
  posY += speedY;

  // 检测碰撞并反弹
  if (posX >= screenWidth || posX <= 0) {
    speedX = -speedX;
  }
  if (posY >= screenHeight || posY <= 0) {
    speedY = -speedY;
  }

  // 更新星星位置
  icon.style.left = posX + 'px';
  icon.style.top = posY + 'px';

  // 使用 requestAnimationFrame() 使动画更加平滑
  requestAnimationFrame(moveStar);
}

// 调用移动函数
moveStar();
