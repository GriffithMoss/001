document.addEventListener('DOMContentLoaded', () => {
  renderLogin();
  fetchCategoriesAndRender();
});

let currentUser = null;
let cart = [];

function renderLogin() {
  document.getElementById('register').innerHTML = `
    <h2>Login</h2>
    <form id="login-form">
      <input type="text" id="login-username" placeholder="Username" required />
      <input type="password" id="login-password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <div id="login-message"></div>
    <hr />
    <h2>Register</h2>
    <form id="register-form">
      <input type="text" id="username" placeholder="Username" required />
      <input type="email" id="email" placeholder="Email" required />
      <input type="password" id="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <div id="register-message"></div>
  `;

  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(data => {
        const msg = document.getElementById('login-message');
        if (data.error) {
          msg.textContent = data.error;
          msg.style.color = 'red';
          showToast(data.error, '#c0392b');
        } else {
          msg.textContent = 'Login successful!';
          msg.style.color = 'green';
          showToast('Login successful!', '#27ae60');
          currentUser = data;
          renderUserUI();
        }
      });
  });

  document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    fetch('/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    })
      .then(res => res.json())
      .then(data => {
        const msg = document.getElementById('register-message');
        if (data.error) {
          msg.textContent = data.error;
          msg.style.color = 'red';
          showToast(data.error, '#c0392b');
        } else {
          msg.textContent = 'Registration successful!';
          msg.style.color = 'green';
          showToast('Registration successful!', '#27ae60');
          registerForm.reset();
        }
      });
  });
}

function renderUserUI() {
  const regSection = document.getElementById('register');
  if (!currentUser) {
    renderLogin();
    return;
  }
  regSection.innerHTML = `<h2>Welcome, ${currentUser.username}!</h2><button id="logout-btn">Logout</button>`;
  document.getElementById('logout-btn').onclick = () => {
    currentUser = null;
    renderLogin();
  };
}

function renderItems(items) {
  const itemList = document.getElementById('item-list');
  itemList.innerHTML = '';
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
      <img src="${item.image || 'https://via.placeholder.com/150'}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <strong>$${item.price.toFixed(2)}</strong>
      <br><button class="add-cart" data-id="${item.id}">Add to Cart</button>
    `;
    itemList.appendChild(div);
  });
  document.querySelectorAll('.add-cart').forEach(btn => {
    btn.onclick = function() {
      const id = this.getAttribute('data-id');
      const item = items.find(i => i.id == id);
      cart.push(item);
      renderCart();
      showToast('Added to cart!', '#2980b9');
    };
  });
}

function renderCart() {
  let cartDiv = document.getElementById('cart');
  if (!cartDiv) {
    cartDiv = document.createElement('div');
    cartDiv.id = 'cart';
    document.body.appendChild(cartDiv);
  }
  cartDiv.innerHTML = `<h2>Shopping Cart</h2>`;
  if (cart.length === 0) {
    cartDiv.innerHTML += '<p>Cart is empty.</p>';
    return;
  }
  cartDiv.innerHTML += '<ul>' + cart.map(item => `<li>${item.name} - $${item.price.toFixed(2)}</li>`).join('') + '</ul>';
  cartDiv.innerHTML += `<strong>Total: $${cart.reduce((a, b) => a + b.price, 0).toFixed(2)}</strong><br><button id="checkout-btn">Checkout</button>`;
  document.getElementById('checkout-btn').onclick = () => {
    showToast('Checkout not implemented (demo)', '#f39c12');
    cart = [];
    renderCart();
  };
}

function renderSearchBar(categories) {
  const itemsSection = document.getElementById('items');
  let searchDiv = document.getElementById('search-bar');
  if (!searchDiv) {
    searchDiv = document.createElement('div');
    searchDiv.id = 'search-bar';
    itemsSection.insertBefore(searchDiv, itemsSection.firstChild.nextSibling);
  }
  searchDiv.innerHTML = `
    <input type="text" id="search-input" placeholder="Search items..." />
    <select id="category-select">
      <option value="">All Categories</option>
      ${categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
    </select>
    <button id="search-btn">Search</button>
  `;
  document.getElementById('search-btn').onclick = () => {
    const q = document.getElementById('search-input').value;
    const category = document.getElementById('category-select').value;
    fetch(`/api/items/search?q=${encodeURIComponent(q)}&category=${encodeURIComponent(category)}`)
      .then(res => res.json())
      .then(renderItems);
  };
}

function fetchCategoriesAndRender() {
  fetch('/api/items')
    .then(res => res.json())
    .then(items => {
      const categories = [...new Set(items.map(i => i.category).filter(Boolean))];
      renderSearchBar(categories);
      renderItems(items);
    });
}

function showToast(message, color = '#2d3e50') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.background = color;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 2500);
}
