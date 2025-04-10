AFRAME.registerComponent('highlight', {
  init: function () {
    var buttonEls = this.buttonEls = this.el.querySelectorAll('.menu-button');
    var backgroundEl = document.querySelector('#background');
    this.onClick = this.onClick.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.reset = this.reset.bind(this);
    backgroundEl && backgroundEl.addEventListener('click', this.reset);

    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('mouseenter', this.onMouseEnter);
      buttonEls[i].addEventListener('mouseleave', this.onMouseLeave);
      buttonEls[i].addEventListener('click', this.onClick);
    }
  },

  onClick: function (evt) {
    // Hapus scale manual dan gunakan event animasi
    if (this.selectedButton) {
      this.selectedButton.emit('mouseleave'); // Kembalikan ke normal
    }

    this.selectedButton = evt.target;
    this.selectedButton.emit('mouseenter'); // Beri efek "terpilih"

    // Highlight border/frame (ubah warna)
    evt.target.setAttribute('material', 'color', '#046de7');
    this.el.addState('clicked');
  },

  onMouseEnter: function (evt) {
    var buttonEls = this.buttonEls;

    // Tambahkan efek glow saat hover
    evt.target.setAttribute('material', 'color', '#046de7; emissive: #ffcc00; emissiveIntensity: 1');
    evt.target.emit('mouseenter'); // Pakai animasi scale via mixin

    // Reset warna tombol lainnya
    for (var i = 0; i < buttonEls.length; ++i) {
      if (evt.target === buttonEls[i]) { continue; }
      buttonEls[i].setAttribute('material', 'color', 'white');
    }
  },

  onMouseLeave: function (evt) {
    // Jika tombol yang diklik, jangan ubah scale
    if (this.selectedButton === evt.target) {
      return;
    }

    evt.target.setAttribute('material', 'color', 'white');
    evt.target.emit('mouseleave'); // Kembalikan ke scale semula
  },

  reset: function () {
    var buttonEls = this.buttonEls;
    this.el.removeState('clicked');

    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].emit('mouseleave');
      buttonEls[i].setAttribute('material', 'color', 'white');
    }

    this.selectedButton = null;
  }
}); 