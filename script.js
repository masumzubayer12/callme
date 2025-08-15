const btn = document.getElementById("btn");
btn.addEventListener("click" , () => {
    Notification.requestPermission().then(perm => {
        if(perm === "granted"){
            new Notification("🔴" ,{
                body : "Come here" ,
                icon : "logo.jpg",
            })
        }
    })
})
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click" , () => {
    Notification.requestPermission().then(perm => {
        if(perm === "granted"){
            new Notification("🟣",{
                body : "Come here" ,
                icon : "logo.jpg",
            })
        }
    })
})
