export default function subsetByDate(data, pastOrFuture) {
  let now = new Date();
  if (pastOrFuture === "future") {
    now = now - 86400000;
    return data.filter((el) => now < new Date(el.show_date));
  } else {
    return data.filter((el) => now > new Date(el.show_date));
  }
}
