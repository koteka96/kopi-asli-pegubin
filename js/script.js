// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu diklik
document.querySelector('#menu').onclick = () =>{
	navbarNav.classList.toggle('active');
};

// Klik diluar side bar untuk menghilangkan nav
const menu = document.querySelector('#menu');

document.addEventListener('click',function(e){
	if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
		navbarNav.classList.remove('active');
	}
});