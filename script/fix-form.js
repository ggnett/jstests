let fix_button = document.querySelector(".info_button");
let fix_form = document.querySelector(".fix-form");
let edit_name = document.querySelector(".edit_name");
let edit_work = document.querySelector(".edit_work")
let info_name = document.querySelector(".info_name")
let info_work = document.querySelector(".info_work")
let save_button = document.querySelector(".edit_save")
let closeButton= document.querySelector(".form_button-close")

fix_button.addEventListener("click", () => {
  fix_form.classList.add("visible_form");
  let name_str = info_name.innerText
  edit_name.setAttribute("value" , name_str)
  let work_str = info_work.innerText
  edit_work.setAttribute("value", work_str)
});

save_button.addEventListener("click", () => {
  let backNameStr = edit_name.value
  let backWorkStr = edit_work.value
  info_name.textContent=""
  info_work.textContent=""
  info_name.insertAdjacentText("afterbegin",backNameStr)
  info_work.insertAdjacentText("afterbegin",backWorkStr)
  fix_form.classList.remove("visible_form")
})

closeButton.addEventListener("click", () => {
  fix_form.classList.remove("visible_form")
})

