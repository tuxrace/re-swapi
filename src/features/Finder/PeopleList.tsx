import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { Dialog, LinearProgress } from "@material-ui/core";
import ListWrapper from "./ListWrapper";
import { API_URL } from "../../rest/constants";
import Details from "./Details";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";

const Transition = React.forwardRef<unknown, TransitionProps>(
  function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  }
);

type Props = {
  loadAllPeople: (params: any) => void;
  response: any;
  search: string | any;
};

const PeopleList: React.FC<Props> = ({ loadAllPeople, response, search }) => {
  const [state, setState]: any = useState({
    list: [],
    next: API_URL,
    search: null,
    hasNext: true,
    isLoading: false,
    showModal: false,
    selected: null,
    isLoadingSearch: false
  });

  useEffect(() => {
    doSearch();
  }, [search]);

  const loadNext = async (...args: any) => {
    let url = state.next;

    setState({ ...state, isLoading: true });
    const res = (await loadAllPeople(url)) as any;

    if (res.next) {
      setState({
        hasNext: state.list.length < res.count,
        isLoading: false,
        list: [...state.list].concat(res.results),
        next: res.next
      });
    } else {
      setState({
        hasNext: false,
        isLoading: false,
        list: [...state.list].concat(res.results)
      });
    }
  };

  const doSearch = async () => {
    const isSearch = search && search.length > 1;
    let url = state.next;
    if (isSearch) {
      url = `${API_URL}/?search=${search}`;
    } else {
      url = API_URL;
    }

    setState({ ...state, isLoadingSearch: true });
    const res = (await loadAllPeople(url)) as any;

    if (res.next) {
      setState({
        hasNext: state.list.length < res.count,
        isLoading: false,
        list: (isSearch ? [...state.list] : []).concat(res.results),
        next: res.next
      });
    } else {
      setState({
        hasNext: false,
        isLoading: false,
        list: res.results
      });
    }
  };

  const handleClickListItem = (index: number) => {
    setState({ ...state, showModal: true, selected: index });
  };

  const handleClose = () => {
    setState({ ...state, showModal: false, selected: null });
  };

  const data = state.list[state.selected] || {};

  return (
    <Fragment>
      {state.isLoadingSearch ? (
        <LinearProgress />
      ) : (
        <ListWrapper
          hasNext={state.hasNext}
          loadNext={loadNext}
          list={state.list}
          isLoading={state.isLoading}
          response={response}
          handleClickListItem={handleClickListItem}
        />
      )}
      <Dialog
        open={state.showModal}
        fullScreen
        TransitionComponent={Transition}
      >
        <Details data={data} handleClose={handleClose} />
      </Dialog>
    </Fragment>
  );
};

const mapState = (state: any) => {
  return {
    response: state.people.response
  };
};

const mapDispatch = (dispatch: any) => ({
  loadAllPeople: dispatch.people.loadAllPeople
});

export default connect(mapState, mapDispatch)(PeopleList);
