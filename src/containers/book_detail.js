import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        const book = this.props.book;
        if (book == null) {
            return (<div>Seleecione un libro por favor</div>);
        }
        return(
          <div>
              <h3>Details for:</h3>
              <div>{book.title}</div>
              <div>{`Paginas:${book.pages}`}</div>
          </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);