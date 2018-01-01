import React, { Component } from 'react';
import { GridList, Card, Media, TextField, FontIcon } from 'react-md';

export default class Shots extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            searchTerm: undefined
        }

        this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
    }

    handleSearchTermChange(term) {
        this.setState({searchTerm: term.toLowerCase()})
    }

    handleListItemClick(item) {
        if(this.props.onClickItem) {
            this.props.onClickItem(item) 
        }
    }

    filterImages(image) {
        if (this.state.searchTerm === undefined) {
            return true
        }
        const value = image["title"] + ""
        if (value.toLowerCase().includes(this.state.searchTerm)) {
            return true
        }
        else return false
    }

    imageLike(id) {
        //isso é somente para testes
        document.getElementById(id).text++
    }

    render() {
        const styles ={
            social: {
                padding: "10px"
            },
            conteiner: {
                margin: "10px"
            }
        }
        return(
            <Card style={styles.conteiner}>
                <TextField
                    id="list-search-input"
                    label="Filtro"
                    lineDirection="center"
                    placeholder="Digite para filtrar"
                    className="md-cell--bottom"
                    style={{ marginBottom: "12px", padding: "10px" }}
                    onChange={this.handleSearchTermChange}
                />
                <GridList container="pictures" size={2} component="section">
                    {this.props.data
                        .filter((image) => this.filterImages(image))
                        .map(( item, key ) => 
                        <div>
                            <Card>
                                <Media>
                                    <img src={item.url} alt="Something" />
                                </Media>
                                <a class="fa fa-heart" aria-hidden="true"
                                    onClick={() => this.imageLike(key)} style={styles.social} id={key}>
                                    {/* <FontIcon iconClassName="fa fa-heart" aria-hidden="true"/> */}
                                    {/* <i class="fa fa-heart" aria-hidden="true"></i> */}
                                    {item.likes}
                                </a>
                            </Card>
                            <p style={styles.social}>{item.title}</p>
                        </div>
                    )}
                </GridList>
            </Card>
        )
    }
}