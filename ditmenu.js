
/*
document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const mobileToggle = document.getElementById('mobileToggle');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mainMenu');
    const overlay = document.getElementById('overlay');
    const body = document.body;
    const mobileSubmenuToggles = document.querySelectorAll('.has-submenu > a');

    // 打开移动菜单
    mobileToggle.addEventListener('click', function() {
        mobileMenu.classList.add('open');
        overlay.classList.add('active');
        //body.classList.add('menu-open');
    });

    // 关闭移动菜单
    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        overlay.classList.remove('active');
        //body.classList.remove('menu-open');
    });

    // 点击遮罩层关闭菜单
    overlay.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        overlay.classList.remove('active');
        //body.classList.remove('menu-open');
    });

    // 按ESC键关闭菜单
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            mobileMenu.classList.remove('open');
            overlay.classList.remove('active');
            //body.classList.remove('menu-open');
        }
    });

    // 移动端子菜单切换
    mobileSubmenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            const parentLi = this.parentElement;
            const submenu = this.nextElementSibling;
            const arrow = this.querySelector('.arrow');
            
            // 关闭其他打开的子菜单
            document.querySelectorAll('.mobile-submenu.open').forEach(openSubmenu => {
                if (openSubmenu !== submenu) {
                    openSubmenu.classList.remove('open');
                    openSubmenu.previousElementSibling.querySelector('.arrow').classList.remove('rotate');
                }
            });
            
            // 切换当前子菜单
            submenu.classList.toggle('open');
            arrow.classList.toggle('rotate');
        });
    });
});
*/

class DiTMENU
{
	constructor(config = {'css':'theme/default.css'}){
	
		this.config = config;
		
	
	}
	
	loadCSS(href){
		var style=document.createElement('style');
		style.textContent = '@import url("'+href+'")';
		document.head.appendChild(style);
	}
	
	//绑定元素
	bind(objElementClassName){
		this.loadCSS(this.config.css);
		this.eleDitMenu = document.querySelector(objElementClassName);
	}
	
	//展示并响应事件
	show(){
		var mobileToggle = this.eleDitMenu.querySelector('#mobileToggle');
		var mobileSubmenuToggles = this.eleDitMenu.querySelectorAll('.has-submenu > a');
		var closeMenu = this.eleDitMenu.querySelector('#closeMenu');
		var mobileMenu = this.eleDitMenu.querySelector('#mainMenu');
		var overlay = document.getElementById('overlay');		//遮罩层
		var body = document.body;
		// 打开移动菜单
		mobileToggle.addEventListener('click', function(evt) {
			mobileMenu.classList.add('open');
			overlay.classList.add('active');
			//body.classList.add('menu-open');
		});
		
		// 关闭移动菜单
		closeMenu.addEventListener('click', function() {
			mobileMenu.classList.remove('open');
			overlay.classList.remove('active');
			//body.classList.remove('menu-open');
		});		
		
		// 移动端子菜单切换
		mobileSubmenuToggles.forEach(toggle => {
			toggle.addEventListener('click', function(e) {
				e.preventDefault();
				
				const parentLi = this.parentElement;
				const submenu = this.nextElementSibling;
				const arrow = this.querySelector('.arrow');
				
				// 关闭其他打开的子菜单
				document.querySelectorAll('.mobile-submenu.open').forEach(openSubmenu => {
					if (openSubmenu !== submenu) {
						openSubmenu.classList.remove('open');
						openSubmenu.previousElementSibling.querySelector('.arrow').classList.remove('rotate');
					}
				});
				
				// 切换当前子菜单
				submenu.classList.toggle('open');
				arrow.classList.toggle('rotate');
			});
		});
		
		// 按ESC键关闭菜单
		document.addEventListener('keydown', function(e) {
			if (e.key === 'Escape') {
				mobileMenu.classList.remove('open');
				overlay.classList.remove('active');
				//body.classList.remove('menu-open');
			}
		});
		
		// 点击遮罩层关闭菜单
		overlay.addEventListener('click', function() {
			mobileMenu.classList.remove('open');
			overlay.classList.remove('active');
			//body.classList.remove('menu-open');
		});
	}
}