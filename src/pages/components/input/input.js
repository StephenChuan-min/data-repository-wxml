Component({
    properties: {
        autoFocus: {
            type: Boolean,
        },
        value: {
            type: String,
        }
    },
    options: {
        addGlobalClass: true,
    },
    data: {
    },
    lifetimes: {
        attached: function() {
            // 在组件实例进入页面节点树时执行
        },
        detached: function() {
            // 在组件实例被从页面节点树移除时执行
        },
    },
    methods: {
        handleInput(e) {
            const { value } = e.detail;
            this.triggerEvent('change', value);
        },
        doConfirm(e) {
            const { value } = e.detail
            this.triggerEvent('confirm', value);
        },
        handleFocus(e) {
            this.triggerEvent('focus');
        },
        handleBlur(e) {
            this.triggerEvent('blur');
        },
    }
});