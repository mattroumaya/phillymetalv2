export default function subsetByDate(data, pastOrFuture) {
  let now = new Date();
  if (pastOrFuture === "future") {
    return data.filter((el) => now < new Date(el.show_date));
  } else {
    return data.filter((el) => now > new Date(el.show_date));
  }
}
