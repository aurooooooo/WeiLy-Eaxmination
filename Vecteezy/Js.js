// 导航栏滑动显示相应的部分
const showimgs = document.querySelectorAll('.showimg .img')
const navLis = document.querySelectorAll('.nav ul li')
const showMore = document.querySelector('.showMore')
for (let i = 0; i < navLis.length - 3; i++) {
  // 给前三个元素加上鼠标经过事件
  navLis[i].addEventListener('mouseenter', function () {
    for (let j = 0; j < showimgs.length; ++j) {
      showMore.style.display = 'block'
      showimgs[j].style.backgroundImage = `url(./image/galaxy${i + 1}.png)`
      showimgs[j].innerHTML = `galaxy${i + 1}`
    }
  })
  // 并加上鼠标离开事件
  navLis[i].addEventListener('mouseleave', function () {
    showMore.style.display = 'none'
  })
}
// 假如扩展模块处于打开状态，鼠标移入扩展模块则不关闭
showMore.addEventListener('mouseenter', function () {
  if (showMore.style.display = 'block') { showMore.style.display = 'block' }
})
// 离开事件
showMore.addEventListener('mouseleave', function () {
  showMore.style.display = 'none'
})

// 同理可得
const more = document.querySelector('.more')
navLis[5].addEventListener('mouseenter', function () {
  more.style.display = 'flex'
})
navLis[5].addEventListener('mouseleave', function () {
  more.style.display = 'none'
})

more.addEventListener('mouseenter', function () {
  if (more.style.display = 'flex') { more.style.display = 'flex' }
})
more.addEventListener('mouseleave', function () {
  more.style.display = 'none'
})


// 替换搜索框文字
const searchType = document.querySelector('select[name="Search-type"]')
const searchContent = document.querySelector('.banner form input')
// console.log(searchType);
// console.log(searchContent);
searchType.addEventListener('click', function () {
  searchContent.placeholder = `Search ${this.value}...`
})


// 倒计时模块
// 根据时间戳计算目标时间的毫秒差 再计算出相应的时分秒
function setCount() {
  // 将目标时间与现在时间的差计算出来得到毫秒差，再/1000得到秒差 
  const restTime = (+new Date('2024-5-21') - +new Date()) / 1000
  //console.log(restTime)
  let d = parseInt(restTime / 60 / 60 / 24)
  document.querySelector('.restTime .d').innerHTML = d < 10 ? '0' + d : d
  let h = parseInt(restTime / 60 / 60 % 24)
  document.querySelector('.restTime .h').innerHTML = h < 10 ? '0' + h : h
  let m = parseInt(restTime / 60 % 60)
  document.querySelector('.restTime .m').innerHTML = m < 10 ? '0' + m : m
  let s = parseInt(restTime % 60)
  document.querySelector('.restTime .s').innerHTML = s < 10 ? '0' + s : s
}

//先设置一下倒计时,因为定时器要经过设定的时间，也就是1s后，才生效
setCount()
setInterval(setCount, 1000)

// 关闭按钮
document.querySelector('.countdown i').addEventListener('click',()=>{
  document.querySelector('.countdown').style.display = 'none'
})