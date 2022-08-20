// alert('hello')


var btn = document.querySelector('button');
const result = document.querySelector('.result');


btn.addEventListener('click', function(event){
    event.preventDefault()

    var input = document.querySelector('#searchbox').value;
    
    var originalName = input.split(' ').join('');

    // alert(originalName)
    fetch(`https://api.github.com/users/${input}`)
    .then((result) => result.json())
    .then((data) => {
        // console.log(data)

        result.innerHTML = `
        <div class="head">
            <div class="imag">
                <img src="${data.avatar_url}" alt="img">
            </div>
        </div>
        <div class="userinfo">
            <div class="gitUser">${data.login}</div>
            <div class="joineddate">${data.company}</div>
        </div>
        `
        var gitfact = document.querySelector('.gitfact');
        gitfact.innerHTML =
        `
            <div class="bio">${data.bio}</div>
            `

        var gitrepo = document.querySelector('.gitrepo');
        gitrepo.innerHTML =
        `
            <div class="repoinfo">
                <div class="repos">Repos</div>
                <div class="followers">followers</div>
                <div class="following">following</div>
            </div>
        `
        var gitrepodata = document.querySelector('.gitrepodata');
        gitrepodata.innerHTML = `

            <div class="repoinfo">
                <div class="repos">${data.public_repos}</div>
                <div class="followers">${data.followers}</div>
                <div class="following">${data.following}</div>
            </div>
        `
    })
})
   