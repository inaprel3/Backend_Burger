function changeOrder(food, changeType){
  let foodQuan = parseInt(food.querySelector('.order-val').textContent);
  let foodPrice = parseFloat(food.querySelector('.food-rate').textContent.replace(/[^\d.-]/g, '')); 
  if(changeType == 'dec' && foodQuan > 0) foodQuan--;
  if(changeType == 'inc') foodQuan++;
  food.querySelector('.order-val').textContent = foodQuan;
  food.querySelector('.food-total').textContent = `$ ${(foodQuan * foodPrice).toFixed(2)}`;
}