const allFood = document.querySelectorAll('.food');
allFood.forEach(food => {
  food.querySelector('.food-total').textContent = '$ 0.00';
});
allFood.forEach((food, index) => {
  food.addEventListener('click', (event) => {
    if(event.target.classList.contains('order-dec') || event.target.parentElement.classList.contains('order-dec')){
      changeOrder(food, 'dec');
    }
    if(event.target.classList.contains('order-inc') || event.target.parentElement.classList.contains('order-inc')){
      changeOrder(food, 'inc');
    }
  });
});
