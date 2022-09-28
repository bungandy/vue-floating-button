import { openBlock, createElementBlock, withModifiers } from 'vue';

var script = {
  name: 'FloatingButton',
  methods: {
    handleClick(){
      console.log('clicked');
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", {
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => ($options.handleClick && $options.handleClick(...args)), ["prevent"]))
  }, "Floating Button"))
}

script.render = render;
script.__file = "src/FloatingButton.vue";

var components = { FloatingButton: script };

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

export { plugin as default };
