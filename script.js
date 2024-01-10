const addToCart = (target)=> {
    const cart = document.getElementById('cart')
   const item = target.parentNode.parentNode.childNodes[1].innerText
   const li = document.createElement('li')
   li.innerText= item
   li.classList= `font-bold text-2xl`
   cart.appendChild(li)
   const removeBtn = document.createElement('button')
   removeBtn.innerText = 'X'
   removeBtn.classList= `  ml-20`
   li.appendChild(removeBtn)
   removeBtn.onclick=function(){
    cart.removeChild(li)
   }

}