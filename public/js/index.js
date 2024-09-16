document.getElementById(`theme`).addEventListener(`click`,function(){
    let x=document.getElementById(`theme-dark`);
    let y=document.getElementById(`dropdownMenuButton2`);
    let z=document.getElementById(`dropdownMenuButton1`);
     let p=document.getElementById(`dropdownMenuButton3`);
    let m = document.getElementById(`footer`);
    console.log(x.classList.contains(`theme-dark`));
    if(x.classList.contains(`theme-dark`))
    {
        console.log("changing to light");
    x.classList.add(`theme-light`);
    x.classList.remove(`theme-dark`);
    y.classList.remove(`btn-secondary`);
    y.classList.add(`btn-light`);
    z.classList.remove(`btn-secondary`);
    z.classList.add(`btn-light`);
    p.classList.remove(`btn-secondary`);
    p.classList.add(`btn-light`);
    m.classList.add(`footer1`);
    }
    else
    {
        console.log("changing to dark");
    x.classList.add(`theme-dark`);
    x.classList.remove(`theme-light`);
    y.classList.add(`btn-secondary`);
    y.classList.remove(`btn-light`);
    z.classList.add(`btn-secondary`);
    z.classList.remove(`btn-light`);
    p.classList.add(`btn-secondary`);
    p.classList.remove(`btn-light`);
    m.classList.remove(`footer1`);
    }
});






