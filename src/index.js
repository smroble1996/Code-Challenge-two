// console.log("you got this!");

const imageUrl = 'https://distinct-vaulted-freesia.glitch.me/image';
const fgTitle = el('fg-title');
const fgImage = el('fg-image');
const fgLikes = el('fg-likes');
const fgComments = el('fg-comments');
const likeButton = el('like-button');
const commentForm = el('comment-form');

likes = 0;

likeButton.addEventListener('click', () => {
        likes += 1;
        renderLikes(likes)
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
    renderLikes(likes);
    loadcomment(data.comments)
}

function renderLikes(likes){
fgLikes.innerText = `${likes} likes`
};

function setComment(comment){
    const li = document.createElement('li');
    li.innerText = comment;
    console.log(comment)
    fgComments.append(li);
}

function el(id){
    return document.getElementById(id);
}

function loadcomment(comment){
comment.forEach(comment => {
        console.log(comment.content)
        const li = document.createElement('li');
    li.innerText = comment.content;
    fgComments.append(li);
    });
}