// DOM Elements
const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = toggleBtn.querySelector('.theme-icon');
const themeText = toggleBtn.querySelector('.theme-text');
const rootEl = document.documentElement;
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const gallery = document.getElementById('product-gallery');
const noResults = document.getElementById('no-results');
const buyBtns = document.querySelectorAll('.buy-btn');

// State
let currentTheme = localStorage.getItem('theme') || 'light';
let currentCategory = 'all';
let currentSearch = '';
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  initializeEventListeners();
  updateCartCount();
});

// Theme Management
function initializeTheme() {
  rootEl.setAttribute('data-theme', currentTheme);
  updateThemeUI();
}

function updateThemeUI() {
  if (currentTheme === 'dark') {
    themeIcon.textContent = '☀️';
    themeText.textContent = 'Light Mode';
  } else {
    themeIcon.textContent = '🌙';
    themeText.textContent = 'Dark Mode';
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  rootEl.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  updateThemeUI();
  
  // Add smooth transition effect
  document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
  setTimeout(() => {
    document.body.style.transition = '';
  }, 300);
}

// Search and Filter Functionality
function initializeEventListeners() {
  // Theme toggle
  toggleBtn.addEventListener('click', toggleTheme);
  
  // Search functionality
  searchInput.addEventListener('input', debounce(handleSearch, 300));
  searchBtn.addEventListener('click', () => handleSearch());
  
  // Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      setActiveFilter(category);
      filterProducts();
    });
  });
  
  // Buy buttons
  buyBtns.forEach(btn => {
    btn.addEventListener('click', handleAddToCart);
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', handleKeyboardNavigation);
}

function setActiveFilter(category) {
  currentCategory = category;
  
  // Update active filter button
  filterBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.category === category) {
      btn.classList.add('active');
    }
  });
}

function handleSearch() {
  currentSearch = searchInput.value.toLowerCase().trim();
  filterProducts();
}

function filterProducts() {
  const cards = gallery.querySelectorAll('.card');
  let visibleCount = 0;
  
  cards.forEach(card => {
    const category = card.dataset.category;
    const title = card.querySelector('h2').textContent.toLowerCase();
    const description = card.querySelector('.card-description').textContent.toLowerCase();
    const price = card.querySelector('.price').textContent.toLowerCase();
    
    const matchesCategory = currentCategory === 'all' || category === currentCategory;
    const matchesSearch = !currentSearch || 
      title.includes(currentSearch) || 
      description.includes(currentSearch) || 
      price.includes(currentSearch);
    
    if (matchesCategory && matchesSearch) {
      card.style.display = 'block';
      visibleCount++;
      
      // Re-trigger animation for visible cards
      card.classList.remove('fade-in');
      void card.offsetWidth; // Trigger reflow
      card.classList.add('fade-in');
    } else {
      card.style.display = 'none';
    }
  });
  
  // Show/hide no results message
  if (visibleCount === 0) {
    noResults.style.display = 'block';
    gallery.style.display = 'none';
  } else {
    noResults.style.display = 'none';
    gallery.style.display = 'grid';
  }
}

// Cart Functionality
function handleAddToCart(event) {
  const card = event.target.closest('.card');
  const productName = card.querySelector('h2').textContent;
  const price = card.querySelector('.price').textContent;
  const image = card.querySelector('img').src;
  
  const product = {
    id: Date.now() + Math.random(),
    name: productName,
    price: price,
    image: image,
    quantity: 1
  };
  
  // Check if product already exists in cart
  const existingProduct = cart.find(item => item.name === productName);
  if (existingProduct) {
    existingProduct.quantity += 1;
    showNotification(`${productName} quantity updated in cart!`);
  } else {
    cart.push(product);
    showNotification(`${productName} added to cart!`);
  }
  
  // Save to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  
  // Add visual feedback
  const btn = event.target.closest('.buy-btn');
  btn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    btn.style.transform = '';
  }, 150);
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Update cart indicator if it exists
  let cartIndicator = document.querySelector('.cart-indicator');
  if (!cartIndicator && totalItems > 0) {
    cartIndicator = document.createElement('div');
    cartIndicator.className = 'cart-indicator';
    document.body.appendChild(cartIndicator);
  }
  
  if (cartIndicator) {
    cartIndicator.textContent = totalItems;
    cartIndicator.style.display = totalItems > 0 ? 'block' : 'none';
  }
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function showNotification(message) {
  // Remove existing notification
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create new notification
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  
  // Style the notification
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--accent);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    font-weight: 500;
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

function handleKeyboardNavigation(event) {
  // Escape key to clear search
  if (event.key === 'Escape') {
    searchInput.value = '';
    currentSearch = '';
    filterProducts();
    searchInput.blur();
  }
  
  // Enter key to trigger search
  if (event.key === 'Enter' && document.activeElement === searchInput) {
    handleSearch();
  }
}

// Cart indicator styles
const cartIndicatorStyles = `
  .cart-indicator {
    position: fixed;
    top: 20px;
    left: 20px;
    background: var(--accent);
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 600;
    z-index: 1000;
    box-shadow: var(--shadow-md);
    animation: bounce 0.6s ease;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

// Inject cart indicator styles
const style = document.createElement('style');
style.textContent = cartIndicatorStyles;
document.head.appendChild(style);

// Performance optimization: Intersection Observer for lazy loading
const observerOptions = {
  threshold: 0.1,
  rootMargin: '50px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    }
  });
}, observerOptions);

// Observe all images for lazy loading
document.querySelectorAll('img[data-src]').forEach(img => {
  observer.observe(img);
});

// Add smooth scrolling for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Export functions for potential external use
window.ProductGallery = {
  addToCart: handleAddToCart,
  filterProducts: filterProducts,
  toggleTheme: toggleTheme,
  getCart: () => cart,
  clearCart: () => {
    cart = [];
    localStorage.removeItem('cart');
    updateCartCount();
  }
};
