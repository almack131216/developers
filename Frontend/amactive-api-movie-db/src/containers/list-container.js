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
      results: props.list.results
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
    this.setState({ page: getPage });
    this.props.loadResults(this.state.query, getPage);
  };

  render() {
    // PAGINATION
    let paginationElement = null;
    if (this.props.list.results && this.props.list.results.results) {
      const sortedItems = this.props.list.results.results;
      const currentPage = this.state.page;
      const totalPages = this.props.list.results.total_pages;
      this.showPagination = totalPages > 1 ? true : false;
      ConsoleLog("[BoxContainer] showPagination: ", this.showPagination);
      // CHANGE page
      const paginate = pageNumber => this.goToPage(pageNumber);
      // CREATE pagination component based on props
      paginationElement = this.showPagination ? (
        <Pagination
          totalPosts={sortedItems.length}
          paginate={paginate}
          currentPage={currentPage}
          totalPages={this.props.list.results.total_pages}
        />
      ) : null;
    }
    // (END) PAGINATION

    return (
      <div>
        <p>
          [2. BoxContainer] query: {this.state.query}, page: {this.state.page},
          showPagination: {this.showPagination === true ? "yes" : "no"}
        </p>
        {paginationElement}
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
          results={this.props.list.results}
        />
        {paginationElement}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(BoxContainer);
