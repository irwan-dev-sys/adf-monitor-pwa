const CACHE_NAME = 'adf-monitor-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Hanya melakukan pass-through, tidak ada caching berat 
  // karena data dinamis langsung dari iframe Google Apps Script
  event.respondWith(fetch(event.request));
});