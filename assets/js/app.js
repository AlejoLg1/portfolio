/*---------------DIFUMINAR HEADER---------------*/

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#222';
    } else {
        header.style.backgroundColor = '#333333CC';
    }
});


window.onload = function() {
    window.scrollTo(0, 0);
};


/*---------------SCROLL---------------*/

function smoothScroll(target, offset = 0) {
    const element = document.querySelector(target);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition + offset;

        window.scrollTo({
            top: offsetPosition,
        });
    }
}

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'), -100);
    });
});


/*---------------PROJECTS-MODAL---------------*/

function setupModal(modalId, openButtonId, closeButtonClass) {
    var modal = document.getElementById(modalId);
    var btn = document.getElementById(openButtonId);
    var closeBtn = document.getElementsByClassName(closeButtonClass)[0];
    var header = document.querySelector('header');

    window.onscroll = function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    btn.onclick = function() {
        modal.classList.add('show');
        modal.style.display = 'block';
        setTimeout(function() {
            modal.style.opacity = '1';
        }, 10);
        document.body.classList.add("no-scroll");

        header.classList.add("hide-header");
    }

    closeBtn.onclick = function() {
        modal.style.opacity = '0';
        setTimeout(function() {
            modal.classList.remove('show');
            modal.style.display = 'none';
        }, 500);
        document.body.classList.remove("no-scroll");

        header.classList.remove("hide-header");
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.opacity = '0';
            setTimeout(function() {
                modal.classList.remove('show');
                modal.style.display = 'none';
            }, 500);
            document.body.classList.remove("no-scroll");

            header.classList.remove("hide-header");
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setupModal('Modal', 'openModal', 'closeModal');
});


/*---------------ENVIAR MAIL---------------*/

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        Swal.fire({
            title: 'Error',
            text: 'Por favor, completa todos los campos.',
            icon: 'error',
            showConfirmButton: false,
            timer: 4000,
            background: '#fefefe',
            backdrop: `
                rgba(0, 0, 0, 0.4)
                left top
                no-repeat
            `
        });
        return;
    }

    Swal.fire({
        title: '¡Mensaje enviado!',
        text: 'Me pondré en contacto pronto.',
        icon: 'success',
        showConfirmButton: false,
        timer: 3000,
        background: '#fefefe',
        iconColor: '#30d643',
        backdrop: `
            rgba(0, 0, 0, 0.4)
            left top
            no-repeat
        ` 
    }).then(() => {
        setTimeout(() => {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        }, 100);
    });
});





