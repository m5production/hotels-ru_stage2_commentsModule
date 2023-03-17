import { addComment } from "../model/commentList.js";
import { showComment } from "../view/comments-list-logics.js";
import { initializeDate } from "../view/initializeDate.js";

const form = document.forms[0];

form.onsubmit = (e) => onFormSubmit(e);

function onFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const commentData = {
    username: form[0].value,
    userComment: form[1].value,
    userDate: new Date(form[2].value)
  }

  // addComment(commentData);
  showComment(commentData);

  clearForm();
}

function clearForm() {
  form[0].value = '';
  form[1].value = '';
  initializeDate();
}