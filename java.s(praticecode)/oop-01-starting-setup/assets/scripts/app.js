const productList ={
     products:  [
    { 
        title: 'A Pillow', 
    imageUrl: 'https://www.google.com/aclk?sa=l&ai=DChcSEwiknMSG3JH6AhVvkmYCHb_pD88YABADGgJzbQ&sig=AOD64_0jUJNPxCdfdyIlwrg75WlGNrbGFQ&adurl&ctype=5&ved=2ahUKEwjTrbSG3JH6AhU9g2MGHUjUAcAQvhd6BAgBEHM',
     price: 19.99, 
     description: 'A soft pillow!'
    },

    {
         title: 'A carpet', 
    imageUrl: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjzlJrc35H6AhVCt5YKHVFZA54YABAJGgJ0bA&sig=AOD64_0AQbN9U6YoFWgDDv00B73N3YprJw&adurl&ctype=5&ved=2ahUKEwjb54bc35H6AhWo_zgGHc0iBaMQvhd6BAgBEH8',
     price: 89.99, 
     description:'A carpet which you might like - or not.'
    }
],
render(){
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for(const prod of this.products){
        const prodEl = document.createElement('li');
        prodEl.className= 'product-item';
        prodEl.innerHTML = `
          <div>
            <img src="${prod.imageUrl}" alt=""> 
          </div>
        ` ; 
        productList.append(prodEl);
    }
    renderHook.append();
}
};