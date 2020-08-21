const LeaderLine = window.LeaderLine;

function Line(el1, el2, opt) {
  var start, end, line, option = {
    size: 2,
    path: 'fluid'
  };

  for(var k in opt) {
    if(option.hasOwnProperty(k)) option[k] = opt[k];
  }
  if(opt && opt.text) { option.middleLabel = LeaderLine.pathLabel(opt.text); }

  function refreshDom() {
    if(typeof el1 === typeof "") start = document.getElementById(el1);
    else if(!start) start = el1;

    if(typeof el2 === typeof "") end = document.getElementById(el2);
    else if(!end) end = el2;
  }

  function init() {
    refreshDom();
    if(start && end) {
      line = new LeaderLine(LeaderLine.pointAnchor(start, {x: '100%', y: '50%'}), LeaderLine.pointAnchor(end, {x: 0, y: '50%'}), option);
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
