/* let myModule = {
  data: [],
  add: () => {},
  remove: () => {},
  render: () => {}
};
 */

let myModule = (function() {
  let _data = [];
  let _render = function() {};
  let _add = function() {};
  let _remove = function() {};

  return {
    render: _render
  };
})();
