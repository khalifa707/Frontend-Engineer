function ferchUser (){
    fetch('https://randomuser.me/api/')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            displayUser(data.results[0]);
        });
}

function displayUser(user) {
    const userDisplay = document.getElementById('user');
    userDisplay.innerHTML = `
          <div class="flex justify-between">
  <div class="flex">
    <img
      class="w-48 h-48 rounded-full mr-8"
      src="${user.picture.large}"
    />
    <div class="space-y-3">
      <p class="text-xl">
        <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
      </p>
      <p class="text-xl">
        <span class="font-bold">Email: </span> ${user.email}
      </p>
      <p class="text-xl">
        <span class="font-bold">Phone: </span> ${user.phone}
      </p>
      <p class="text-xl">
        <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
      </p>
      <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
    </div>
  </div>
</div>
    `;
    if (user.gender === 'female') {
        document.body.style.backgroundColor = 'pink';
    }else {
        document.body.style.backgroundColor = 'lightblue';
    }
}


document.getElementById('generate').addEventListener('click', ferchUser);
ferchUser();