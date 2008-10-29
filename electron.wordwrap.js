Electron.Wordwrap = function() {
  var wrapped = false
  Neutron.addMenuItem('Format', 'Word Wrap', function() {
    currentBuffer.dom().style.wordWrap = wrapped ? 'normal' : 'break-word'
    wrapped = Neutron.toggleMenuItemState('Format', 'Word Wrap')
  })
}

Electron.Wordwrap.prototype = {
  deactivate: function() {
    Neutron.removeMenuItem('Format', 'Word Wrap')
    currentBuffer.dom().style.wordWrap = 'normal'
  }
}