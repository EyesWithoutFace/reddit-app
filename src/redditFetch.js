
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
                let h5=document.createElement('h5')
                let h6=document.createElement('h6')
                let a=document.createElement('a')
                image.src=body.data.children[index].data.url_overridden_by_dest
                h4.textContent=body.data.children[index].data.title
                h6.textContent=body.data.children[index].data.author
                h5.textContent=body.data.children[index].data.subreddit_name_prefixed
                a.src=body.data.children[index].data.url
                div.appendChild(h4)
                div.appendChild(h6)
                div.appendChild(h5)
                div.appendChild(image)
                parentdiv.appendChild(div)            
                h6.prepend('u/')
                let aTag = document.createElement('a')
                aTag.href = a
                div.appendChild(aTag)
                image.prepend(aTag)
            }
        }
        document.body.appendChild(parentdiv)

}
)}