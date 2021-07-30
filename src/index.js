// console.log("you got this!");

const imageUrl = 'https://distinct-vaulted-freesia.glitch.me/image';
const fgTitle = el('fg-title');
const fgImage = el('fg-image');
const fgLikes = el('fg-likes');
const fgComments = el('fg-comments');
const likeButton = el('like-button');
const commentForm = el('comment-form');

let likes = 0;

likeButton.addEventListener("click", () => {
    likes += 1;
    renderLikes();
});

commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    setComment(e.target.comment.value);

})

fetch(imageUrl)
    .then((res) => res.json())
    .then(renderImage);

function renderImage(data){
    fgTitle.innerText = data.title;
    fgImage.src = data.image;
    likes = data.likes;
    renderLikes();
    setComment(data.comments);

}

function renderLikes(likes){
fgLikes.innerText = `${likes} likes`
};

function setComment(comments) {
    fgComments.innerHTML = '';
    comments.forEach(comment => addComment(comment.content));
}

function setComment(comment){
    const li = document.createElement('li');
    li.innerText = comment;
    fgComments.append(li);
}

function el(id){
    return document.getElementById(id);
}