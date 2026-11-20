(function () {
  var bt = document.getElementById('bt'), mn = document.getElementById('menu');
  if (bt && mn) {
    bt.addEventListener('click', function () {
      bt.setAttribute('aria-expanded', mn.classList.toggle('open'));
    });
  }
  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  var f = document.getElementById('f');
  if (!f) return;
  var msg = document.getElementById('msg');
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!f.reportValidity()) return;
    var data = new FormData(f);
    var nom = String(data.get('nom') || '').trim();
    var email = String(data.get('email') || '').trim();
    var telephone = String(data.get('tel') || '').trim();
    var service = String(data.get('service') || '').trim();
    var demande = String(data.get('message') || '').trim();
    var texte = [
      'Bonjour Digital Care Technologies',
      '',
      'Nom : ' + nom,
      'E-mail : ' + email,
      'Téléphone : ' + (telephone || 'Non renseigné'),
      'Service : ' + service,
      '',
      'Message :',
      demande
    ].join('\n');
    var whatsappUrl = 'https://wa.me/2250718414065?text=' + encodeURIComponent(texte);
    msg.className = 'ok';
    msg.textContent = 'Ouverture de WhatsApp…';
    var opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!opened) window.location.href = whatsappUrl;
    f.reset();
  });
})();
