function Line(el1, el2, opt) {
  var start, end, option = {};

  function refreshDom() {
    if(typeof el1 === typeof "") start = document.getElementById(el1);
    else if(!start) start = el1;

    if(typeof el2 === typeof "") end = document.getElementById(el2);
    else if(!end) end = el2;
  }

  return {
    get start() {
      if(!start) refreshDom();
      return start;
    },
    get end() {
      if(!end) refreshDom();
      return end;
    }
  };
}

export default Line;
