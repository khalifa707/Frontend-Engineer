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

/*
//Promises
/!*const promise = new Promise((resolve, reject) => {
    //Do some Async task
    setTimeout(() => {
        console.log('Async task complete');
        resolve();
    }, 1000);
});

promise.then(()=>{
    console.log('Promise consumed');
});
const promise2 = new Promise((resolve, reject) => {
    //Do some Async task
    setTimeout(() => {
        resolve({name: 'John', age: 30});
    }, 1000);
}).then((user) => {
    console.log(user);
});*!/

const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({name: 'John', age: 30});
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
})

getUser.then((user) => {
    console.log(user);
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log('Promise finally resolved');
});*/

/*//Promise Chaining
const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({name: 'John', age: 30});
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
})

getUser.then((user) => {
    console.log(user);
    return user.name;
}).then((name) => {
    console.log(name);
    return name.length;
}).then((length) => {
    console.log(length);
}).catch((error) => {
    console.log(error)
})*/

/*
//Fetch API
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});*/

/*
//Fetch Options
function createPost({title, body}) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            'Content-Type': 'application/json',
            token: 'abc123'
        }
    }).then(res=> res.json()).then(data => console.log(data));
}
createPost({title: 'Custom Post', body: 'This is a custom post'});*/

/*
//Fetch Api Error Handling
fetch('https://httpstat.us/200')
.then((response) => {
    console.log('Response status:', response.status);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
}).then(() => {
    console.log('Success');
}).catch((error) => {
    console.error('Fetch error:', error);
});*/
