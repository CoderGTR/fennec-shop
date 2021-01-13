import ViewDetails from "./view-details.js";
import Publisher from "../helpers/publisher.js";

export default class ControllerDetails {
    constructor() {
        this.view = new ViewDetails();
        this.publisher = new Publisher();
        this.events = this.publisher.events;

        this.publisher.subscribe(this.events.SHOW_DETAILS, this.onDetails);
    }

    onDetails = data => {
        this.view.render(data);
    }
}