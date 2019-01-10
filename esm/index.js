/*! (c) Andrea Giammarchi - ISC */
var Wire = (function (slice, proto) {

  proto = Wire.prototype;

  proto.valueOf = function (forceAppend) {
    var frag = this.f;
    var noFrag = frag == null;
    if (noFrag)
      frag = (this.f = this.d.createDocumentFragment());
    if (noFrag || forceAppend) {
      for (var n = this.n, i = 0, l = n.length; i < l; i++)
        frag.appendChild(n[i]);
    }
    return frag;
  };

  proto.remove = function (keepFirst) {
    var childNodes = this.n;
    var first = this.first;
    var last = this.last;
    this.f = null;
    if (keepFirst && childNodes.length === 2) {
      last.parentNode.removeChild(last);
    } else {
      var range = this.d.createRange();
      range.setStartBefore(keepFirst ? childNodes[1] : first);
      range.setEndAfter(last);
      range.deleteContents();
    }
    return first;
  };

  return Wire;

  function Wire(childNodes) {
    var nodes = (this.n = slice.call(childNodes, 0));
    this.d = (this.first = nodes[0]).ownerDocument;
    this.last = nodes[nodes.length - 1];
    this.f = null;
  }

}([].slice));
export default Wire;
