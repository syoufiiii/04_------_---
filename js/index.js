

// $(document).on('ready', function() {
//   $(".full-screen").slick({
//     centerMode: true,
//     centerPadding: '-20%',
//     dots: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     speed: 1000,
//     slidesToShow: 1,
//     loop:true,
//   });
// });


// // // 商品データをランダムに取得して表示
// // fetch('assets/products.json')  // ここにproducts.jsonファイルのパスを指定
// //   .then(response => response.json())
// //   .then(products => {
// //       const productGrid = document.getElementById('random-products');
// //       const randomProducts = [];

// //       // ランダムに10個の商品を取得
// //       while (randomProducts.length < 10) {
// //           const randomIndex = Math.floor(Math.random() * products.length);
// //           const randomProduct = products[randomIndex];
// //           if (!randomProducts.includes(randomProduct)) {
// //               randomProducts.push(randomProduct);
// //           }
// //       }

// //       // ランダム商品をHTMLに追加
// //       randomProducts.forEach(product => {
// //           productGrid.innerHTML += `
// //               <div class="product-item">
// //                   <div class="product-image">
// //                       <a href="productdetail.html?id=${product.id}">
// //                           <img src="${product.image}" alt="${product.name}" loading="lazy">
// //                       </a>
// //                   </div>
// //                   <p>${product.name}</p>
// //                   <p>${product.price}円</p>
// //               </div>
// //           `;
// //       });
// //   })
// //   .catch(error => console.error('Error fetching products:', error));

