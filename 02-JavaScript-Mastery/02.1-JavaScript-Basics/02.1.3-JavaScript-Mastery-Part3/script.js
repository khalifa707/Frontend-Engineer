// *********** Async JavaScript ***********
/*
//setTimeout & clearTimeout
// setTimeout( changeText, 2000);

function changeText() {
    document.querySelector('.text').textContent = 'Hello';
}
const timerId = setTimeout(changeText, 2000);
document.querySelector('#stop').addEventListener('click', () => {
    clearTimeout(timerId);
    console.log('Timer Cancelled');
});*/

/*
//setInterval & clearInterval
/!*const intervalId = setInterval(myCallback, 1000);

function myCallback() {
    console.log(Date.now());
}*!/
let intervalId;

function startChange() {
    if(!intervalId){
        intervalId = setInterval(changeColor, 1000);
    }
}

function changeColor() {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.querySelector('.text').style.color = colors[randomIndex];
}

function stopChange() {
    clearInterval(intervalId);
}
document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);*/

/*
//CallBacks
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
];

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    setTimeout(()=> {
        posts.forEach((post)=>{
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('.posts').appendChild(div);
        })
    });
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
getPosts();*/
