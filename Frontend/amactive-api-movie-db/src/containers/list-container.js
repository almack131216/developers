import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";
import ConsoleLog from "../assets/console-log";
import SearchInput from "../components/search-input/search-input";
import SearchResults from "../components/search-results/search-results";
import Pagination from "../components/pagination/pagination";

class BoxContainer extends Component {
  constructor(props) {
    super(props);
    ConsoleLog("[BoxContainer] ", props);
    this.siteData = props.siteData;
    ConsoleLog("[BoxContainer] render()... siteData = ", this.siteData);
    this.showPagination = false;

    this.state = {
      query: props.list.query,
      page: props.list.page,
      resp: props.list.resp,
      total_pages: props.list.resp.total_pages,
      loading: true
    };
  }

  handleFilterChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    ConsoleLog("[BoxContainer] handleFilterChange > " + name + " = " + value);
    this.setState({ [name]: value });
  };

  goToPage = getPage => {
    ConsoleLog("[BoxContainer] goToPage > page = " + getPage);
    if (getPage === this.state.page) return;
    this.setState({ page: getPage, resp: {} });
    this.props.loadResults(this.state.query, getPage);
  };

  componentDidUpdate(oldProps) {
    console.log("CDU", oldProps.list, this.props.list);
    const newProps = this.props;
    if (oldProps.list.query !== newProps.list.query) {
      console.log(
        "CDU >>>>>>> query: ",
        oldProps.list.query,
        " -> ",
        newProps.list.query
      );
      this.updatePagination();
      this.setState({ loading: false });
    }
    if (oldProps.list.page !== newProps.list.page) {
      console.log(
        "CDU >>>>>> page: ",
        oldProps.list.page,
        " -> ",
        newProps.list.page
      );
      this.updatePagination();
      this.setState({ page: newProps.list.page });
    }
  }

  updatePagination() {
    // PAGINATION
    this.paginationElement = null;
    if (this.props.list.resp.results) {
      const sortedItems = this.props.list.resp.results;
      const currentPage = this.state.page;
      const totalPages = this.props.list.resp.total_pages;
      this.showPagination = totalPages > 1 ? true : false;
      ConsoleLog("[BoxContainer] showPagination: ", this.showPagination);
      // CHANGE page
      const paginate = pageNumber => this.goToPage(pageNumber);
      // CREATE pagination component based on props
      this.paginationElement = this.showPagination ? (
        <Pagination
          totalPosts={sortedItems.length}
          paginate={paginate}
          currentPage={currentPage}
          totalPages={this.props.list.resp.total_pages}
        />
      ) : null;
    }
    // (END) PAGINATION
  }

  componentDidMount() {
    // this.setState({ loading: false });
  }

  // searchSubmitted = getQuery => {
  //   updatePagination();
  // };

  render() {
    let { loading } = this.state;
    loading = this.props.list.resp.length > 0 ? true : false;

    if (loading) {
      return "loading...";
    }

    return (
      <div>
        <p>
          [2. BoxContainer] query: {this.state.query}, page: {this.state.page},
          showPagination: {this.showPagination === true ? "yes" : "no"}
        </p>
        {this.paginationElement}
        <SearchInput
          siteData={this.siteData}
          handleClick={() => this.props.loadResults(this.state.query, 1)}
          handlePageChange={p => this.goToPage(p)}
          query={this.state.query}
          changed={this.handleFilterChange}
        />
        <SearchResults
          siteData={this.siteData}
          page={this.state.page}
          resp={this.props.list.resp}
        />
        {this.paginationElement}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(BoxContainer);
