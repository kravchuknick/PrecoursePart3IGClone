const postsDiv = document.querySelector('#posts');
let loggedInUser;

function fetchData() {
    fetch("http://image-server-prod.eba-jqccpzay.us-west-2.elasticbeanstalk.com/images")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log('data', data);
            renderPosts(data);
        })
        .catch((error) => {
            console.log(error);
        })
    console.log('after fetch')
}

function renderPosts(photos) {
    postsDiv.innerHTML = '';
    photos.forEach((photo) => {
        const postContainer = document.createElement('div');
        postContainer.classList.add('post');
        postContainer.innerHTML = `
        <img class="post-image" src=${photo} onerror="this.src='https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'"
                alt="">
            <div class="likes">
                <i class="fa-regular fa-heart"></i>
                <p>shabai_9898, nanouck11, crichardson0563 and 1,588 others liked this</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div class="caption">
                <div class="profile-pic">
                    <img src="" alt="">
                </div>
                <div class="caption-content">
                    
                    <p><span class="username">${faker.internet.userName()}</span>${faker.lorem.sentence()}<br>
                    <span class="hashtag">#SUPPLIED #GETSUPPLIED</span></p>
                    <p>Shop Now:<br>${faker.internet.url()}</p>
                    <p>Follow us on Snapchat<br>Follow us on Youtube</p>
                    <div class="commentSection">
                         <textarea class="commentInput" placeholder="Add a comment..."></textarea>
                        <button class="postComment">Post</button>
                        <div class="comment-items">
                        </div>
                    </div>
                    </div>
            </div>
        `
        postsDiv.append(postContainer);
    })

// Like button below

    const postImages = document.querySelectorAll('.post-image')
    console.log(postImages);
    for (let i = 0; i < postImages.length; i++) {
        postImages[i].addEventListener('dblclick', e => {
            console.log(e.target.nextElementSibling.children[2])
            const heartIcon = e.target.nextElementSibling.firstElementChild;
            heartIcon.classList.toggle('fa-regular')
            heartIcon.classList.toggle('fa-solid')
        })
    }
    const commentButtons = document.querySelectorAll('.postComment');
    const commentContainer = document.querySelector('.comment-items');
    for (let i = 0; i < commentButtons.length; i++){
        commentButtons[i].addEventListener('click', e => {
            console.log(e.target.previousElementSibling.value)
            const paragraph = document.createElement('p');
            paragraph.classList.add('comment-item');
            paragraph.textContent = loggedInUser+': '+e.target.previousElementSibling.value;
            commentContainer.append(paragraph);
            e.target.previousElementSibling.value = '';
        })
    }
}


// Comment button below

document.addEventListener("DOMContentLoaded", function () {
    loggedInUser = localStorage.getItem('username');
    const currentUserDiv = document.querySelector('.current-user');
    const usernameSpan = document.createElement('span');
    usernameSpan.textContent = loggedInUser;
    currentUserDiv.append(usernameSpan);
    fetchData();
  
  });

// fetchData();

