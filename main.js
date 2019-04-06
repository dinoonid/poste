//var radios = document.getElementsByName("productType");
var radios = document.querySelectorAll("input[name=productType]");
//var radio = document.querySelector("input[name=productType]:checked");

for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener("change", function(event) {
    var nameField = this.value;
    if (this.checked) {
      //document.getElementById("btn-next-step").disabled = false;
      document.getElementById("btn-next-step").removeAttribute("disabled");
    }
  });
}
var suffix = " FR";
document.querySelector("#burns").addEventListener("keyup", function(e) {
  var valueLength = this.value.length;

  this.value = this.value.replace(suffix, "");
  var vLength = this.value.length;
  if (vLength > 0) {
    document.querySelector("#burns2").disabled = true;
  }
  //console.log("res = " + this.value);

  this.value += suffix;
  this.focus();
  this.setSelectionRange(valueLength, valueLength);
});

document
  .querySelector("#burns, #burns2")
  .addEventListener("focus", function(e) {
    var cursorPosition = this.selectionStart;
    var valueLength = this.value.length;
    var suffixLength = suffix.length;
    var diffSuffix = valueLength - suffixLength;
    if (cursorPosition > diffSuffix) {
      this.setSelectionRange(diffSuffix, diffSuffix);
    }
    console.log("cursorPosition = " + cursorPosition);
    console.log("valueLength = " + valueLength);
  });
