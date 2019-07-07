<template>
    <div class="modal-wrapper">
        <button @click="show()">Toggle modal</button>
        <prix-modal
        color-header="#4286F4"
        color-header-text="white"
        color-body="white"
        color-body-text="black"
        color-footer="#F7F7F7"
        expand-size-width="70%"
        cancel-label="Decline"
        accept-label="Ok"
        cancel-label-color="#fbe4e4"
        cancel-label-color-text="#b52626"
        accept-label-color="#EAF4EB"
        accept-label-color-text="#43a047"
        >
        <h1 slot="headerModalContent">
            Base22
        </h1>
        <p slot="bodyModalContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </prix-modal>
    </div>
</template>

<script>
export default{
    name: 'modalDemo',
    data (){
        return {

        };
    },
    methods: {
      show(){
          let modal = document.querySelector('prix-modal');
          modal.showModal();
      }  
    }
};
</script>

