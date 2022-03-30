document.addEventListener('DOMContentLoaded', function() {
    if (!(document.referrer.split('http://').join('').split('https://').join('').startsWith('dwellingspace.co.uk')||document.referrer==='')) {
      document.querySelector('#referrer-banner').style.display = 'block';
    }
});

// polyfill
if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        value: function(search, rawPos) {
            var pos = rawPos > 0 ? rawPos|0 : 0;
            return this.substring(pos, pos + search.length) === search;
        }
    });
}
