window.addEventListener("load", () => {

    /*=============== SHOW MENU ===============*/
    const navToggle = document.getElementById('navbar_toggle');
    const navMenu = document.getElementById('navbar_menu');

    navToggle.addEventListener('click', () => {
        showOrHideMenu();
    });

    const showOrHideMenu = () => {

        navMenu.classList.toggle('show-menu');
        navToggle.classList.toggle('show-icon');

    }

    /*=============== SHOW DROPDOWN MENU ===============*/
    const dropdownItems = document.querySelectorAll('.dropdown__item');

    dropdownItems.forEach((item) => {

        const dropdownButton = item.querySelector('.dropdown__button');

        dropdownButton.addEventListener('click', () => {

            const showDropdown = document.querySelector('.show-dropdown');
            if (showDropdown && showDropdown !== item) {
                toggleItem(showDropdown);
            }
            toggleItem(item);

        });

    });

    const toggleItem = (item) => {

        const dropdownContainer = item.querySelector('.dropdown__container');

        if (item.classList.contains('show-dropdown')) {
            item.classList.remove('show-dropdown');
            dropdownContainer.removeAttribute('style');
        } else {
            item.classList.add('show-dropdown');
            dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
        }
    }

    /*=============== DELETE DROPDOWN STYLES ===============*/
    const mediaQuery = matchMedia('(min-width: 1118px)');
    const dropdownContainer = document.querySelectorAll('.dropdown__container');

    // Function to remove dropdown styles in mobile mode when browser resizes
    const removeStyle = () => {
        if (mediaQuery.matches) {

            dropdownContainer.forEach((e) => {
                e.removeAttribute('style');
            });

            dropdownItems.forEach((e) => {
                e.classList.remove('show-dropdown');
            });
        }
    }

    addEventListener('resize', removeStyle);

    /*=============== SHOW & HIDE SEARCH BAR ===============*/
    const showSearchDropdownButton = document.querySelector(".show_search_dropdown_button");
    const searchDropdown = document.querySelector(".navbar_search_dropdown");
    const closeSearchDropdown = document.querySelector(".close_search_dropdown");

    showSearchDropdownButton.addEventListener("click", (e) => {
        searchDropdown.classList.add("visible_dropdown");
    });
    closeSearchDropdown.addEventListener("click", (e) => {
        searchDropdown.classList.remove("visible_dropdown");
    });

    /* ============== SHOW & HIDE ACCOUNT ===============*/
    const showAccountDropdownButton = document.querySelector(".show_account_dropdown_button");
    const accountDropdown = document.querySelector(".navbar_account_dropdown");
    const closeAccountDropdown = document.querySelector(".close_account_dropdown");

    showAccountDropdownButton.addEventListener("click", (e) => {
        accountDropdown.classList.add("visible_dropdown"); 
    });
    closeAccountDropdown.addEventListener("click", (e) => {
        accountDropdown.classList.remove("visible_dropdown");
    });

});