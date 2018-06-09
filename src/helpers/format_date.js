export function format_date(date){
  if (date == null) { return date;}
  let d = String(date).split(" ");
  date = d[1]+" "+d[2]+" "+d[3];
  return date;
}