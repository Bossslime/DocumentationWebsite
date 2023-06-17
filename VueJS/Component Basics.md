# Component Basics

## Creating a Component
You first need to create a simple component in your script tag

```javascript
Vue.component('test_component', {
    template: `
        <!-- This is just html code, you are able to do for loops, ifs, and binds here. -->
    `,
    data() {
        return {} //This is where your global variables go
    },
    methods: {}, //This is where your global methods go
    computed: {}, //You put methods that you wish to change the output based on variable updates here
    mounted() {} //You put methdos you want to mount to the global instance here
});
```

#### I recommend using one div container for your component template, Vue can throw errors otherwise

## Referencing the Component in Your HTML

```html
<body>
    <div id="vueApp">
        <test_component></test_component> <!-- This will place the component on the page, Vue does the rest! -->
    </div>
</body>
```