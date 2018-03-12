export function format_date(date){
  let d = String(date).split(" ");
  let formatted_date = d[1]+" "+d[2]+" "+d[3];
  return formatted_date;
}