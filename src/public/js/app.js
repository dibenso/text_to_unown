import $ from 'jquery';

$(document).ready(() => {
  const characterMap = {97: 'a', 98: 'b', 99: 'c', 100: 'd',
                        101: 'e', 102: 'f', 103: 'g', 104: 'h',
                        105: 'i', 106: 'j', 107: 'k', 108: 'l',
                        109: 'm', 110: 'n', 111: 'o', 112: 'p',
                        113: 'q', 114: 'r', 115: 's', 116: 't',
                        117: 'u', 118: 'v', 119: 'w', 120: 'x',
                        121: 'y', 122: 'z', 65: 'a', 66: 'b',
                        67: 'c', 68: 'd', 69: 'e', 70: 'f',
                        71: 'g', 72: 'h', 73: 'i', 74: 'j',
                        75: 'k', 76: 'l', 77: 'm', 78: 'n',
                        79: 'o', 80: 'p', 81: 'q', 82: 'r',
                        83: 's', 84: 't', 85: 'u', 86: 'v',
                        87: 'w', 88: 'x', 89: 'y', 90: 'z',
                        33: '!', 63: '?'};

  $("#character-input").keyup((event) => {
    let input = $("#character-input").val();

    $("#unown-text").text(input);
  });
});