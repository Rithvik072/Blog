const btnContainer = document.getElementById('btncontainer')
const btns = btnContainer.getElementsByClassName('btn')
const posts = document.getElementsByClassName('blogpost')

for(var i=0; i < btns.length; i++) {
    btns[i].addEventListener("click", (ev) => {
        let current = document.getElementsByClassName("active")
        current[0].className = current[0].className.replace('active', "")
        ev.target.classList += " active"

        for(let i=0; i < posts.length; i++){

            if(ev.target.name === 'all'){
                posts[i].classList.remove('filter')
            }
            else{
                if(!posts[i].classList.contains(ev.target.name)){
                    posts[i].classList.add('filter')
                }
                else{
                    posts[i].classList.remove('filter')
                }
            }
        }
    })
}