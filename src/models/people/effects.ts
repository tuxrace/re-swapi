import { Dispatch } from "../../store";
import { getAllPeopleAPI } from "../../rest/People";

export const effects = (dispatch: Dispatch) => ({
  async loadAllPeople(payload: any){
    const res = await getAllPeopleAPI(payload);
    dispatch.people.response(res);
    return res;
  },
});
