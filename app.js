function isEmpty(str) {
  return str === "";
}
console.log(isEmpty("")); // true
console.log(isEmpty("hello")); // false
console.log(isEmpty(" ")); // false
//
function convertToGEL(dollars) {
  const exchangeRate = 2.7;
  if (dollars < 0) {
    return "XXX Negative amounts are not allowed. XXX";
  }

  return dollars * exchangeRate;
}
console.log(convertToGEL(100)); // 270
console.log(convertToGEL(50)); // 135
console.log(convertToGEL(-12)); //error

///
function CountryByCurrency(code) {
  switch (code) {
    case "USD":
      return "United States";
    case "EUR":
      return "European Union";
    case "GEL":
      return "Georgia";
    default:
      return "Unknown currency";
  }
}
console.log(CountryByCurrency("USD")); // United States
console.log(CountryByCurrency("EUR")); // European Union
console.log(CountryByCurrency("GEL")); // Georgia
console.log(CountryByCurrency("JPY")); // Unknown

//

function LowerCaseconv(text) {
  return text.toLowerCase();
}
console.log(LowerCaseconv("MY NAME IS PETRE"));
console.log(LowerCaseconv("HELLO WORLD"));
//
function FGreaterThan100(numbers) {
  return numbers.filter(function (num) {
    return num > 100;
  });
}
const arrowGreaterThan100 = (numbers) => numbers.filter((num) => num > 100);

const nums = [50, 120, 85, 250, 99, 3300];

console.log(FGreaterThan100(nums));
console.log(arrowGreaterThan100(nums));
///
function CheapestProduct(items) {
  let minProduct = items[0];

  for (let i = 1; i < items.length; i++) {
    if (items[i].price < minProduct.price) {
      minProduct = items[i];
    }
  }

  return minProduct;
}
const cheapest = CheapestProduct(data.items);
console.log(
  "Cheapest product:",
  cheapest.productName,
  "-",
  cheapest.price,
  "₾"
);
////
function findByIdOrName(array, value) {
  const found = array.find((item) => {
    return item.productId === Number(value) || item.productName === value;
  });

  if (!found) {
    console.log("Item not found");
  }

  return found;
}

const result1 = findByIdOrName(data.items, "45858");
console.log("By ID:", result1);

const result2 = findByIdOrName(data.items, "Xiaomi Robot Vacuum X20+ White");
console.log("By Name:", result2);
