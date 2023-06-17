# Getting Started With VueJS

## Adding Vue to Your Project
You can add Vue to your project using a CDN script tag
```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
```

## Setting up an App Instance
You need to start by creating a new Vue App instance in your script tag.

```javascript
let app = new Vue({
    el: '#vueApp', //This is the main Vue instance element id
    data() {
        return {} //This is where your global variables go
    },
    methods: {}, //This is where your global methods go
    computed: {}, //You put methods that you wish to change the output based on variable updates here
    mounted() {} //You put methdos you want to mount to the global instance here
});
```

#### Note: I recommend having only one of these per project.

## Attaching the Vue App instance to your html

```html
<body>
    <div id="vueApp"> <!-- This is the element that is referenced by your Vue app, anything outside of this div will not be read as Vue code -->
        
    </div>
</body>
```