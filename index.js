const sideMenu=document.getElementById("aside")
const menuBtn=document.getElementById("menu-btn")
const closeBtn=document.getElementById("close-btn")
const themeToggler=document.querySelector(".theme-toggler")

menuBtn.addEventListener('click',()=>{
	console.log("menu button clicked!")
	sideMenu.classList.add('hidden')
})

closeBtn.addEventListener('click',()=>{
	sideMenu.classList.remove('hidden')
})

//close sidebar


closeBtn.addEventListener('click',()=>{
	sideMenu.style.display='none'
})

//change theme

themeToggler.addEventListener('click',() =>{
	document.body.classList.toggle('dark-theme-variables')
	themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
	themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})

//fill orders table

orders.forEach(order=>{
	const tr=document.createElement('tr')
	const trContent=`
					<td>${order.productName}</td>
					<td>${order.productNumber}</td>
					<td>${order.paymentStatus}</td>
					<td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending'? 'warning' : 'primary'}">${order.shipping}</td>
					<td class="primary">Details</td>
	`
	tr.innerHTML=trContent;
	document.querySelector('table .order').appendChild(tr)
})