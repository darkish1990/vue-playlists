<template>
  <div class="home">
    <div v-if="error" class="error">Could not fetch the data</div>
    <div v-if="documents && documents.length">
      <ListView :playlists="documents" />
    </div>
    <div v-else>
        <h3>Welcome to Vue Playlists</h3>
        <br/>
        <p>No Playlists Were Created</p>
    </div>
  </div>
</template>

<script>
import ListView from '../components/ListView.vue'
import getCollection from '../composables/getCollection'

export default {
  name: 'Home',
  components: { ListView },
  setup() {
    const { error, documents } = getCollection('playlists')

    return { error, documents }
  }
}
</script>
