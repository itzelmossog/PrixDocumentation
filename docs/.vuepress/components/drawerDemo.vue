<template>
    <div class="drawerWrapper">
        <button id="openDrawer" class ="button" style ="position: absolute;top: 50%;" @click="this.show()">Open drawer</button>
        <button @click="this.hide()">hide Drawer</button>

        <prix-drawer
            color="#4286F4"
            expand-size="medium"
            side="es-top"
            opacity="large"
            overflow-y = "true">
            <div slot="prixDrawerContentSlot" style="color:white;">
            <h1>Base 22 Drawer</h1>
            <p>Some Content</p>
            <p>Another Content</p>
            <p>Even more Content</p>
            <p>Ultimate content</p>
            <button id="closeDrawer" class ="button button2">Close</button>
            </div>
        </prix-drawer>
    </div>
    
</template>
<script>
export default {
    name: 'drawerDemo',
    data(){
        return{};
    },
    methods:{
        show(){
            let drawer = document.querySelector("prix-drawer");
            drawer.showDrawer();
        },
        hide(){
            let drawer = document.querySelector("prix-drawer");
            drawer.hideDrawer();
        }
    }
}
</script>

