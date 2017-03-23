var GVFApi = function () {
    console.log("GVF API for parent projects created");
    window.addEventListener("message", this.handleEvent.bind(this), false);

    this.registered = [];
};


GVFApi.prototype.handleEvent = function (evt) {
    if (typeof evt.data === "undefined" || typeof evt.data.type === "undefined" || evt.data.type !== "gvfapiupevent")
        return;

    for (var i = 0; i < this.registered.length; i++) {
        if (this.registered[i].name === evt.data.name)
            this.registered[i].fct(evt.data.data);
    }
};


GVFApi.prototype.registerEvent = function (eventName, fct) {
    var registering = {
        name: eventName,
        fct: fct
    };
    this.registered.push(registering);
};


GVFApi.prototype.sendToGvf = function(eventName, data) {
    var iframes = document.getElementsByTagName('iframe');
    console.log("Sending event to Iframe", eventName, data);
    var iframe = iframes[0];
    var out = {
        name : eventName,
        data : data,
        type : "gvfapidownevent"
    };
    iframe.contentWindow.postMessage(out, "*");
};



