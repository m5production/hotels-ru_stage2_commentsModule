const commentsList = document.getElementById('comments-list');

export function showComment(commentData) {
  const commentDiv = document.getElementById('comment-template').content.cloneNode(true);
  commentDiv.querySelector('.user-name').textContent = commentData.username;
  commentDiv.querySelector('.comment-text').textContent = commentData.userComment;

  let date;

  try {
    date = formatDateTime(commentData.userDate);
  } catch(error) {
    console.warn(error);
  }

  commentDiv.querySelector('.publication-date').textContent = date;

  const removeBtn = commentDiv.querySelector('.remove-btn');
  removeBtn.onclick = removeCommentNode;

  commentsList.prepend(commentDiv);
}

function formatDateTime(commentDate) {
  const date = formatDate(commentDate);

  const time = formatTime();

  return `${date}, ${time}`;
}

function formatDate(commentDate) {
  const dateNow = new Date();

  if (dateNow - commentDate < 86400000) return 'Сегодня';
  if (dateNow - commentDate < 86400000 * 2) return 'Вчера';

  const year = commentDate.getFullYear();
  const month = commentDate.getMonth().toString().padStart(2, 0);
  const date = commentDate.getDate().toString().padStart(2, 0);

  return `${year}-${month}-${date}`;
}

function formatTime(){
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, 0);
  const minutes = date.getMinutes().toString().padStart(2, 0);

  return `${hours}:${minutes}`;
}

export function removeCommentNode(e) {
  const commentNode = e.target.closest('.comment-container');
  commentNode.remove();
}