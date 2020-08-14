const LeaderLine = window.LeaderLine;

function Line(el1, el2, opt) {
  var start, end, line, option = {};

  for(var k in opt) {
    if(option.hasOwnProperty(k)) option[k] = opt[k];
  }

  function refreshDom() {
    if(typeof el1 === typeof "") start = document.getElementById(el1);
    else if(!start) start = el1;

    if(typeof el2 === typeof "") end = document.getElementById(el2);
    else if(!end) end = el2;
  }

  function init() {
    refreshDom();
    if(start && end) {
      line = new LeaderLine(start, end, option);
    }
  }

  function position() {
    if(line) line.position();
    else init();
  }

  init();

  return {
    position,
    get start() {
      if(!start) refreshDom();
      return start;
    },
    get end() {
      if(!end) refreshDom();
      return end;
    },
    get line() {
      return line;
    }
  };
}

export default Line;
