'use strict';
const pages={
 'cover':{title:'A gentle beginning.',page:1,copy:'The opening cover of your Quran Weekly Planner, with the QuranSkool identity and botanical artwork.'},
 'week-1':{title:'One week. One clear view.',page:2,copy:'Your intention, a Monday-to-Sunday practice grid, weekly goals, a Surah focus, reading times, and space for reflection.'},
 'week-12':{title:'A familiar rhythm to return to.',page:13,copy:'The twelfth weekly spread continues the same planning structure, with a new reminder and room for your next tiny goal.'},
 'closing':{title:'Your journey continues.',page:14,copy:'Close the planner with space to reflect on your journey, alongside a dua and encouragement to keep going.'}
};
let current='week-1';
const image=document.getElementById('selected-image');
const pageDialog=document.getElementById('page-dialog');
const checkoutDialog=document.getElementById('checkout-dialog');
document.querySelectorAll('[data-page]').forEach(button=>button.addEventListener('click',()=>{
 current=button.dataset.page;const page=pages[current];image.src=`assets/${current}.webp`;image.alt=`Actual ${current==='cover'?'cover':current==='closing'?'closing reflection':current.replace('-',' ')} page of the Quran Weekly Planner`;
 document.getElementById('preview-title').textContent=page.title;document.getElementById('preview-copy').textContent=page.copy;document.getElementById('preview-kicker').textContent=`PAGE ${String(page.page).padStart(2,'0')} OF 14`;
 document.querySelectorAll('[data-page]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
}));
document.getElementById('enlarge-page').addEventListener('click',()=>{document.getElementById('dialog-title').textContent=pages[current].title;const large=document.getElementById('dialog-image');large.src=image.src;large.alt=image.alt;pageDialog.showModal();pageDialog.scrollTop=0;});
document.getElementById('close-dialog').addEventListener('click',()=>pageDialog.close());
document.getElementById('close-checkout').addEventListener('click',()=>checkoutDialog.close());
document.getElementById('back-to-preview').addEventListener('click',()=>{checkoutDialog.close();document.getElementById('preview').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});
const config=window.PLANNER_CONFIG||{};let checkoutUrl='';
if(config.checkoutUrl){try{const parsed=new URL(config.checkoutUrl);if(parsed.protocol!=='https:')throw Error('Checkout URL must use HTTPS.');checkoutUrl=parsed.href;}catch(e){console.warn(e.message);}}
if(config.priceLabel)document.getElementById('offer-text').textContent=config.priceLabel;
if(config.purchaseLabel)document.getElementById('purchase-button').textContent=config.purchaseLabel;
if(config.purchaseNote)document.getElementById('purchase-note').textContent=config.purchaseNote;
document.getElementById('purchase-button').addEventListener('click',()=>{if(checkoutUrl)window.location.assign(checkoutUrl);else checkoutDialog.showModal();});
document.getElementById('year').textContent=new Date().getFullYear();
