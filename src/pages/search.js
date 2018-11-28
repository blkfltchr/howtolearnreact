import React, { Component } from 'react';
import Header from '../components/Header';
import Search from '../components/search/index';
import Footer from '../components/Footer';

export default class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <Search />
                <Footer />
            </div>
        )
    }
}