Electron.Wordwrap = function() {
  var wrapped = false
  Neutron.addMenuItem('Format', 'Word Wrap', function() {
    Neutron.toggleMenuItemState('Format', 'Word Wrap')
    if (wrapped) {    
      wrapped = false
      currentBuffer.dom().style.wordWrap = 'normal'
    } else {
      wrapped = true
      currentBuffer.dom().style.wordWrap = 'break-word'
    }
  })
}

Electron.Wordwrap.prototype = {
  deactivate: function() {
    Neutron.removeMenuItem('Format', 'Word Wrap')
  }
}