<template>
  <div class="col-5 item">
    <div class="card item-card card-block">
      <h4 class="item-card-title text-left p-2">
        <i class="material-icons">{{ character.name }}</i>
      </h4>
      <img :src="character.image" />
      <h5 class="card-title p-2">{{ character.status }}</h5>
      <p class=" p-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
        veritatis, error velit obcaecati eaque aspernatur odit nobis mollitia,
        odio blanditiis harum provident nesciunt ut itaque alias dolores
        excepturi est atque.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    character: [Object, Array],
  },
};
</script>
<style>
img {
  width: 100%;
}

.item {
  padding-left: 5px;
  padding-right: 5px;
  margin: 50px 0;
}

.item-card {
  transition: 0.5s;
  cursor: pointer;
}
.item-card-title {
  font-size: 15px;
  transition: 1s;
  cursor: pointer;
}
.item-card-title i {
  font-size: 15px;
  transition: 1s;
  cursor: pointer;
  color: #ffa710;
}
.card-title i:hover {
  transform: scale(1.25) rotate(100deg);
  color: #18d4ca;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
}

.card::before,
.card::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform 0.3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: "";
  pointer-events: none;
}
.card::before {
  transform-origin: left top;
}
.card::after {
  transform-origin: right bottom;
}
.card:hover::before,
.card:hover::after,
.card:focus::before,
.card:focus::after {
  transform: scale3d(1, 1, 1);
}
</style>
