<template>
    hello
</template>

<script>
import { useRouter } from 'vue-router';
router.push({ name: 'ProductDetail' });

export default {
  name: "ProductDetail",
  setup() {
    const router = useRouter();

    // Now you can use the router object as needed
    
    return {
      // any setup variables if needed
    };
  }
}

</script>