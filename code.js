"use strict"
//functions

let check = (item, _class) => item.classList.contains(_class);
let add = (item, _class) => item.classList.add(_class);
let remove = (item, _class) => item.classList.remove(_class);

// variables

let nav_btn = document.getElementById("nav-btn");

let nav_items = document.getElementById("nav-items-js");

//event listners

nav_btn.addEventListener("click", (e) => {
    if (check(e.target, "fa-bars")) {
        remove(nav_btn.firstElementChild, "hidden");
        add(nav_btn.lastElementChild, "hidden");
        remove(nav_items, "nav-items-desktop");
        add(nav_items, "nav-items-mobile");
    }
    else if (check(e.target, "fa-times")) {
        add(nav_btn.firstElementChild, "hidden");
        remove(nav_btn.lastElementChild, "hidden");
        add(nav_items, "nav-items-desktop");
        remove(nav_items, "nav-items-mobile");
    }
})