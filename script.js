// Update this number if your official WhatsApp ordering line changes.
const WHATSAPP_NUMBER = "254733311311";
const categories = ["All products", ...new Set(PRODUCTS.map(p=>p.category))];
const filters = document.getElementById("filters");
const grid = document.getElementById("product-grid");
const search = document.getElementById("search");

function money(value, unit="") {
  if (value === null || value === undefined) return "See options";
  return "KES " + value.toLocaleString("en-KE") + (unit ? " / " + unit : "");
}
function whatsappLink(message) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}
function addWhatsappLinks() {
  document.querySelectorAll("[data-whatsapp-general]").forEach(el=>{
    el.href=whatsappLink("Hello Nairobi Gymnastics Stores, I would like to make an enquiry about your products.");
    el.target="_blank"; el.rel="noopener";
  });
}
function renderFilters(active="All products") {
  filters.innerHTML="";
  categories.forEach(cat=>{
    const b=document.createElement("button");
    b.className="filter-btn"+(cat===active?" active":"");
    b.textContent=cat;
    b.addEventListener("click",()=>{document.querySelectorAll(".filter-btn").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderProducts(cat,search.value);});
    filters.appendChild(b);
  });
}
function renderProducts(category="All products", query="") {
  const q=query.trim().toLowerCase();
  const list=PRODUCTS.filter(p=>(category==="All products"||p.category===category) && (!q || (p.name+" "+p.category+" "+p.desc+" "+p.details).toLowerCase().includes(q)));
  grid.innerHTML="";
  if(!list.length){grid.innerHTML='<div class="empty-state">No products found. Try another search.</div>';return;}
  list.forEach(p=>{
    const card=document.createElement("article");card.className="product-card";
    const price=money(p.price,p.unit||"");
    const message=`Hello Nairobi Gymnastics Stores, I am interested in: ${p.name}. Please confirm availability and ordering details.`;
    card.innerHTML=`<div class="product-image"><img src="assets/product-${String(p.id).padStart(2,"0")}.jpg" alt="${p.name}" loading="lazy"></div>
      <div class="product-category">${p.category}</div><h3>${p.name}</h3><p class="product-desc">${p.desc}</p>
      <div class="product-bottom"><span class="price">${price}</span><a class="order-small" href="${whatsappLink(message)}" target="_blank" rel="noopener">Enquire / Order ↗</a></div>`;
    grid.appendChild(card);
  });
}
renderFilters();renderProducts();addWhatsappLinks();
search.addEventListener("input",()=>{const active=document.querySelector(".filter-btn.active")?.textContent||"All products";renderProducts(active,search.value);});
document.getElementById("year").textContent=new Date().getFullYear();
const toggle=document.querySelector(".menu-toggle"),nav=document.getElementById("nav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));
