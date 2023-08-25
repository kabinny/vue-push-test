<template>
  <div>
    <h2>메인 페이지</h2>
    <h3>Notification.permission</h3>
    <p>{{ userPermission }}</p>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      userPermission: null
    }
  },
  mounted() {
    this.userPermission = Notification.permission
  },
  methods: {
  }
};
</script>
