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

## If and For statements in your html code

If statements in vue are used to make sure your element and children elements only exist on the page if a condition is met.
The syntax of the vue if statements is the same as normal js meaning you can still use && and || in it.
<br>
For loops in vue create a copy of the current element and children for each loop, this means you are able to call an event from a child 
and pass the data of that loop value into said event.
<br>
If you wish to loop through numbers, you want to do `v-for="index in 30"`. This would loop from 1-30
```javascript
Vue.component('test_component', {
    template: `
        <div v-if="show" <!-- v-show can also work, it just means the object is loaded but is set to invisible, so make sure the data there is valid -->>
            <p v-for="test of testArray">{{ test.name }}</p>
        </div>
    `,
    data() {
        return {
            testArray: [
                { name: 'test' },
                { name: 'testOne' }
            ],
            
            show: true
        }
    }
});
```

The output of this on the html page is:
```html
<body>
    <div id="vueApp">
        <div>
            <p>test</p>
            <p>testOne</p>
        </div>
    </div>
</body>
```

Notice how none of the vue stuff shows up here, that is because vue is practically hidden in runtime

## Grabbing global data from your Vue parent via a component
Global variables are really useful in vue, you can use them to assign the same data to different components and make
your project feel more connected.

```javascript
let app = new Vue({
    el: '#vueApp',
    data() {
        return {
            //This is a parent variable
            testData: true
        }
    },
    methods: {
        //This is a parent method
        testMethod: function(data) {
            //do somthing with the data
            return data;
        }
    }
});
```

```javascript
Vue.component('test_component', {
    template: `
        <!-- You can access it jsut as you would normal data -->
        <div v-if="testData">
        
        </div>
    `,
    methods: {
        //For methods, you can either return or just run it, but I would recommend not
        //using computed for these as it can cause issues.
        testMethod: function(data) {
            return this.$parent.testMethod(data);
        }
    },
    computed: {
        //It is important that this is in the computed section, this ensures that anytime the variable
        //changes, it updates anywhere it is referenced in this component
        testData() {
            return this.$parent.testData;
        }
    }
});
```

Keep in mind that if your component is nested inside another component, you need to grab the parent of
the parent component. so it would be "this.$parent.$parent.testData";

## Mounting and emitting events
Coming soon...