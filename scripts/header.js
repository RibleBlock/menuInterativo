let isApplied = false;

// if(screen.width > 1024) {
    
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header #header');
        const headerTop = this.scrollY;
        const timeout = 500;
        
        if(headerTop > (screen.width / 3.5) && !isApplied) {
            isApplied = true;
            
            const headerAni = header.animate([
                {},
                { height: '70px', backgroundColor: '#000' }
            ], timeout)
            
            headerAni.addEventListener('finish', () => {
                header.style.cssText += 'height: 70px; background: #000'
            });
        } else if(headerTop < (screen.width / 3.5) && isApplied) {
            isApplied = false;
            
            const returnH = header.animate([
                {},
                { height: '130px', backgroundColor: '#0000002c' }
            ], timeout)
            
            returnH.addEventListener('finish', () => {
                header.style.cssText += 'height: 130px; background: #0000002c;';
            });
        }
    });
// }

///// MENU-MOBILE /////
const btMenu = document.querySelector('#icon-menu');
const menuMobile = document.querySelector('#ul-mobile');
let isClicked = false;

btMenu.addEventListener('click', () => {
    
    if(!isClicked) {
        isClicked = true;
        menuMobile.style.display = 'flex';
        
        const mobileAni = menuMobile.animate([
            {height: '0rem'},
            {height: '40rem'}
        ], 200)

        mobileAni.addEventListener('finish', e => {
            menuMobile.style.cssText += 'height: 40rem;';
        });
        
    } else if(isClicked) {
        isClicked = false;
        
        const mobileRet = menuMobile.animate([
            {height: '40rem'},
            {height: '0rem'}
        ], 200)
        
        mobileRet.addEventListener('finish', e => {
            menuMobile.style.cssText += 'height: 0rem;';
            menuMobile.style.display = 'none';
        });
        
    }
});