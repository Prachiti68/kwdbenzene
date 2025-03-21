(function() {
  // Product data
  const products = [
    { title: "Tungsten Carbide Wire Drawing Die", imageUrl: "assets/img/products_no_bg/tc_wire_drawing_die1.png", link: "tungstencarbidewiredrawingdie.html", buttonText: "LEARN MORE" },
    { title: "Tungsten Carbide Bar Drawing Die", imageUrl: "assets/img/products_no_bg/TC_bar_drawing_die1.png", link: "tcbardrawingdie.html", buttonText: "LEARN MORE" },
    { title: "PCD Wire Die (Polycrystalline)", imageUrl: "assets/img/products_no_bg/PCD_wire_drawing_die_1.png", link: "pcdwiredie.html", buttonText: "LEARN MORE" },
    { title: "Compex Diamond Die", imageUrl: "assets/img/products_no_bg/PCD_wire_drawing_die_5.png", link: "compexdiamonddie.html", buttonText: "LEARN MORE" },
    { title: "TC Shaped Bar Die", imageUrl: "assets/img/products_no_bg/tc_shaped_bar_die1.png", link: "tcshapedbardie.html", buttonText: "LEARN MORE" },
    { title: "TC Special Profile Shape Die", imageUrl: "assets/img/products_no_bg/TC_SPL_Profile_Shaped_dies1.png", link: "tcspecialprofileshapedie.html", buttonText: "LEARN MORE" },
    { title: "TC Valve Forging Die", imageUrl: "assets/img/products_no_bg/TC_Valve_Forging_Die1.png", link: "tcvalveforgingdie.html", buttonText: "LEARN MORE" },
    { title: "TC Dies for Concrete Nail", imageUrl: "assets/img/8.webp", link: "tcdiesforconcretenail.html", buttonText: "LEARN MORE" },
    { title: "TC Compacting Dies", imageUrl: "assets/img/7.webp", link: "tccompactingdies.html", buttonText: "LEARN MORE" },
    { title: "Die Reworking Machines & Consumables", imageUrl: "assets/img/products_no_bg/die_reworking_machines1.png", link: "diereworkingmachines.html", buttonText: "LEARN MORE" },
    { title: "I.D. Measuring Gauge Set", imageUrl: "assets/img/products_no_bg/ID_measuring_set4.png", link: "idmeasuringgaugeset.html", buttonText: "LEARN MORE" },
   
  ];

  let displayedProducts = 6; 
  let data = "";

  function displayProducts() {
    data = "";
    
    for (let i = 0; i < displayedProducts; i++) {
      if (i < products.length) {
        data += `
        <div class="bg-[#000035] p-8 shadow-2xl  rounded-3xl transition-all duration-300 hover:p-9 custom-border-radius"
          style="background-image:linear-gradient(rgba(0, 0, 0, 0.227),rgba(0, 0, 0, 0.44)), url('${products[i].imageUrl}'); background-size: contain; background-repeat: no-repeat; background-position: center; display: flex; flex-direction: column; justify-content: flex-end; height: 20rem; width: 24rem;">
          <a href="${products[i].link}" class="flex justify-center items-center flex-col">
            <h2 class="text-xl font-extrabold text-white mb-2">${products[i].title}</h2>
            <button type="button" class=" w-full sm:w-auto px-6 py-3 bg-white border border-[#000053] text-[#000053] font-semibold rounded-full  ease-in">
              ${products[i].buttonText}
            </button>
          </a>
        </div>
        `;
      }
    }
    
    document.querySelector('.productsec').innerHTML = data;
    
    if (displayedProducts < products.length) {
      document.getElementById('viewMoreBtn').classList.remove('hidden');
      document.getElementById('viewMoreBtn').textContent = 'View More';
    } else {
      document.getElementById('viewMoreBtn').textContent = 'View Less';
    }
  }
  
  displayProducts();
  
  document.getElementById('viewMoreBtn').addEventListener('click', () => {
    if (displayedProducts < products.length) {
      displayedProducts += 6;  
    } else {
      displayedProducts = 6;  
    }
    displayProducts(); 
  });
})();
