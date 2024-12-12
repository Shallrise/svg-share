<template>
  <div class="timeline">
    <article
      v-for="(item, index) in items"
      :key="index"
      class="timeline-item"
      :style="{ '--item-size': itemSize + 'px' }"
    >
      <div class="content">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Item 1', description: 'Description of Item 1' },
        { title: 'Item 2', description: 'Description of Item 2' },
        { title: 'Item 3', description: 'Description of Item 3' },
        { title: 'Item 4', description: 'Description of Item 4' },
        { title: 'Item 5', description: 'Description of Item 5' },
        // 可以根据需要添加更多的条目
      ],
      itemSize: 300, // 每个条目的宽度（可以调整）
    };
  },
};
</script>

<style scoped>
.timeline {
  position: relative;
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  width: 100%;
  padding-inline: calc((100vw - var(--item-size)) / 2);
}

.timeline-item {
  scroll-snap-align: center;
  scroll-snap-stop: always;
  position: relative;
  width: var(--item-size);
  height: 300px; /* 这里根据需要调整条目的高度 */
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center;
  animation: reveal linear both;
  animation-timeline: view(inline);
}

@keyframes reveal {
  0%,
  100% {
    transform: translate(0, -25%) scale(0.7);
    opacity: 0.2;
  }
  50% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
}

.content {
  text-align: center;
}

h2 {
  font-size: 1.5em;
  margin: 0;
}

p {
  font-size: 1em;
  color: #555;
}
</style>
