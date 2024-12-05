// 현재 날짜와 시간 header에 넣기

function updateTime() {
    // 날짜
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let 날짜 = `${year}년 ${month}월 ${day}일`;

    // console.log(날짜)

    // 시간
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let 시간 = `${hour}시 ${minutes}분 ${seconds}초`;

    //console.log(시간)

    document.querySelector('.date').innerHTML = 날짜;
    document.querySelector('.time').innerHTML = 시간;
}

setInterval(updateTime, 1000);
// ===========================================================================================

// 메뉴 나타내기
// 메뉴 눌렀을 때 왼쪽에서 애니메이션으로 부드럽게 나타나기 효과
const menu = document.querySelector('.menu');
console.log(menu)
const submenu = document.querySelectorAll('.menu li');

let menuClick = 0;
document.querySelector('.menuButton').addEventListener('click', () => {

    if (menuClick === 0) {
        menu.style.animation = 'menu 1.5s';
        menuClick += 1;

    } else {
        menu.style.animation = 'menuclose 1.5s forwards';
        menuClick = 0;
    }
})

// submenu 눌렀을 때 메뉴 사라지게 하기
// submenu의 개수만큼 forEach로 반복문 작성
submenu.forEach(submenu => {
    submenu.addEventListener('click', (e) => {
        menu.style.animation = 'menuclose 1.5s forwards';
        menuClick = 0;
    })
})

// ===========================================================================================

// 스크롤 header만큼 내리면 header 배경 투명도 넣기
// main에 글씨 나타나게 하기
const header = document.querySelector('.header');
const main = document.getElementsByTagName('main');

window.addEventListener('scroll', () => {
    // console.log(window.scrollY)

    if (window.scrollY > 100) {
        header.style.background = 'black';
        header.style.opacity = '0.7';
        header.style.color = 'white';
    } else {
        header.style.background = 'white';
        header.style.opacity = '1';
        header.style.color = 'black';
    }
})

// ===========================================================================================

// SCROLL 이동 시 작품 중간에 오도록 하기

// submenu.forEach(submenu => {
//     submenu.addEventListener('click', (e)=>{
//         const target = e.target.dataset.id;
//         const targetElement = document.querySelector(`#${target}`);
//         console.log(targetElement)

//         if(targetElement){
//             targetElement.scrollIntoView({
//                 block : 'center'
//             })
//         }
//     })
// })

// ===========================================================================================

// introTitle 애니메이션 실행하기
const introTitle = document.querySelector('.introTitle');
const intro = document.querySelector('.intro');

window.addEventListener('scroll', () => {
    // 495보다 크고 1500보다 작을 때
    if (window.scrollY >= 600) {
        introTitle.style.animation = 'updown 2s';
        intro.style.animation = 'downup 2s';
    }
})

// ===========================================================================================

// work-design 누르면 design 작품 보이도록 하기
let clickNum = 0;
$('.workTitle01').on('click', () => {

    if (clickNum === 0) {
        $('.section05').stop().slideDown(600).css('display', 'grid');
        clickNum += 1;
    } else {
        $('.section05').stop().slideUp(600).css('display', 'grid');
        clickNum = 0;
    }
})

$('.workTitle02').on('click', () => {

    if (clickNum === 0) {
        $('.section06').stop().slideDown(600).css('display', 'flex');
        clickNum += 1;
    } else {
        $('.section06').stop().slideUp(600).css('display', 'flex');
        clickNum = 0;
    }
})

// ===========================================================================

// design
// 모달창 띄우기
for (let i = 1; i <= 7; i++) {
    $('.work0' + i).on('click', function () {
        $('#work0' + i).css('display', 'block');
    });

    // 모달창 바깥 영역 클릭하면 모달창 닫기
    // work01~07은 모달 바깥 영역
    // 모달 내부는 .modal 안에 있는 코드
    $('#work0' + i).on('click', function (event) {
        // event.target = click 요소
        // 클릭요소가 모달창인지 확인하기
        if ($(event.target).is('#work0' + i)) {
            // $(this) = 현재 이벤트 발생 요소
            $(this).css('display', 'none');
        }
    });
}

// web
    // 반복문으로 모달창 열기
    for (let j = 1; j <= 4; j++) {
        $('.webWork0' + j).on('click', function () {
            $('#webwork0' + j).css('display', 'block');
        });

        // 작품 하나를 클릭했을 때
        $('#webwork0' + j).on('click', function (e) {
            // 클릭한 요소가 작품 모달창 바깥 영역인지 확인하기
            if ($(e.target).is('#webwork0' + j)) {
                // 바깥영역 클릭 시 모달창 닫기
                $(this).css('display', 'none');
            }
        });
    }