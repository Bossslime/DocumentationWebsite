# Simple API Docs for LIFX Light Bulbs
### Class Initialization
```JavaScript
const lifxObj = require('lifx-api');
const lifx = new lifxObj("Your API Key");

const selector = "location_id:YourLocationID"; //Ths can be changed to any of their selectors such as homes and rooms
```

### Device Listing
```JavaScript
lifx.listLights(selector, function (devices) {
    devices = JSON.parse(devices);
    for (let device of devices) {
        console.log(`---------------------------------------------------------------------\n` +
            `Device Found:\n\n` +
            `Name:         ${device.label} (${device.id})\n` +
            `Type:         ${device.product_name}\n` +
            `Location:     ${device.location.name} (${device.location.id})\n` +
            `Group:        ${device.group.name} (${device.group.id})`
        );
    }
    console.log(`---------------------------------------------------------------------`);
});
```

### Power Toggling
```JavaScript
lifx.togglePower(selector);
```