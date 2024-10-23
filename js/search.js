// 商品データをlocalStorageから取得し、動的に表示する関数
function fetchAndDisplayProducts(sortBy = 'low', query = '') {
    const products = JSON.parse(localStorage.getItem('products')) || [];

    // 検索クエリに基づいて商品をフィルタリング
    let filteredProducts = products.filter(product => 
        product.name.includes(query) || product.category.includes(query)
    );

    // 商品を価格順にソート
    filteredProducts.sort((a, b) => {
        if (sortBy === 'low') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = ''; // 現在の表示内容をクリア

    filteredProducts.forEach(product => {
        // 画像が配列の場合、最初の画像を使用
        const productImage = Array.isArray(product.image) ? product.image[0] : product.image;

        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <div class="product-image">
                <a href="productdetail.html?id=${product.id}">
                    <img src="${productImage}" alt="${product.name}" loading="lazy">
                </a>
            </div>
            <p>${product.name}</p>
            <p>¥${product.price.toLocaleString()}</p>
        `;
        productGrid.appendChild(productItem);
    });
}

// ソートボックスの変更イベントを監視
document.getElementById('sortOptions').addEventListener('change', function() {
    const sortBy = this.value;
    const searchQuery = document.getElementById('search-query').value;
    fetchAndDisplayProducts(sortBy, searchQuery);
});

// 検索フォームのイベントリスナー
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchQuery = document.getElementById('search-query').value;
    fetchAndDisplayProducts('low', searchQuery);
});

// URLから検索クエリを取得する関数
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// ページロード時に商品を表示
window.onload = function() {
    const query = getQueryParam('query') || '';  // URLから検索クエリを取得
    fetchAndDisplayProducts('low', query);  // 検索クエリを使って商品を表示
};
