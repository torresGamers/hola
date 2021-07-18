// const numero = document.querySelector('.numero');
let num = 90181054;
// numero.addEventListener('keyup',()=>{
//   num=numero.value;
//   console.log(num)
//   return generador()
// })
const mensaje = document.querySelector('.mensaje');
let men = 0;
mensaje.addEventListener('keyup',()=>{
  men=mensaje.value.replace(/ /g,"%20")
  console.log(men)
  return generador()
})
 let generador = ()=>{
    let url = document.querySelector('.url').value=`https://.api.whatsapp.com/send?phone=${num}&text=${men}`
 }
 let btn = document.querySelector('.btn');
 btn.addEventListener('click',(e)=>{
     e.preventDefault()
     let enlace = document.querySelector('#enlace');
     enlace.select();
     document.execCommand('copy')
     btn.textContent = 'url copiado'
 })
