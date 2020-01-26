import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";
import Box from "../components/box";
import Pagination from "../components/pagination/pagination";

class BoxContainer extends Component {
  constructor(props) {
    super(props);
    console.log("[BoxContainer] ", props);
    this.siteData = props.siteData;
    console.log("[BoxContainer] render()... siteData = ", this.siteData);

    this.state = {
      query: props.query,
      page: props.page,
      showPagination: false
    };
  }

  handleFilterChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    console.log("[BoxContainer] handleFilterChange > " + name + " = " + value);
    this.setState({ [name]: value });
  };

  goToPage = getPage => {
    console.log("[BoxContainer] goToPage > page = " + getPage);
    this.setState({ page: getPage });
    this.props.loadResults(this.state.query, getPage);
  };

  render() {
    // PAGINATION
    let paginationComp = null;
    if (this.props.results.results) {
      const sortedItems = this.props.results.results;
      const currentPage = this.state.page;
      const totalPages = this.props.results.total_pages;
      this.state.showPagination = totalPages > 1 ? true : false;
      console.log("[BoxContainer] showPagination: ", this.state.showPagination);
      // CHANGE page
      const paginate = pageNumber => this.goToPage(pageNumber);
      // CREATE pagination component based on props
      paginationComp = (
        <Pagination
          totalPosts={sortedItems.length}
          paginate={paginate}
          currentPage={currentPage}
          totalPages={this.props.results.total_pages}
        />
      );
    }
    // (END) PAGINATION

    return (
      <div>
        <p>
          [2. BoxContainer] query: {this.state.query}, page: {this.state.page},
          showPagination: {this.state.showPagination === true ? "yes" : "no"}
        </p>
        {this.state.showPagination === true ? paginationComp : null}
        <Box
          siteData={this.siteData}
          handleClick={() => this.props.loadResults(this.state.query, 1)}
          handlePageChange={p => this.goToPage(p)}
          query={this.state.query}
          page={this.state.page}
          results={this.props.results}
          changed={this.handleFilterChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(BoxContainer);
