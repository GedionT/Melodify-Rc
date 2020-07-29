import { spinnerService } from "@simply007org/react-spinners";
import * as Axios from "axios";

const root = "https://txtscraper.herokuapp.com";

function getData(url) {
  spinnerService.show("mySpinner");
  const dest = `${root}/scrape?url=${url.url}`;
  const data = Axios.get(dest)
    .then((res) => {
      spinnerService.hide("mySpinner");
      return res.data;
    })
    .catch((err) => {
      spinnerService.hide("mySpinner");
      console.log("error: " + err);
      return "try again";
    });
  return data;
}

export default getData;
