

export function FetchPopular() {

    let parentdiv=document.createElement('div')
    parentdiv.id = 'popular'
    fetch('https://www.reddit.com/r/popular.json')
    .then(response => response.json())
    .then(body => {
        for (let index=0;index<body.data.children.length;index++) {
            if(body.data.children[index].data.post_hint==='image'){
                let div=document.createElement('div')
                let h4=document.createElement('h4')
                let image=document.createElement('img')
                let h6=document.createElement('h5')
                let h5=document.createElement('h6')
                image.src=body.data.children[index].data.thumbnail
                h4.textContent=body.data.children[index].data.title
                h5.textContent=body.data.children[index].data.author
                h6.textContent=body.data.children[index].data.subreddit_name_prefixed
                div.appendChild(h4)
                div.appendChild(h6)
                div.appendChild(h5)
                div.appendChild(image)
                parentdiv.appendChild(div)
            }
        }
        document.body.appendChild(parentdiv)

}
)}