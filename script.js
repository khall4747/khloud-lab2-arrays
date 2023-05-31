const weekDays = ["Sunday", "Monday", "Tuesday"];
const week1 = ["tuseday", "fraday", "wdednseday"];
const week = weekDays.concat(week1);
console.log(week);

const words = ["knot", "roof", "snake", "humanity", "available", "automatic"];

const longWords = words.filter(function (currentValue, index, array) {
  if (currentValue.length > 6) {
    return console.log(currentValue);
  }
});
const shortWords = words.filter(function (currentValue, index, array) {
  if (currentValue.length == 4) {
    return console.log(currentValue);
  }
});

const num = [1, 9, 16, 15, 36, 45];
//all element that accept the condesion
const div35 = num.filter(function (currentValue, index, array) {
  if (currentValue % 3 == 0 && currentValue % 5 == 0) {
    return console.log(currentValue);
  }
});
//====من المصفوف التالية استخرج مصفوفة جديدة تقوم بتخزين مضروب العدد في نفسه
const power = num.forEach(function (currentValue, index, array) {
  const power = currentValue ** 2;
  return console.log(power);
});
///في مصفوفة جديده استخرج الجذر التربيعي للاعداد
const root = num.forEach(function (currentValue, index, array) {
  return console.log(currentValue ** 1 / 2);
});
///==================================
//find the first one only
const div2 = num.find(function (currentValue, index, array) {
  if (currentValue % 2 == 0) {
    return console.log(currentValue);
  }
});
const num_week = num.concat(week);
console.log(num_week);
const number = ["5", "6", "3"];
//==========================================
const find3 = number.find(function (currentValue, index, array) {
  if (currentValue == 3) {
    return console.log(currentValue);
  }
});
//حول مصفوفة week الى String===============================
const st = week.join();
console.log(st);
//حول مصفوفة num الى Stringو ضع بين عنصر @====================
const st1 = week.join("@");
console.log(st1);
//قم بعكس ترتيب مصفوفة week==============================
const rev = week.reverse();
console.log(rev);
//حول النص التالي الى مصفوفة بحيث يكون كل عنصر هو جمله تنتهي بـفاصلة ======
const text =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit, Eveniet beatae ut sequi ipsa, labore commodi,";
const sp = text.split(",");
console.log(sp);
